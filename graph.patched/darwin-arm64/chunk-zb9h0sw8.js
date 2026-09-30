// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{xe}from"./chunk-3vg5f0j4.js";import{Ut,Re,Y,M}from"./chunk-757fgf90.js";import{DNt}from"./chunk-8e9fn683.js";M();var PP=Ut(null),LAn=Ut(null),NAn=Ut(null);function wbt(){let e=Re(NAn);if(!e)throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");return e}var FAn=Ut(null);function B1(){let e=Re(FAn);if(!e)throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");return e}function _E(){let e=Re(LAn);if(!e)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return e}function t(){let e=Re(PP);if(!e)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return e}function B(e){let n=t();return xe(n,e)}function pn(){return t().setState}function Eor(){let e=t();return Y(()=>DNt(e.setState),[e])}function Er(){return t()}function us(e){return xe(Re(PP),e)}
export{PP,LAn,NAn,wbt,FAn,B1,_E,B,pn,Eor,Er,us};
