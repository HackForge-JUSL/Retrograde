import React from "react";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type Props = {
  children: React.ReactNode;
};

function Auth0Povider({ children }: Props) {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_REDI;

  if (!domain || !clientId || !redirectUri) {
    throw new Error("Auth0 domain, client id, and redirect uri are required");
  }

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log(user);
    console.log(appState);
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirectUri: redirectUri }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}

export default Auth0Povider;
