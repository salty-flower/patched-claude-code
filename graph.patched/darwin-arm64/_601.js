// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{Fpc as o,Jpc as t,Lqc as P,loc as p}from"./_668.js";import{ZBc as i,hCc as m,mCc as S}from"./_695.js";import{_Lc as f,cMc as e,dMc as c,eMc as l,nMc as A}from"./_708.js";import{bad as d}from"./_797.js";import{xad as s}from"./_798.js";import{And as a,Cnd as u,krd as h}from"./_812.js";import{Exd as g}from"./_839.js";function O(){f()}function K(){let n=c();if(n!==void 0)return n;if(l())return e(!0);if(i()==="gateway")return e(u(a()));if(i()!=="firstParty")return e(!1);if(!m())return e(!1);let r=s.CLAUDE_CODE_ENTRYPOINT;if(r==="local-agent"||r==="remote_cowork"||r?.startsWith("claude-coworker"))return e(!1);if(o()&&t()===null)return e(!0);if(o()&&(t()==="enterprise"||t()==="team"))return e(!0);try{let{key:y}=p({skipRetrievingKeyFromApiKeyHelper:!0});if(y)return e(!0)}catch{}return e(!1)}var b=g(()=>{h();P();d();S();A()});
export{O as CVb,K as DVb,b as EVb};
