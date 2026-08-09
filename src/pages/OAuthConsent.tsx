import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import logoSimandou from "@/assets/logo-simandou.svg";

export default function OAuthConsent() {
  const [params] = useSearchParams();
  const authorizationId = params.get("authorization_id") ?? "";
  const [details, setDetails] = useState<any>(null);
  const [needsLogin, setNeedsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!authorizationId) return setError("Paramètre authorization_id manquant");
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        if (active) setNeedsLogin(true);
        return;
      }
      const { data, error } = await (supabase.auth as any).oauth.getAuthorizationDetails(
        authorizationId,
      );
      if (!active) return;
      if (error) return setError(error.message);
      const immediate = data?.redirect_url ?? data?.redirect_to;
      if (immediate && !data?.client) {
        window.location.href = immediate;
        return;
      }
      setNeedsLogin(false);
      setDetails(data);
    })();
    return () => {
      active = false;
    };
  }, [authorizationId, reload]);

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) return setError(error.message);
    setReload((n) => n + 1);
  }

  async function decide(approve: boolean) {
    setBusy(true);
    const oauth = (supabase.auth as any).oauth;
    const { data, error } = approve
      ? await oauth.approveAuthorization(authorizationId)
      : await oauth.denyAuthorization(authorizationId);
    if (error) {
      setBusy(false);
      return setError(error.message);
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      return setError("Aucune redirection renvoyée par le serveur d'autorisation.");
    }
    window.location.href = target;
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6 gradient-secondary">
      <Card className="w-full max-w-md p-6 md:p-8 shadow-strong space-y-4">
        <img src={logoSimandou} alt="Simandou Séjour" className="h-14 mx-auto" />

        {error && <p className="text-sm text-destructive text-center">{error}</p>}

        {needsLogin ? (
          <form onSubmit={signIn} className="space-y-4">
            <div className="text-center">
              <h1 className="text-xl font-black text-foreground">Connexion requise</h1>
              <p className="text-sm text-muted-foreground">
                Connectez-vous pour autoriser cette application.
              </p>
            </div>
            <div>
              <Label htmlFor="email">Adresse e-mail</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" disabled={busy} className="w-full h-12 font-bold">
              Connexion
            </Button>
          </form>
        ) : !details ? (
          <p className="text-muted-foreground text-center">Chargement…</p>
        ) : (
          <>
            <h1 className="text-xl font-black text-foreground text-center">
              Connecter {details.client?.name ?? "une application"} à votre compte
            </h1>
            <p className="text-sm text-muted-foreground text-center">
              {details.client?.name ?? "Ce client"} pourra utiliser Simandou Séjour en votre nom :
              profil, notifications et avis.
            </p>
            <div className="flex gap-2 pt-2">
              <Button disabled={busy} onClick={() => decide(true)} className="flex-1 font-bold">
                Autoriser
              </Button>
              <Button
                disabled={busy}
                variant="outline"
                onClick={() => decide(false)}
                className="flex-1 font-bold"
              >
                Refuser
              </Button>
            </div>
          </>
        )}
      </Card>
    </main>
  );
}
