// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Me}from"./chunk-457hzbfx.js";import{Jt,De,q,N}from"./chunk-jegfnmzv.js";import{Uwt}from"./chunk-rpg2kszv.js";N();var VP=Jt(null),qIt=Jt(null),zIt=Jt(null);function jst(){let e=De(zIt);if(!e)throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");return e}var VIt=Jt(null);function y8(){let e=De(VIt);if(!e)throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");return e}function r_(){let e=De(qIt);if(!e)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return e}function t(){let e=De(VP);if(!e)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return e}function U(e){let n=t();return Me(n,e)}function Mt(){return t().setState}function iZt(){let e=t();return q(()=>Uwt(e.setState),[e])}function zn(){return t()}function Ss(e){return Me(De(VP),e)}
export{VP,qIt,zIt,jst,VIt,y8,r_,U,Mt,iZt,zn,Ss};
