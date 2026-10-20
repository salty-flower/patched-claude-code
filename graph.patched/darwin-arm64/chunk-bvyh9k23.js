// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{xe}from"./chunk-f5f6g6yj.js";import{Vt,ke,ee,B}from"./chunk-2txtxkxk.js";import{jln}from"./chunk-jfr81xvv.js";B();var WP=Vt(null),Eir=Vt(null),vir=Vt(null);function pKt(){let e=ke(vir);if(!e)throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");return e}var kir=Vt(null);function cV(){let e=ke(kir);if(!e)throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");return e}function Hv(){let e=ke(Eir);if(!e)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return e}function t(){let e=ke(WP);if(!e)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return e}function V(e){let n=t();return xe(n,e)}function Un(){return t().setState}function m9r(){let e=t();return ee(()=>jln(e.setState),[e])}function Er(){return t()}function Bo(e){return xe(ke(WP),e)}
export{WP,Eir,vir,pKt,kir,cV,Hv,V,Un,m9r,Er,Bo};
