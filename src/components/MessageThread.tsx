import { useEffect, useState, useRef } from 'react';
import { Send } from 'lucide-react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  content: string;
  sender_id: string;
  receiver_id: string;
  created_at: string;
  profiles: {
    full_name: string;
    avatar_url?: string;
  };
}

interface MessageThreadProps {
  conversationId: string;
  currentUserId: string;
}

export const MessageThread = ({ conversationId, currentUserId }: MessageThreadProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchMessages();
    
    const channel = supabase
      .channel(`messages:${conversationId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
          filter: `conversation_id=eq.${conversationId}`,
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new as Message]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [conversationId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from('messages')
      .select('*')
      .eq('conversation_id', conversationId)
      .order('created_at', { ascending: true });

    if (error) {
      toast({
        title: 'Erreur',
        description: 'Impossible de charger les messages',
        variant: 'destructive',
      });
      return;
    }

    if (data) {
      const messagesWithProfiles = await Promise.all(
        data.map(async (msg) => {
          const { data: profile } = await supabase
            .from('profiles')
            .select('full_name, avatar_url')
            .eq('user_id', msg.sender_id)
            .single();
          
          return {
            ...msg,
            profiles: profile || { full_name: 'Utilisateur', avatar_url: undefined },
          };
        })
      );
      setMessages(messagesWithProfiles as Message[]);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim() || loading) return;

    setLoading(true);
    
    // Get receiver_id from first message in conversation
    const firstMessage = messages[0];
    const receiverId = firstMessage?.sender_id === currentUserId 
      ? firstMessage?.receiver_id 
      : firstMessage?.sender_id;

    const { error } = await supabase.from('messages').insert({
      conversation_id: conversationId,
      sender_id: currentUserId,
      receiver_id: receiverId || currentUserId,
      content: newMessage,
    });

    if (error) {
      toast({
        title: 'Erreur',
        description: 'Impossible d\'envoyer le message',
        variant: 'destructive',
      });
    } else {
      setNewMessage('');
    }
    setLoading(false);
  };

  return (
    <Card className="flex flex-col h-[600px]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => {
          const isOwn = message.sender_id === currentUserId;
          return (
            <div
              key={message.id}
              className={`flex gap-3 ${isOwn ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src={message.profiles?.avatar_url} />
                <AvatarFallback>{message.profiles?.full_name?.[0]}</AvatarFallback>
              </Avatar>
              <div className={`flex flex-col ${isOwn ? 'items-end' : 'items-start'}`}>
                <div
                  className={`px-4 py-2 rounded-lg max-w-md ${
                    isOwn ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
                <span className="text-xs text-muted-foreground mt-1">
                  {new Date(message.created_at).toLocaleTimeString('fr-FR', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t p-4">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Écrivez votre message..."
          />
          <Button onClick={sendMessage} disabled={loading}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
