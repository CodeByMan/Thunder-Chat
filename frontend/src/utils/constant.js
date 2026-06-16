// Browser-facing host for files/images. Empty means use the current Next.js origin.
// Next rewrites /uploads/* to the existing backend, so backend code stays unchanged.
export const Host = "";

// Socket.io must connect to the existing Express/Socket.io backend directly.
// In the original Vite frontend this was import.meta.env.VITE_SERVER_URL.
// In Next.js, browser-exposed env variables must use NEXT_PUBLIC_*.
export const SocketHost =
  process.env.NEXT_PUBLIC_SOCKET_URL ||
  process.env.NEXT_PUBLIC_SERVER_URL ||
  "http://localhost:3000";

export const AUTH_ROUTES = "/api/auth";
export const SIGNUP_ROUTE = `${AUTH_ROUTES}/signup`;
export const LOGIN_ROUTE = `${AUTH_ROUTES}/login`;
export const GET_USER_INFO = `${AUTH_ROUTES}/user-info`;
export const UPDATE_PROFILE_ROUTE = `${AUTH_ROUTES}/update-profile`;
export const ADD_PROFILE_IMAGE = `${AUTH_ROUTES}/add-profile-image`;
export const REMOVE_PROFILE_IMAGE = `${AUTH_ROUTES}/remove-profile-image`;
export const LOGOUT_ROUTE = `${AUTH_ROUTES}/logout`;

export const CONTACTS_ROUTES = "/api/contacts";
export const SEARCH_CONTACT_ROUTES = `${CONTACTS_ROUTES}/search`;
export const GET_CONTACTS_FOR_DM = `${CONTACTS_ROUTES}/get-contacts-for-dm`;
export const GET_ALL_CONTACTS_ROUTES = `${CONTACTS_ROUTES}/get-all-contacts`;

export const MESSAGES_ROUTES = "/api/messages";
export const GET_ALL_MESSAGES_ROUTE = `${MESSAGES_ROUTES}/get-messages`;
export const UPLOAD_FILE_ROUTE = `${MESSAGES_ROUTES}/upload-file`;

export const CHANNEL_ROUTES = "/api/channel";
export const CREATE_CHANNEL_ROUTE = `${CHANNEL_ROUTES}/create-channel`;
export const GET_USER_CHANNELS_ROUTE = `${CHANNEL_ROUTES}/get-user-channels`;
export const GET_CHANNEL_MESSAGES_ROUTE = `${CHANNEL_ROUTES}/get-channel-messages`;
