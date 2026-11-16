// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Ia}from"./chunk-h4js79s0.js";import{re}from"./chunk-y8ye30ak.js";var g=2,u=2,S=36,C=30,b=4;function O(t,n){let s=Math.max(n,1),r=[];for(let i of t.split(`
`)){if(/^\s+\S/.test(i)){r.push(i);continue}let e=i.match(/\s*\S+/g);if(!e){r.push("");continue}let o="",a=0,m=!1;for(let p of e){let c=re(p);if(!m)o=p,a=c,m=!0;else if(a+c<=s)o+=p,a+=c;else{r.push(o);let f=p.replace(/^\s+/,"");o=f,a=re(f)}}r.push(o)}return r.join(`
`)}function d(t,n,s,r){let i=" ".repeat(g);if(!n)return i+t;let e=re(t);if(n.includes(`
`)){let c=e<=s?Ia(" ",s-e+u):" ".repeat(u);return(i+t+c+n).replace(/\n/g,`
`+i)}let o=r-g-s-u;if(e<=s&&o>=C){let c=Ia(" ",s-e+u),f=" ".repeat(g+s+u),D=O(n,o);return i+t+c+D.replace(/\n/g,`
`+f)}let a=" ".repeat(g+b),m=r-g-b,p=O(n,m);return i+t+`
`+a+p.replace(/\n/g,`
`+a)}function l(t,n,s){if(s.length===0)return;t.push(n,...s,"")}function E(t,n){let s=n.helpWidth||80,r=Math.min(n.padWidth(t,n),S),i=[`Usage: ${n.commandUsage(t)}`,""],e=n.commandDescription(t);if(e.length>0)i.push(O(e,s),"");if(l(i,"Arguments:",n.visibleArguments(t).map((o)=>d(n.argumentTerm(o),n.argumentDescription(o),r,s))),l(i,"Options:",n.visibleOptions(t).map((o)=>d(n.optionTerm(o),n.optionDescription(o),r,s))),n.showGlobalOptions)l(i,"Global Options:",n.visibleGlobalOptions(t).map((o)=>d(n.optionTerm(o),n.optionDescription(o),r,s)));return l(i,"Commands:",n.visibleCommands(t).map((o)=>d(n.subcommandTerm(o),n.subcommandDescription(o),r,s))),i.join(`
`)}function Pbe(){let t=(n)=>n.long?.replace(/^--/,"")??n.short?.replace(/^-/,"")??"";return Object.assign({sortSubcommands:!0,sortOptions:!0,formatHelp:E},{compareOptions:(n,s)=>t(n).localeCompare(t(s))})}
export{Pbe};
