// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
function Jn(e){return e?.type==="system"&&e.subtype==="compact_boundary"}function B2t(e){return Jn(e)&&e.compactMetadata?.durationMs===0&&e.compactMetadata.preservedMessages?.anchorUuid===e.uuid}function qHr(e){if(e.type==="user")return e.replacesSpan===!0;return!1}function Ihe(e){for(let t=e.length-1;t>=0;t--){let s=e[t];if(s&&Jn(s))return t}return-1}var KHr="Loaded from the session's last compaction, so the messages it summarized aren't here.";function YHr(e){let t=Ihe(e),s=e[t];if(!s||!Jn(s))return!1;let r=s.compactMetadata?.preservedMessages?.uuids,a=new Set(Array.isArray(r)?r:[]);return e.slice(0,t).every((o)=>a.has(o.uuid))}function Io(e,t){let s=Ihe(e);return s===-1?e:e.slice(s)}
export{Jn,B2t,qHr,Ihe,KHr,YHr,Io};
