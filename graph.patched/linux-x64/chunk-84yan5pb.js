// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{br,wA,pg,g_,Op,$a,Lt}from"./chunk-ns0ekkj0.js";import{ln}from"./chunk-ryvgd9z0.js";function itt(e){if(e==null)return null;if(Op(e)||(g_(e)??br(e)))return e;return pg(e)}function AX(e,n){let o=itt(e);if(o===null)return null;if(n!==null&&o.trim().toLowerCase()===n.trim().toLowerCase())return null;let l=itt(n);if(r(o)||r(l))return o;let i=l===null?$a():Lt(l);return Lt(o).toLowerCase()===i.toLowerCase()?null:o}function wF(e){return AX(e.mainLoopModelForSession,e.mainLoopModel)??e.mainLoopModel}function r(e){return e!==null&&wA(ln(e.trim().toLowerCase()))}
export{itt,AX,wF};
