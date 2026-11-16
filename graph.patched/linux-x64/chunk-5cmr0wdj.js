// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{p}from"./chunk-q8mq1ny3.js";import{o,E,I,u}from"./chunk-xrhk683g.js";var c=p(()=>u({file_uuid:o(),file_name:o(),is_image:I().nullish(),sha256:o().nullish().catch(null),file_size:E().nullish().catch(void 0),from_connector:I().nullish().catch(!0),project_folder_name:o().nullish().catch(void 0),from_connector_marker:o().nullish().catch(void 0)})),s=p(()=>u({from_connector:I().nullish().catch(!0)})),i=256;function Gx(n){if(typeof n!=="object"||n===null||!("file_attachments"in n))return[];let e=n.file_attachments;if(!Array.isArray(e))return[];let r=c();return e.slice(0,i).flatMap((a)=>{let t=r.safeParse(a);return t.success?[t.data]:[]})}function h1e(n){return Gx(n).some((e)=>e.from_connector===!0)||s().safeParse(n).data?.from_connector===!0}var l=p(()=>u({shouldQuery:I().optional()}));function _Fr(n){return l().safeParse(n).data?.shouldQuery}
export{Gx,h1e,_Fr};
