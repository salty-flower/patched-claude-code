// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-7ap5zh1s.js";import{o,k,O,u}from"./chunk-m507bxk0.js";var c=p(()=>u({file_uuid:o(),file_name:o(),is_image:O().nullish(),sha256:o().nullish().catch(null),file_size:k().nullish().catch(void 0),from_connector:O().nullish().catch(!0),project_folder_name:o().nullish().catch(void 0),from_connector_marker:o().nullish().catch(void 0)})),s=p(()=>u({from_connector:O().nullish().catch(!0)})),i=256;function Vx(n){if(typeof n!=="object"||n===null||!("file_attachments"in n))return[];let e=n.file_attachments;if(!Array.isArray(e))return[];let r=c();return e.slice(0,i).flatMap((a)=>{let t=r.safeParse(a);return t.success?[t.data]:[]})}function SUe(n){return Vx(n).some((e)=>e.from_connector===!0)||s().safeParse(n).data?.from_connector===!0}var l=p(()=>u({shouldQuery:O().optional()}));function KFr(n){return l().safeParse(n).data?.shouldQuery}
export{Vx,SUe,KFr};
