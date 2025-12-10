import { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Send, Paperclip, Image, File, Search, Users, 
  MoreVertical, Phone, Video, Smile, X, Check, CheckCheck
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  read: boolean;
  attachments?: { type: string; url: string; name: string }[];
}

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  isGroup: boolean;
  members?: string[];
  isTyping?: boolean;
}

const mockConversations: Conversation[] = [
  { id: '1', name: 'Hôtel Fouta Djallon', avatar: '🏨', lastMessage: 'Votre réservation est confirmée', timestamp: '10:30', unread: 2, isGroup: false },
  { id: '2', name: 'Support Client', avatar: '💬', lastMessage: 'Comment puis-je vous aider ?', timestamp: 'Hier', unread: 0, isGroup: false },
  { id: '3', name: 'Groupe Voyage Conakry', avatar: '👥', lastMessage: 'Ibrahim: Super idée !', timestamp: '09:15', unread: 5, isGroup: true, members: ['Mamadou', 'Fatoumata', 'Ibrahim'] },
];

const mockMessages: Message[] = [
  { id: '1', senderId: 'host', senderName: 'Hôtel Fouta Djallon', content: 'Bonjour ! Merci pour votre réservation.', timestamp: '10:00', read: true },
  { id: '2', senderId: 'me', senderName: 'Moi', content: 'Merci ! Est-ce que le petit-déjeuner est inclus ?', timestamp: '10:05', read: true },
  { id: '3', senderId: 'host', senderName: 'Hôtel Fouta Djallon', content: 'Oui, le petit-déjeuner buffet est inclus de 7h à 10h.', timestamp: '10:10', read: true },
  { id: '4', senderId: 'host', senderName: 'Hôtel Fouta Djallon', content: 'Voici le menu de notre restaurant :', timestamp: '10:12', read: true, attachments: [{ type: 'pdf', url: '#', name: 'menu-restaurant.pdf' }] },
  { id: '5', senderId: 'me', senderName: 'Moi', content: 'Parfait, merci beaucoup !', timestamp: '10:15', read: true },
  { id: '6', senderId: 'host', senderName: 'Hôtel Fouta Djallon', content: 'Votre réservation est confirmée', timestamp: '10:30', read: false },
];

export function EnhancedMessaging() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(mockConversations[0]);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [newMessage, setNewMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showAttachmentMenu, setShowAttachmentMenu] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulate typing indicator
  useEffect(() => {
    if (newMessage.length > 0) {
      // In real app, broadcast typing status via Supabase realtime
      const timeout = setTimeout(() => {
        setIsTyping(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [newMessage]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      senderId: 'me',
      senderName: 'Moi',
      content: newMessage,
      timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
      read: false,
    };

    setMessages([...messages, message]);
    setNewMessage('');

    // Simulate reply after 2 seconds
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const reply: Message = {
          id: (Date.now() + 1).toString(),
          senderId: 'host',
          senderName: selectedConversation?.name || 'Host',
          content: 'Merci pour votre message ! Je vous réponds dans les plus brefs délais.',
          timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
          read: false,
        };
        setMessages(prev => [...prev, reply]);
      }, 2000);
    }, 1000);
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast({ title: t('error'), description: t('fileTooLarge'), variant: 'destructive' });
      return;
    }

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `attachments/${fileName}`;

      // In real app, upload to Supabase storage
      const message: Message = {
        id: Date.now().toString(),
        senderId: 'me',
        senderName: 'Moi',
        content: '',
        timestamp: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
        read: false,
        attachments: [{
          type: file.type.startsWith('image/') ? 'image' : 'file',
          url: URL.createObjectURL(file),
          name: file.name
        }]
      };

      setMessages([...messages, message]);
      toast({ title: t('success'), description: t('fileSent') });
    } catch (error) {
      toast({ title: t('error'), description: t('uploadFailed'), variant: 'destructive' });
    }

    setShowAttachmentMenu(false);
  };

  const handleSearchMessages = (query: string) => {
    setSearchQuery(query);
    // Filter messages based on query
  };

  const filteredMessages = searchQuery
    ? messages.filter(m => m.content.toLowerCase().includes(searchQuery.toLowerCase()))
    : messages;

  return (
    <div className="flex h-[600px] border rounded-lg overflow-hidden">
      {/* Conversations List */}
      <div className="w-80 border-r bg-muted/20 flex flex-col">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder={t('searchConversations')}
              className="pl-10"
            />
          </div>
        </div>
        
        <ScrollArea className="flex-1">
          {mockConversations.map((conv) => (
            <div
              key={conv.id}
              onClick={() => setSelectedConversation(conv)}
              className={`p-4 cursor-pointer hover:bg-muted/50 transition-colors ${
                selectedConversation?.id === conv.id ? 'bg-primary/10' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                  {conv.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm truncate flex items-center gap-1">
                      {conv.name}
                      {conv.isGroup && <Users className="h-3 w-3 text-muted-foreground" />}
                    </p>
                    <span className="text-xs text-muted-foreground">{conv.timestamp}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{conv.lastMessage}</p>
                </div>
                {conv.unread > 0 && (
                  <Badge className="bg-primary">{conv.unread}</Badge>
                )}
              </div>
            </div>
          ))}
        </ScrollArea>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedConversation ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-xl">
                  {selectedConversation.avatar}
                </div>
                <div>
                  <p className="font-semibold">{selectedConversation.name}</p>
                  {selectedConversation.isGroup && (
                    <p className="text-xs text-muted-foreground">
                      {selectedConversation.members?.join(', ')}
                    </p>
                  )}
                  {isTyping && (
                    <p className="text-xs text-primary animate-pulse">{t('typing')}...</p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                  <Search className="h-4 w-4" onClick={() => {}} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Video className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Search in messages */}
            {searchQuery !== '' && (
              <div className="p-2 bg-muted/30 flex items-center gap-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(e) => handleSearchMessages(e.target.value)}
                  placeholder={t('searchInMessages')}
                  className="flex-1 h-8"
                />
                <Button variant="ghost" size="sm" onClick={() => setSearchQuery('')}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {filteredMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] p-3 rounded-lg ${
                        message.senderId === 'me'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      {message.content && <p className="text-sm">{message.content}</p>}
                      
                      {/* Attachments */}
                      {message.attachments?.map((att, idx) => (
                        <div key={idx} className="mt-2">
                          {att.type === 'image' ? (
                            <img src={att.url} alt={att.name} className="max-w-full rounded" />
                          ) : (
                            <div className="flex items-center gap-2 p-2 bg-background/20 rounded">
                              <File className="h-4 w-4" />
                              <span className="text-xs truncate">{att.name}</span>
                            </div>
                          )}
                        </div>
                      ))}
                      
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-xs opacity-70">{message.timestamp}</span>
                        {message.senderId === 'me' && (
                          message.read 
                            ? <CheckCheck className="h-3 w-3 text-blue-400" />
                            : <Check className="h-3 w-3 opacity-70" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-muted p-3 rounded-lg">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setShowAttachmentMenu(!showAttachmentMenu)}
                  >
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  
                  {showAttachmentMenu && (
                    <div className="absolute bottom-12 left-0 bg-popover border rounded-lg shadow-lg p-2 space-y-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start gap-2"
                        onClick={() => {
                          fileInputRef.current?.click();
                          fileInputRef.current?.setAttribute('accept', 'image/*');
                        }}
                      >
                        <Image className="h-4 w-4 text-green-500" />
                        {t('image')}
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start gap-2"
                        onClick={() => {
                          fileInputRef.current?.click();
                          fileInputRef.current?.setAttribute('accept', '.pdf,.doc,.docx');
                        }}
                      >
                        <File className="h-4 w-4 text-blue-500" />
                        {t('document')}
                      </Button>
                    </div>
                  )}
                </div>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder={t('typeMessage')}
                  className="flex-1"
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                
                <Button variant="ghost" size="icon">
                  <Smile className="h-5 w-5" />
                </Button>
                
                <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
                  <Send className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            {t('selectConversation')}
          </div>
        )}
      </div>
    </div>
  );
}