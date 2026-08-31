// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{mi,qC}from"./chunk-38213y7h.js";import{a}from"./chunk-w3k8bej2.js";import{rAn,zY,KNe,UT}from"./chunk-4k4029wq.js";import{qg,Yl,cAe}from"./chunk-bsdtxcdc.js";import{Ne,jo}from"./chunk-znxmbm58.js";function rV(){rAn()}function KD(){let r=KNe();if(r!==void 0)return r;if(UT())return zY(!0);if(Ne()==="gateway"){let e=qC(mi());return zY(e,e?void 0:"unpinned_gateway")}if(Ne()!=="firstParty")return zY(!1,"third_party_provider");if(!jo())return zY(!1,"custom_base_url");let t=a.CLAUDE_CODE_ENTRYPOINT;if(t==="local-agent"||t==="remote_cowork"||t?.startsWith("claude-coworker"))return zY(!1,"sandboxed_entrypoint");if(Yl()&&cAe()===null)return zY(!0);if(Yl()&&(cAe()==="enterprise"||cAe()==="team"))return zY(!0);try{let{key:e}=qg({skipRetrievingKeyFromApiKeyHelper:!0});if(e)return zY(!0)}catch{}return zY(!1,Yl()?"unsupported_subscription":"no_auth")}
export{rV,KD};
