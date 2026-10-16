// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Re}from"./chunk-chtpnd4k.js";import{zt,ve,Z,F}from"./chunk-57p87fb1.js";import{won}from"./chunk-hmnv0ey7.js";F();var bP=zt(null),Etr=zt(null),vtr=zt(null);function ozt(){let e=ve(vtr);if(!e)throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");return e}var ktr=zt(null);function E6(){let e=ve(ktr);if(!e)throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");return e}function mv(){let e=ve(Etr);if(!e)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return e}function t(){let e=ve(bP);if(!e)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return e}function V(e){let n=t();return Re(n,e)}function Fn(){return t().setState}function DVr(){let e=t();return Z(()=>won(e.setState),[e])}function Cr(){return t()}function Wo(e){return Re(ve(bP),e)}
export{bP,Etr,vtr,ozt,ktr,E6,mv,V,Fn,DVr,Cr,Wo};
