// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{ei,JI}from"./chunk-2vv5hpw3.js";import{a}from"./chunk-g0kfvhx3.js";import{Dyn,wY,qPe,VS}from"./chunk-a891q37t.js";import{hh,gl,dSe}from"./chunk-ns0ekkj0.js";import{Oe,Bo}from"./chunk-ryvgd9z0.js";function Q3(){Dyn()}function yL(){let r=qPe();if(r!==void 0)return r;if(VS())return wY(!0);if(Oe()==="gateway"){let e=JI(ei());return wY(e,e?void 0:"unpinned_gateway")}if(Oe()!=="firstParty")return wY(!1,"third_party_provider");if(!Bo())return wY(!1,"custom_base_url");let t=a.CLAUDE_CODE_ENTRYPOINT;if(t==="local-agent"||t==="remote_cowork"||t?.startsWith("claude-coworker"))return wY(!1,"sandboxed_entrypoint");if(gl()&&dSe()===null)return wY(!0);if(gl()&&(dSe()==="enterprise"||dSe()==="team"))return wY(!0);try{let{key:e}=hh({skipRetrievingKeyFromApiKeyHelper:!0});if(e)return wY(!0)}catch{}return wY(!1,gl()?"unsupported_subscription":"no_auth")}
export{Q3,yL};
