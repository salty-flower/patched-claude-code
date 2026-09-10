// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{De}from"./chunk-mzm37426.js";import{qt,Le,G,M}from"./chunk-xgsrj7pc.js";import{uRt}from"./chunk-afacp8ga.js";M();var AD=qt(null),GFt=qt(null),VFt=qt(null);function l4e(){let e=Le(VFt);if(!e)throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");return e}var qFt=qt(null);function z9(){let e=Le(qFt);if(!e)throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");return e}function Ny(){let e=Le(GFt);if(!e)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return e}function t(){let e=Le(AD);if(!e)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return e}function U(e){let n=t();return De(n,e)}function Mt(){return t().setState}function oan(){let e=t();return G(()=>uRt(e.setState),[e])}function tr(){return t()}function Ds(e){return De(Le(AD),e)}
export{AD,GFt,VFt,l4e,qFt,z9,Ny,U,Mt,oan,tr,Ds};
