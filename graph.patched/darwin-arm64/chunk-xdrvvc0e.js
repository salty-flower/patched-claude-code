// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{xe}from"./chunk-8ckpj7n4.js";import{Vt,Ce,J,N}from"./chunk-f6geyac8.js";import{A5t}from"./chunk-1jfekfrk.js";N();var oR=Vt(null),fGn=Vt(null),mGn=Vt(null);function AMt(){let e=Ce(mGn);if(!e)throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");return e}var gGn=Vt(null);function pW(){let e=Ce(gGn);if(!e)throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");return e}function Ew(){let e=Ce(fGn);if(!e)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return e}function t(){let e=Ce(oR);if(!e)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return e}function q(e){let n=t();return xe(n,e)}function Rn(){return t().setState}function sPr(){let e=t();return J(()=>A5t(e.setState),[e])}function br(){return t()}function Oo(e){return xe(Ce(oR),e)}
export{oR,fGn,mGn,AMt,gGn,pW,Ew,q,Rn,sPr,br,Oo};
