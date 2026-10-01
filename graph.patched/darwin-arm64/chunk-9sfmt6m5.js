// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{gb}from"./chunk-2j7zyd8v.js";function VRr(n){let o=n.indexOf("."),t=(o===-1?n:n.slice(0,o)).replace(/ +$/,"");return/^con(in|out)\$$/i.test(t)}function tsn(n){return n.split("/").some((o)=>o.includes(":")||o.endsWith(".")||o.endsWith(" ")||gb(o)||VRr(o))}var e=/^[^.]{1,6}~\d+(\.[^.]{1,3})?$/;function i(n){let o=n.indexOf(":");return(o<0?n:n.slice(0,o)).replace(/[. ]+$/,"")}function IHt(n){return n.split("/").some((o)=>e.test(i(o)))}
export{VRr,tsn,IHt};
