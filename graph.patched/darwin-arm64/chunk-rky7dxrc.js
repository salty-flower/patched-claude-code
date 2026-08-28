// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{_r,TE,pg,gb,Mp,Na,Ot}from"./chunk-ghnc2x4f.js";import{ln}from"./chunk-2d75qem6.js";function att(e){if(e==null)return null;if(Mp(e)||(gb(e)??_r(e)))return e;return pg(e)}function RX(e,n){let o=att(e);if(o===null)return null;if(n!==null&&o.trim().toLowerCase()===n.trim().toLowerCase())return null;let l=att(n);if(r(o)||r(l))return o;let i=l===null?Na():Ot(l);return Ot(o).toLowerCase()===i.toLowerCase()?null:o}function C$(e){return RX(e.mainLoopModelForSession,e.mainLoopModel)??e.mainLoopModel}function r(e){return e!==null&&TE(ln(e.trim().toLowerCase()))}
export{att,RX,C$};
