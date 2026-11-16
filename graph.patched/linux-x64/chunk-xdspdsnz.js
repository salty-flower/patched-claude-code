// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{P}from"./chunk-8txsa0tf.js";function Jki(e,l){let t=new Map,o=[];if(e===void 0||e===null)return{manifests:t,malformedField:!1,malformedServerNames:o};if(!P(e))return{manifests:t,malformedField:!0,malformedServerNames:o};for(let r of l){if(!Object.hasOwn(e,r))continue;let n=e[r],s=P(n)?n.initializeResult:void 0,i=P(n)&&n.toolsListResult!==null?n.toolsListResult:void 0;if(P(s)&&(i===void 0||P(i)))t.set(r,i===void 0?{initializeResult:s}:{initializeResult:s,toolsListResult:i});else o.push(r)}return{manifests:t,malformedField:!1,malformedServerNames:o}}var d="notifications/tools/list_changed";function Ddr(e){return P(e)&&!("id"in e)&&e.method===d}
export{Jki,Ddr};
