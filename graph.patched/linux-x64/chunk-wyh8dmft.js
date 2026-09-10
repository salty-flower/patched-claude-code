// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Oe}from"./chunk-nzfgyqn1.js";import{Vt,De,G,L}from"./chunk-kt4npzgg.js";import{VCt}from"./chunk-cxhjnr5a.js";L();var pO=Vt(null),xNt=Vt(null),INt=Vt(null);function JKe(){let e=De(INt);if(!e)throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");return e}var PNt=Vt(null);function D6(){let e=De(PNt);if(!e)throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");return e}function Oy(){let e=De(xNt);if(!e)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return e}function t(){let e=De(pO);if(!e)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return e}function U(e){let n=t();return Oe(n,e)}function Lt(){return t().setState}function Din(){let e=t();return G(()=>VCt(e.setState),[e])}function tr(){return t()}function Os(e){return Oe(De(pO),e)}
export{pO,xNt,INt,JKe,PNt,D6,Oy,U,Lt,Din,tr,Os};
