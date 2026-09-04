// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{Ue}from"./chunk-5jnwdnzr.js";import{yn,qe,K,j}from"./chunk-8wk5q2vw.js";import{tir}from"./chunk-19ykvtp4.js";j();var OO=yn(null),kDt=yn(null);function C_(){let t=qe(kDt);if(!t)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return t}function e(){let t=qe(OO);if(!t)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return t}function W(t){let o=e();return Ue(o,t)}function Lt(){return e().setState}function Cnn(){let t=e();return K(()=>tir(t.setState),[t])}function jn(){return e()}function Ni(t){return Ue(qe(OO),t)}
export{OO,kDt,C_,W,Lt,Cnn,jn,Ni};
