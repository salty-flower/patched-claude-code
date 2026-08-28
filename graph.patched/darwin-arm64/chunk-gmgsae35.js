// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{ei,tP}from"./chunk-g4zaymy2.js";import{a}from"./chunk-bn8q5mbz.js";import{Lyn,C7,VDe,Vv}from"./chunk-2694tw3t.js";import{hh,hl,fve}from"./chunk-ghnc2x4f.js";import{Me,Bo}from"./chunk-2d75qem6.js";function tz(){Lyn()}function SO(){let r=VDe();if(r!==void 0)return r;if(Vv())return C7(!0);if(Me()==="gateway"){let e=tP(ei());return C7(e,e?void 0:"unpinned_gateway")}if(Me()!=="firstParty")return C7(!1,"third_party_provider");if(!Bo())return C7(!1,"custom_base_url");let t=a.CLAUDE_CODE_ENTRYPOINT;if(t==="local-agent"||t==="remote_cowork"||t?.startsWith("claude-coworker"))return C7(!1,"sandboxed_entrypoint");if(hl()&&fve()===null)return C7(!0);if(hl()&&(fve()==="enterprise"||fve()==="team"))return C7(!0);try{let{key:e}=hh({skipRetrievingKeyFromApiKeyHelper:!0});if(e)return C7(!0)}catch{}return C7(!1,hl()?"unsupported_subscription":"no_auth")}
export{tz,SO};
