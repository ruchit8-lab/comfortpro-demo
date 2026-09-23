import { env } from "cloudflare:workers";
export function getLeadDb(){if(!env.DB)throw new Error("Lead storage unavailable");return env.DB;}
