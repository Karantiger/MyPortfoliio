// Content model shared by the admin panel (form rendering) and the server
// (validation). Every collection is stored in the `content_items` table as a
// JSON document, so adding a field here is all that is needed.
import { iconNames } from "./icons";

export type FieldType = "text" | "textarea" | "list" | "image" | "select" | "json";

export type Field = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
  help?: string;
};

export type CollectionKey =
  | "projects"
  | "experience"
  | "education"
  | "skills"
  | "achievements";

export type CollectionConfig = {
  key: CollectionKey;
  label: string;
  description: string;
  titleField: string;
  subtitleField?: string;
  publicPath: string;
  fields: Field[];
};

export const collections: Record<CollectionKey, CollectionConfig> = {
  projects: {
    key: "projects",
    label: "Projects",
    description: "Case studies shown on the home page and /projects.",
    titleField: "title",
    subtitleField: "tag",
    publicPath: "/projects",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      {
        name: "slug",
        label: "URL slug",
        type: "text",
        required: true,
        help: "Used in the page address, e.g. habit-tracker",
      },
      { name: "tag", label: "Category tag", type: "text", required: true },
      { name: "desc", label: "Short description", type: "textarea", required: true },
      { name: "image", label: "Cover image", type: "image", required: true },
      { name: "year", label: "Year", type: "text" },
      { name: "role", label: "Role", type: "text" },
      { name: "client", label: "Client", type: "text" },
      { name: "liveUrl", label: "Live URL", type: "text" },
      { name: "sourceUrl", label: "Source code URL", type: "text" },
      { name: "tech", label: "Tech stack", type: "list", help: "One item per line" },
      { name: "overview", label: "Overview", type: "textarea" },
      { name: "features", label: "Key features", type: "list" },
    ],
  },
  experience: {
    key: "experience",
    label: "Experience",
    description: "Internships and work history shown on /experience.",
    titleField: "role",
    subtitleField: "company",
    publicPath: "/experience",
    fields: [
      { name: "role", label: "Role", type: "text", required: true },
      { name: "company", label: "Company", type: "text", required: true },
      { name: "type", label: "Type", type: "text", help: "Internship, Work Experience…" },
      { name: "logo", label: "Company logo", type: "image" },
      { name: "period", label: "Period", type: "text" },
      { name: "location", label: "Location", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "points", label: "Responsibilities", type: "list" },
      { name: "technologies", label: "Technologies", type: "list" },
    ],
  },
  education: {
    key: "education",
    label: "Education",
    description: "Degrees and schooling shown on /education.",
    titleField: "institution",
    subtitleField: "degree",
    publicPath: "/education",
    fields: [
      { name: "institution", label: "Institution", type: "text", required: true },
      { name: "degree", label: "Degree / programme", type: "text", required: true },
      { name: "type", label: "Level", type: "text" },
      { name: "period", label: "Period", type: "text" },
      { name: "status", label: "Status", type: "text" },
      { name: "scoreLabel", label: "Score label", type: "text", help: "CGPA, Percentage…" },
      { name: "score", label: "Score", type: "text" },
      { name: "logo", label: "Logo", type: "image" },
      { name: "detail", label: "Details", type: "textarea" },
      { name: "highlights", label: "Highlights", type: "list" },
    ],
  },
  skills: {
    key: "skills",
    label: "Skills",
    description: "Skill groups shown on /skills.",
    titleField: "title",
    subtitleField: "description",
    publicPath: "/skills",
    fields: [
      { name: "title", label: "Group title", type: "text", required: true },
      { name: "description", label: "Group description", type: "textarea", required: true },
      { name: "icon", label: "Icon", type: "select", options: iconNames },
      {
        name: "skills",
        label: "Skills",
        type: "json",
        help: 'JSON list, e.g. [{"name":"React","description":"…","icon":"Code2"}]',
      },
    ],
  },
  achievements: {
    key: "achievements",
    label: "Achievements",
    description: "Awards, exhibitions and recognitions shown on /achievements.",
    titleField: "title",
    subtitleField: "subtitle",
    publicPath: "/achievements",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "subtitle", label: "Subtitle", type: "text" },
      { name: "id", label: "Reference id", type: "text", help: "Short unique id, e.g. svum-2026" },
      { name: "date", label: "Date", type: "text" },
      { name: "location", label: "Location", type: "text" },
      {
        name: "category",
        label: "Category",
        type: "select",
        options: ["exhibition", "competition", "workshop & webinar", "recognition"],
      },
      { name: "description", label: "Description", type: "textarea" },
      { name: "img", label: "Cover image", type: "image" },
      { name: "images", label: "Gallery images", type: "list" },
      { name: "highlights", label: "Highlights", type: "list" },
      { name: "stats", label: "Stats", type: "json", help: '[{"label":"Countries","value":"10+"}]' },
      { name: "color", label: "Gradient (from/to)", type: "text" },
      { name: "bgGradient", label: "Background gradient", type: "text" },
    ],
  },
};

export const collectionKeys = Object.keys(collections) as CollectionKey[];

export const isCollectionKey = (value: string): value is CollectionKey =>
  collectionKeys.includes(value as CollectionKey);

/** JSON-safe bag of field values (serializable across server-function calls). */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FieldValues = Record<string, any>;

export type ContentRecord = {
  id: number;
  position: number;
  data: FieldValues;
  updatedAt: string;
};

export type SiteSettings = {
  siteTitle: string;
  siteDescription: string;
  ogImage: string;
  googleSiteVerification: string;
  bingSiteVerification: string;
  twitterHandle: string;
  keywords: string;
};

export const settingsFields: Field[] = [
  { name: "siteTitle", label: "Default page title", type: "text" },
  { name: "siteDescription", label: "Default meta description", type: "textarea" },
  { name: "keywords", label: "Focus keywords", type: "text", help: "Comma separated" },
  { name: "ogImage", label: "Social share image", type: "image" },
  {
    name: "googleSiteVerification",
    label: "Google Search Console code",
    type: "text",
    help: "Paste only the content value of the google-site-verification tag",
  },
  { name: "bingSiteVerification", label: "Bing verification code", type: "text" },
  { name: "twitterHandle", label: "X / Twitter handle", type: "text" },
];
