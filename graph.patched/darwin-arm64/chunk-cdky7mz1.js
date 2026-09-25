// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{xe}from"./chunk-mremgt1k.js";import{Vt,Ie,J,L}from"./chunk-1cnhgfv0.js";import{IPt}from"./chunk-pqg61fxq.js";L();var mx=Vt(null),Ygn=Vt(null),Xgn=Vt(null);function ymt(){let e=Ie(Xgn);if(!e)throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");return e}var Jgn=Vt(null);function WF(){let e=Ie(Jgn);if(!e)throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");return e}function gw(){let e=Ie(Ygn);if(!e)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return e}function t(){let e=Ie(mx);if(!e)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return e}function U(e){let n=t();return xe(n,e)}function ln(){return t().setState}function L9n(){let e=t();return J(()=>IPt(e.setState),[e])}function vr(){return t()}function hs(e){return xe(Ie(mx),e)}
export{mx,Ygn,Xgn,ymt,Jgn,WF,gw,U,ln,L9n,vr,hs};
