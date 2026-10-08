// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{xe}from"./chunk-4qdfvhyj.js";import{qt,Te,X,N}from"./chunk-y6zm4y48.js";import{u3t}from"./chunk-qf3g3s52.js";N();var eR=qt(null),Xzn=qt(null),Jzn=qt(null);function pDt(){let e=Te(Jzn);if(!e)throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");return e}var Qzn=qt(null);function tz(){let e=Te(Qzn);if(!e)throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");return e}function ww(){let e=Te(Xzn);if(!e)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return e}function t(){let e=Te(eR);if(!e)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return e}function V(e){let n=t();return xe(n,e)}function Rn(){return t().setState}function Mxr(){let e=t();return X(()=>u3t(e.setState),[e])}function Sr(){return t()}function Oo(e){return xe(Te(eR),e)}
export{eR,Xzn,Jzn,pDt,Qzn,tz,ww,V,Rn,Mxr,Sr,Oo};
