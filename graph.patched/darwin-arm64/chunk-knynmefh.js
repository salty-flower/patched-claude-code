// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{f}from"./chunk-tkh9f09d.js";import{o,E,I,u}from"./chunk-97je7cvf.js";var c=f(()=>u({file_uuid:o(),file_name:o(),is_image:I().nullish(),sha256:o().nullish().catch(null),file_size:E().nullish().catch(void 0),project_folder_name:o().nullish().catch(void 0)})),s=256;function uI(e){if(typeof e!=="object"||e===null||!("file_attachments"in e))return[];let n=e.file_attachments;if(!Array.isArray(n))return[];let a=c();return n.slice(0,s).flatMap((r)=>{let t=a.safeParse(r);return t.success?[t.data]:[]})}var i=f(()=>u({shouldQuery:I().optional()}));function XIn(e){return i().safeParse(e).data?.shouldQuery}
export{uI,XIn};
