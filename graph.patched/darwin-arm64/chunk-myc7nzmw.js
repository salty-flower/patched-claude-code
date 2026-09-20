// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Me}from"./chunk-84e9s715.js";import{Qt,Ne,q,M}from"./chunk-ncc6kxz8.js";import{fpt}from"./chunk-p2dc4my5.js";M();var YC=Qt(null),Cqt=Qt(null),Tqt=Qt(null);function dJe(){let e=Ne(Tqt);if(!e)throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");return e}var kqt=Qt(null);function kY(){let e=Ne(kqt);if(!e)throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");return e}function tS(){let e=Ne(Cqt);if(!e)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return e}function t(){let e=Ne(YC);if(!e)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return e}function B(e){let n=t();return Me(n,e)}function Gt(){return t().setState}function DAn(){let e=t();return q(()=>fpt(e.setState),[e])}function dr(){return t()}function Xs(e){return Me(Ne(YC),e)}
export{YC,Cqt,Tqt,dJe,kqt,kY,tS,B,Gt,DAn,dr,Xs};
