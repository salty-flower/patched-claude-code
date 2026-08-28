// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
function nm(n){let t=n.replace(/\r\n?|\n/g," ");if(t==="")return"` `";let r=t.match(/`+/g)?.reduce((s,i)=>Math.max(s,i.length),0)??0,o="`".repeat(r+1),e=t.startsWith("`")||t.endsWith("`")?" ":"";return`${o}${e}${t}${e}${o}`}function c(n,t){return n.replace(/(`+)(.+?)\1/g,(r,o,e)=>{let s=e.startsWith(" ")&&e.endsWith(" ")&&e.trim()!=="";return t(s?e.slice(1,-1):e)})}var iK="Set model to ",vZ="Kept model as ",bNt="Current model: ",SNt="No response from the cloud session \u2014 the switch to ",vNt="Cloud session couldn't switch to ",MIe="Fast mode ON",NIe=" \xB7 model set to ",_=[iK,vZ,bNt,SNt,vNt],E=/\x1b\[[0-9;]*m/g,p=4;function a(n){let t=n.replace(E,"").indexOf(`${MIe}${NIe}\``);return t>=0&&t<=p}function d(n){return _.some((t)=>n.startsWith(t))||a(n)}function m5n(n,t){return d(n)?c(n,t):n}
export{nm,iK,vZ,bNt,SNt,vNt,MIe,NIe,m5n};
