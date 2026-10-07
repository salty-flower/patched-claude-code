// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{xe}from"./chunk-g6he2h7e.js";import{zt,Te,X,L}from"./chunk-1mwacejt.js";import{lKt}from"./chunk-phgxe032.js";L();var EC=zt(null),gUn=zt(null),hUn=zt(null);function RIt(){let e=Te(hUn);if(!e)throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");return e}var yUn=zt(null);function Gj(){let e=Te(yUn);if(!e)throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");return e}function aw(){let e=Te(gUn);if(!e)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return e}function t(){let e=Te(EC);if(!e)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return e}function q(e){let n=t();return xe(n,e)}function En(){return t().setState}function Ovr(){let e=t();return X(()=>lKt(e.setState),[e])}function Ir(){return t()}function zo(e){return xe(Te(EC),e)}
export{EC,gUn,hUn,RIt,yUn,Gj,aw,q,En,Ovr,Ir,zo};
