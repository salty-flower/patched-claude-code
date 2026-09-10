// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{y}from"./chunk-hshe4789.js";import{e}from"./chunk-zhg3ync1.js";import{Yt,De,kt,N}from"./chunk-w8p0f9k6.js";N();var i=Yt(null);function mMt(l){let T=y(3),{session:c,children:S}=l,u;if(T[0]!==S||T[1]!==c)u=e(i.Provider,{value:c,children:S}),T[0]=S,T[1]=c,T[2]=u;else u=T[2];return u}function Je(t){let R=y(3),o=De(i);if(!o){throw ReferenceError("useSession cannot be called outside of a <SessionProvider />")}let f;if(R[0]!==t||R[1]!==o)f=()=>t?t(o):o,R[0]=t,R[1]=o,R[2]=f;else f=R[2];let p=f;return kt(o.subscribe,p,p)}
export{mMt,Je};
