// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Re}from"./chunk-5b7mmg84.js";import{qt,Ae,Z,N}from"./chunk-kexg5hxg.js";import{d7t}from"./chunk-tavdbgyw.js";N();var sx=qt(null),l4n=qt(null),c4n=qt(null);function qFt(){let e=Ae(c4n);if(!e)throw ReferenceError("useMcpConnections cannot be called outside of an <AppStateProvider />");return e}var d4n=qt(null);function OG(){let e=Ae(d4n);if(!e)throw ReferenceError("useActivePlugins cannot be called outside of an <AppStateProvider />");return e}function Qw(){let e=Ae(l4n);if(!e)throw ReferenceError("useAppStateSession cannot be called outside of an <AppStateProvider />");return e}function t(){let e=Ae(sx);if(!e)throw ReferenceError("useAppState/useSetAppState cannot be called outside of an <AppStateProvider />");return e}function V(e){let n=t();return Re(n,e)}function Mn(){return t().setState}function XDr(){let e=t();return Z(()=>d7t(e.setState),[e])}function kr(){return t()}function Wo(e){return Re(Ae(sx),e)}
export{sx,l4n,c4n,qFt,d4n,OG,Qw,V,Mn,XDr,kr,Wo};
