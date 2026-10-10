// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{p}from"./chunk-fdwn5gdv.js";import{o,v,H,u}from"./chunk-9cmjz7j9.js";var c=p(()=>u({file_uuid:o(),file_name:o(),is_image:H().nullish(),sha256:o().nullish().catch(null),file_size:v().nullish().catch(void 0)})),s=256;function Lte(t){if(typeof t!=="object"||t===null||!("file_attachments"in t))return[];let e=t.file_attachments;if(!Array.isArray(e))return[];let a=c();return e.slice(0,s).flatMap((r)=>{let n=a.safeParse(r);return n.success?[n.data]:[]})}var i=p(()=>u({shouldQuery:H().optional()}));function J9o(t){return i().safeParse(t).data?.shouldQuery}
export{Lte,J9o};
