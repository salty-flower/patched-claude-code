// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Le}from"./chunk-0mwqj1na.js";import{Jt,Ne,V,L}from"./chunk-cf8g1269.js";import{ept}from"./chunk-fr2yty3r.js";L();var VA=Jt(null),L4t=Jt(null),N4t=Jt(null);function jJe(){let e=Ne(N4t);if(!e)throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");return e}var $4t=Jt(null);function bY(){let e=Ne($4t);if(!e)throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");return e}function Z_(){let e=Ne(L4t);if(!e)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return e}function t(){let e=Ne(VA);if(!e)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return e}function B(e){let n=t();return Le(n,e)}function Gt(){return t().setState}function FEn(){let e=t();return V(()=>ept(e.setState),[e])}function dr(){return t()}function Xs(e){return Le(Ne(VA),e)}
export{VA,L4t,N4t,jJe,$4t,bY,Z_,B,Gt,FEn,dr,Xs};
