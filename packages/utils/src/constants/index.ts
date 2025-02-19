export * from "./cctlds";
export * from "./countries";
export * from "./pricing";

export const LOCALHOST_GEO_DATA = {
  city: "San Francisco",
  region: "CA",
  country: "US",
  latitude: "37.7695",
  longitude: "-122.385",
};
export const LOCALHOST_IP = "63.141.57.109";

export const FRAMER_MOTION_LIST_ITEM_VARIANTS = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: "spring" } },
};

export const STAGGER_CHILD_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, type: "spring" } },
};

export const SWIPE_REVEAL_ANIMATION_SETTINGS = {
  initial: { height: 0 },
  animate: { height: "auto" },
  exit: { height: 0 },
  transition: { duration: 0.15, ease: "easeOut" },
};

export const FADE_IN_ANIMATION_SETTINGS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

export const PAGINATION_LIMIT = 100;

export const SHORT_DOMAIN =
  process.env.NEXT_PUBLIC_APP_SHORT_DOMAIN || "dub.sh";

export const HOME_DOMAIN = `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}`;

export const APP_HOSTNAMES = new Set([
  `app.${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
  `preview.${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
  "app.mcxleague.com",
  "localhost",
]);

export const APP_DOMAIN =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? `https://app.${process.env.NEXT_PUBLIC_APP_DOMAIN}`
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
    ? `https://preview.${process.env.NEXT_PUBLIC_APP_DOMAIN}`
    : "http://app.mcxleague.com";

export const APP_DOMAIN_WITH_NGROK =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? `https://app.${process.env.NEXT_PUBLIC_APP_DOMAIN}`
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
    ? `https://preview.${process.env.NEXT_PUBLIC_APP_DOMAIN}`
    : process.env.NGROK_URL || "http://app.mcxleague.com";

export const API_HOSTNAMES = new Set([
  `api.${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
  `api.${SHORT_DOMAIN}`,
  "api.app.mcxleague.com",
]);

export const API_DOMAIN =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? `https://api.${process.env.NEXT_PUBLIC_APP_DOMAIN}`
    : process.env.NEXT_PUBLIC_VERCEL_ENV === "preview"
    ? `https://api.${process.env.NEXT_PUBLIC_APP_DOMAIN}`
    : "http://api.app.mcxleague.com";

export const ADMIN_HOSTNAMES = new Set([
  `admin.${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
  "admin.app.mcxleague.com",
]);

export const DEFAULT_REDIRECTS = {
  home: "https://mcxleague.com",
  dub: "https://mcxleague.com",
  signin: "https://app.mcxleague.com/login",
  login: "https://app.mcxleague.com/login",
  register: "https://app.mcxleague.com/register",
  signup: "https://app.mcxleague.com/register",
  app: "https://app.mcxleague.com",
  dashboard: "https://app.mcxleague.com",
  links: "https://app.mcxleague.com/links",
  settings: "https://app.mcxleague.com/settings",
  welcome: "https://app.mcxleague.com/welcome",
  discord: "https://twitter.com/dubdotco", // placeholder for now
};

export const DUB_HEADERS = {
  headers: {
    "x-powered-by": "mcxleague.com - Link management for modern marketing teams",
  },
};

export const GOOGLE_FAVICON_URL =
  "https://www.google.com/s2/favicons?sz=64&domain_url=";

export const DUB_LOGO = "https://d2vwwcvoksz7ty.cloudfront.net/logo.png";
export const DUB_THUMBNAIL =
  "https://d2vwwcvoksz7ty.cloudfront.net/thumbnail.png";

export const HIDE_BACKGROUND_SEGMENTS = [
  "stats",
  "changelog",
  "terms",
  "privacy",
  "abuse",
];

export const DUB_DOMAINS = [
  {
    slug: SHORT_DOMAIN,
    verified: true,
    primary: true,
    archived: false,
    target: `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}`,
    type: "redirect",
    placeholder: "https://mcxleague.com/help/article/what-is-dub",
    clicks: 0,
    allowedHostnames: [],
  },
  ...(process.env.NEXT_PUBLIC_IS_DUB
    ? [
        {
          slug: "chatg.pt",
          verified: true,
          primary: false,
          archived: false,
          target: "https://mcxleague.com/tools/chatgpt-link-shortener",
          type: "redirect",
          placeholder: "https://chat.openai.com/g/g-UGjKKONEe-domainsgpt",
          clicks: 0,
          allowedHostnames: ["chat.openai.com"],
        },
        {
          slug: "amzn.id",
          verified: true,
          primary: false,
          archived: false,
          target: "https://mcxleague.com/tools/amazon-link-shortener",
          type: "redirect",
          placeholder: "https://www.amazon.com/dp/B0BW4SWNC8",
          clicks: 0,
          allowedHostnames: ["amazon.com", "amazon.co.uk", "amazon.ca"],
        },
        {
          slug: "spti.fi",
          verified: true,
          primary: false,
          archived: false,
          target: "https://mcxleague.com/tools/spotify-link-shortener",
          type: "redirect",
          placeholder: "https://open.spotify.com/album/1SCyi9a5pOasikidToUY5y",
          clicks: 0,
          allowedHostnames: ["open.spotify.com"],
        },
      ]
    : []),
];

export const ALL_TOOLS = [
  { name: "ChatGPT Link Shortener", slug: "chatgpt-link-shortener" },
  { name: "Amazon Link Shortener", slug: "amazon-link-shortener" },
  { name: "Spotify Link Shortener", slug: "spotify-link-shortener" },
  { name: "Metatags API", slug: "metatags" },
  { name: "QR Code Generator", slug: "qr-code" },
  { name: "Link Inspector", slug: "inspector" },
];

export const SECOND_LEVEL_DOMAINS = new Set([
  "com",
  "co",
  "net",
  "org",
  "edu",
  "gov",
  "in",
]);

export const SPECIAL_APEX_DOMAINS = new Set([
  "my.id",
  "github.io",
  "vercel.app",
  "now.sh",
  "pages.dev",
  "webflow.io",
  "netlify.app",
  "fly.dev",
  "web.app",
]);

export const DEFAULT_LINK_PROPS = {
  key: "",
  url: "",
  domain: "",
  archived: false,
  expiresAt: null,
  password: null,

  title: null,
  description: null,
  image: null,
  rewrite: false,
  ios: null,
  android: null,

  clicks: 0,
  userId: "",

  proxy: false,
};

export const DUB_PROJECT_ID = "cl7pj5kq4006835rbjlt2ofka";
export const LEGAL_PROJECT_ID = "clrflia0j0000vs7sqfhz9c7q";
export const LEGAL_USER_ID = "clqei1lgc0000vsnzi01pbf47";

export const SAML_PROVIDERS = [
  {
    name: "Okta",
    logo: "/_static/icons/okta.svg",
    saml: "okta",
    samlModalCopy: "Metadata URL",
    scim: "okta-scim-v2",
    scimModalCopy: {
      url: "SCIM 2.0 Base URL",
      token: "OAuth Bearer Token",
    },
    wip: false,
  },
  {
    name: "Azure AD",
    logo: "/_static/icons/azure.svg",
    saml: "azure",
    samlModalCopy: "App Federation Metadata URL",
    scim: "azure-scim-v2",
    scimModalCopy: {
      url: "Tenant URL",
      token: "Secret Token",
    },
    wip: false,
  },
  {
    name: "Google",
    logo: "/_static/icons/google.svg",
    saml: "google",
    samlModalCopy: "XML Metadata File",
    scim: "google",
    scimModalCopy: {
      url: "SCIM 2.0 Base URL",
      token: "OAuth Bearer Token",
    },
    wip: false,
  },
];
