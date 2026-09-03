// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Ue}from"./chunk-kwc9zqpb.js";import{hn,Ge,z,j}from"./chunk-xyxaqzpf.js";import{anr}from"./chunk-he4p48dc.js";j();var SO=hn(null),HPt=hn(null);function y_(){let t=Ge(HPt);if(!t)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return t}function e(){let t=Ge(SO);if(!t)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return t}function W(t){let o=e();return Ue(o,t)}function Lt(){return e().setState}function nen(){let t=e();return z(()=>anr(t.setState),[t])}function Bn(){return e()}function Di(t){return Ue(Ge(SO),t)}
export{SO,HPt,y_,W,Lt,nen,Bn,Di};
