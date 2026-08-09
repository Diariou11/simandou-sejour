import { auth, defineMcp } from "@lovable.dev/mcp-js";
import searchAccommodationsTool from "./tools/search-accommodations";
import getAccommodationTool from "./tools/get-accommodation";
import getMyProfileTool from "./tools/get-my-profile";
import listMyNotificationsTool from "./tools/list-my-notifications";
import listMyReviewsTool from "./tools/list-my-reviews";
import createReviewTool from "./tools/create-review";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "simandou-sejour",
  title: "simandou-sejour",
  version: "0.1.0",
  instructions:
    "Outils de Simandou Séjour, la plateforme de réservation d'hébergements en Guinée. " +
    "Utilisez search_accommodations et get_accommodation pour explorer le catalogue public, " +
    "et get_my_profile, list_my_notifications, list_my_reviews et create_review pour les données " +
    "de l'utilisateur connecté.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [
    searchAccommodationsTool,
    getAccommodationTool,
    getMyProfileTool,
    listMyNotificationsTool,
    listMyReviewsTool,
    createReviewTool,
  ],
});
