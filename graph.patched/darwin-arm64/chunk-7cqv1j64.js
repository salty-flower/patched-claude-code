// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{oV}from"./chunk-n44szebn.js";import{le}from"./chunk-gwh19369.js";import{j7,oZ}from"./chunk-xjqp3eha.js";function NUe(){return le()&&j7()&&!oV()}function Q7a(t){return NUe()&&oZ(t)}var E=750,b=3000;function Z7a(){return{debounceMs:E,maxWaitMs:b}}function eYa({news:t,subscribe:m,signal:n,settled:o,debounceMs:a,maxWaitMs:p}){return new Promise((f)=>{let r=!1,i,u,c=m(s);function e(){if(r)return;r=!0,clearTimeout(i),clearTimeout(u),c(),n.removeEventListener("abort",e),o?.removeEventListener("abort",d),f()}function d(){s()}function s(){if(r||t().length===0&&o?.aborted!==!0)return;if(clearTimeout(i),i=setTimeout(e,a),u===void 0)u=setTimeout(e,p)}if(n.aborted){e();return}n.addEventListener("abort",e,{once:!0}),o?.addEventListener("abort",d,{once:!0}),s()})}
export{NUe,Q7a,Z7a,eYa};
