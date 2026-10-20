// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Ur}from"./chunk-nre716m4.js";var czt={invalid_path:"sad",unsupported_name:"sad",symlink_in_path:"sad",path_not_canonical:"sad",read_rule:"sad",not_found:"sad",not_a_directory:"sad",os_permission_denied:"sad",workspace_moved:"bad",unexpected_error:"bad"},t="list denied: ";function WN(e,n){return new Ur(`${t}${e}`,n,e)}function dnt(e){if(!(e instanceof Ur))return;let n=e.errorClass;return n!==void 0&&o(n)&&e.message===`${t}${n}`?n:void 0}function o(e){return Object.hasOwn(czt,e)}
export{czt,WN,dnt};
