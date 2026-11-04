// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{He}from"./chunk-dd7rzbfz.js";import{Qt,Ee,Q,j}from"./chunk-rt5zqm44.js";import{wNn}from"./chunk-t01yefrc.js";j();var iD=Qt(null),n1r=Qt(null),r1r=Qt(null);function opn(){let e=Ee(r1r);if(!e)throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");return e}var o1r=Qt(null);function T9(){let e=Ee(o1r);if(!e)throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");return e}function xw(){let e=Ee(n1r);if(!e)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return e}function t(){let e=Ee(iD);if(!e)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return e}function z(e){let n=t();return He(n,e)}function ir(){return t().setState}function _0o(){let e=t();return Q(()=>wNn(e.setState),[e])}function Ur(){return t()}function Ts(e){return He(Ee(iD),e)}
export{iD,n1r,r1r,opn,o1r,T9,xw,z,ir,_0o,Ur,Ts};
