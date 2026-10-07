// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{xe}from"./chunk-j2rf6dbk.js";import{Gt,ke,J,L}from"./chunk-bkksmm2y.js";import{vqt}from"./chunk-2wnf6kz9.js";L();var TT=Gt(null),H1n=Gt(null),M1n=Gt(null);function BIt(){let e=ke(M1n);if(!e)throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");return e}var D1n=Gt(null);function n2(){let e=ke(D1n);if(!e)throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");return e}function lw(){let e=ke(H1n);if(!e)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return e}function t(){let e=ke(TT);if(!e)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return e}function V(e){let n=t();return xe(n,e)}function vn(){return t().setState}function rvr(){let e=t();return J(()=>vqt(e.setState),[e])}function Ir(){return t()}function zo(e){return xe(ke(TT),e)}
export{TT,H1n,M1n,BIt,D1n,n2,lw,V,vn,rvr,Ir,zo};
