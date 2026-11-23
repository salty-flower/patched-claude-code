// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
function Xn(e){return e?.type==="system"&&e.subtype==="compact_boundary"}function Ojt(e){return Xn(e)&&e.compactMetadata?.durationMs===0&&e.compactMetadata.preservedMessages?.anchorUuid===e.uuid}function gHr(e){if(e.type==="user")return e.replacesSpan===!0;return!1}function Ehe(e){for(let t=e.length-1;t>=0;t--){let s=e[t];if(s&&Xn(s))return t}return-1}var _Hr="Loaded from the session's last compaction, so the messages it summarized aren't here.";function yHr(e){let t=Ehe(e),s=e[t];if(!s||!Xn(s))return!1;let r=s.compactMetadata?.preservedMessages?.uuids,a=new Set(Array.isArray(r)?r:[]);return e.slice(0,t).every((o)=>a.has(o.uuid))}function Oo(e,t){let s=Ehe(e);return s===-1?e:e.slice(s)}
export{Xn,Ojt,gHr,Ehe,_Hr,yHr,Oo};
