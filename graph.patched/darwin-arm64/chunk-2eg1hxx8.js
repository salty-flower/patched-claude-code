// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{fe}from"./chunk-c63g0fmv.js";class i{wait=null;beginLockHold=null}var t=new i;class o{untilDeadline=null;exitBeganAtMs=null}var n=fe(new o,(e)=>{e.untilDeadline=null,e.exitBeganAtMs=null});function V9(e=!0){n.untilDeadline=e&&n.untilDeadline!==!1}function o3o(){return n.untilDeadline===!0}function Vxt(){let e=o3o();if(e)n.exitBeganAtMs??=Date.now();return e}function zai(){let{exitBeganAtMs:e}=n;return e===null?0:Date.now()-e}function Vai(e,l){let r=t.wait;return t.wait=e,t.beginLockHold??=l??null,r}function qai(){return t.beginLockHold?.()??(()=>{})}async function CEn(e){try{await t.wait?.(e)}catch{}}
export{V9,o3o,Vxt,zai,Vai,qai,CEn};
