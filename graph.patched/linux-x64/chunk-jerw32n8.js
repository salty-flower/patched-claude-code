// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{mi,Uv}from"./chunk-30zk17wm.js";import{a}from"./chunk-m9gbfvns.js";import{tAn,GJ,VOe,Bw}from"./chunk-kc505vjh.js";import{Gg,Xl,sAe}from"./chunk-1e5y3pjf.js";import{Oe,jo}from"./chunk-4n7ktjmt.js";function e5(){tAn()}function W0(){let r=VOe();if(r!==void 0)return r;if(Bw())return GJ(!0);if(Oe()==="gateway"){let e=Uv(mi());return GJ(e,e?void 0:"unpinned_gateway")}if(Oe()!=="firstParty")return GJ(!1,"third_party_provider");if(!jo())return GJ(!1,"custom_base_url");let t=a.CLAUDE_CODE_ENTRYPOINT;if(t==="local-agent"||t==="remote_cowork"||t?.startsWith("claude-coworker"))return GJ(!1,"sandboxed_entrypoint");if(Xl()&&sAe()===null)return GJ(!0);if(Xl()&&(sAe()==="enterprise"||sAe()==="team"))return GJ(!0);try{let{key:e}=Gg({skipRetrievingKeyFromApiKeyHelper:!0});if(e)return GJ(!0)}catch{}return GJ(!1,Xl()?"unsupported_subscription":"no_auth")}
export{e5,W0};
