// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{zt,Ap}from"./chunk-x875pyqe.js";import{VWt}from"./chunk-8ae799xs.js";import{Um}from"./chunk-97tgbr42.js";import{Mo}from"./chunk-wk5rn982.js";function CHi(){return Um()?Ap:zt}function eus(){return Um()?`the ${Ap} tool (load it with ${Mo}, query \`select:${Ap}\`, if it is not loaded)`:`the ${zt} tool`}function _J(t){return`${Ap} tool, action "${t==="comments"?"read":t}"`}function Ac(t,o){return Um()?o():t}function AHi(t,o){return Um()?{name:Ap,input:VWt("comments",o)}:{name:t,input:o}}
export{CHi,eus,_J,Ac,AHi};
