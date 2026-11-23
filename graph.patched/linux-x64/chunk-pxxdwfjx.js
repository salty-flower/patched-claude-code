// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{nq}from"./chunk-tmanz2ax.js";import{le}from"./chunk-pw3ekzpq.js";import{OY,KQ}from"./chunk-nbw6q6ev.js";function D1e(){return le()&&OY()&&!nq()}function dYa(t){return D1e()&&KQ(t)}var E=750,b=3000;function cYa(){return{debounceMs:E,maxWaitMs:b}}function uYa({news:t,subscribe:m,signal:n,settled:o,debounceMs:a,maxWaitMs:p}){return new Promise((f)=>{let r=!1,i,u,c=m(s);function e(){if(r)return;r=!0,clearTimeout(i),clearTimeout(u),c(),n.removeEventListener("abort",e),o?.removeEventListener("abort",d),f()}function d(){s()}function s(){if(r||t().length===0&&o?.aborted!==!0)return;if(clearTimeout(i),i=setTimeout(e,a),u===void 0)u=setTimeout(e,p)}if(n.aborted){e();return}n.addEventListener("abort",e,{once:!0}),o?.addEventListener("abort",d,{once:!0}),s()})}
export{D1e,dYa,cYa,uYa};
