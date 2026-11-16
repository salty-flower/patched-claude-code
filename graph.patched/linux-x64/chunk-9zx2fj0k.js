// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{zt,Rp}from"./chunk-ykf94k84.js";import{N2t}from"./chunk-1ckz7raw.js";import{Um}from"./chunk-bvge8knx.js";import{Mo}from"./chunk-cezdb7ff.js";function JLi(){return Um()?Rp:zt}function Ccs(){return Um()?`the ${Rp} tool (load it with ${Mo}, query \`select:${Rp}\`, if it is not loaded)`:`the ${zt} tool`}function lJ(t){return`${Rp} tool, action "${t==="comments"?"read":t}"`}function Cc(t,o){return Um()?o():t}function QLi(t,o){return Um()?{name:Rp,input:N2t("comments",o)}:{name:t,input:o}}
export{JLi,Ccs,lJ,Cc,QLi};
