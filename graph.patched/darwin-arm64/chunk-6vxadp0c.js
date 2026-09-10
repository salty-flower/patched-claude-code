// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{Le}from"./chunk-fznezqs9.js";import{Yt,De,V,N}from"./chunk-w8p0f9k6.js";import{TTt}from"./chunk-n68c1hqr.js";N();var iD=Yt(null),VMt=Yt(null),qMt=Yt(null);function N3e(){let e=De(qMt);if(!e)throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");return e}var KMt=Yt(null);function A9(){let e=De(KMt);if(!e)throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");return e}function xy(){let e=De(VMt);if(!e)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return e}function t(){let e=De(iD);if(!e)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return e}function F(e){let n=t();return Le(n,e)}function Dt(){return t().setState}function Xon(){let e=t();return V(()=>TTt(e.setState),[e])}function er(){return t()}function Is(e){return Le(De(iD),e)}
export{iD,VMt,qMt,N3e,KMt,A9,xy,F,Dt,Xon,er,Is};
