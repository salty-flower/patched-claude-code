// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Me}from"./chunk-gwqkacr9.js";import{Jt,De,z,N}from"./chunk-vm1tjjym.js";import{EHt}from"./chunk-j22dybre.js";N();var NP=Jt(null),ILt=Jt(null),RLt=Jt(null);function Ist(){let e=De(RLt);if(!e)throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");return e}var xLt=Jt(null);function u6(){let e=De(xLt);if(!e)throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");return e}function ey(){let e=De(ILt);if(!e)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return e}function t(){let e=De(NP);if(!e)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return e}function B(e){let n=t();return Me(n,e)}function $t(){return t().setState}function NQt(){let e=t();return z(()=>EHt(e.setState),[e])}function zn(){return t()}function bs(e){return Me(De(NP),e)}
export{NP,ILt,RLt,Ist,xLt,u6,ey,B,$t,NQt,zn,bs};
