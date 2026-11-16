// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Fe}from"./chunk-x7t1jrfd.js";import{rn,Ee,J,j}from"./chunk-07a1744w.js";import{lXn}from"./chunk-r53aj6a2.js";j();var _N=rn(null),Xto=rn(null),Jto=rn(null);function BRn(){let e=Ee(Jto);if(!e)throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");return e}var Qto=rn(null);function eJ(){let e=Ee(Qto);if(!e)throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");return e}function YE(){let e=Ee(Xto);if(!e)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return e}function t(){let e=Ee(_N);if(!e)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return e}function q(e){let n=t();return Fe(n,e)}function vr(){return t().setState}function WQo(){let e=t();return J(()=>lXn(e.setState),[e])}function fo(){return t()}function ys(e){return Fe(Ee(_N),e)}
export{_N,Xto,Jto,BRn,Qto,eJ,YE,q,vr,WQo,fo,ys};
