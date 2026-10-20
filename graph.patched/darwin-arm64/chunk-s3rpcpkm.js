// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{bc}from"./chunk-42txhxmf.js";import{Tee}from"./chunk-d7eqjts1.js";import{WFn}from"./chunk-na9nw575.js";import{Azn}from"./chunk-s57j06xm.js";import{posix as r}from"path";var D=r.dirname(Tee),l="/mnt/user-data/working",Tso=r.join(l,Tee),f3e=32,yse=524288,B9t=2097152,Aso=200,E=237,a=4,lZ="CLAUDE.md",nxe="rules",m3e="output-styles",uRt="settings.json",e=".md",p=/[\p{Cc}\p{Cf}\p{Co}\p{Cn}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u2024-\u2026\u2044\u2215\u2216\u2236\u2571\u2572\u27CB\u27CD\u29F5\u29F8\u29F9\u02D0\u05C3\u0589\uA789\uFE13\uFE52\uFE55\uFE68\uFF0E\uFF0F\uFF1A\uFF3C\uFF61\u3002]|(?!\u0020)\p{Zs}/u,c=/^\p{M}/u;function d(t){return t!==""&&t===t.trim()&&Buffer.byteLength(t,"utf8")<=E&&!t.startsWith(".")&&!Azn(t)&&!t.includes("\\")&&!p.test(t)&&!c.test(t)&&!t.endsWith("~")&&!t.endsWith(".swp")&&!t.endsWith(".tmp")}function u(t){return t.length>e.length&&t.endsWith(e)}function j9t(t){return WFn(t)}function M(t){return u(j9t(t))}function rxe(t){if(t.length>Aso||!bc(t)||t.normalize("NFC")!==t)return null;let n=t.split("/");if(!n.every(d))return null;let[i,...o]=n;if(o.length===0)return i===lZ?"claude_md":null;let s=o.slice(0,-1),_=o.at(-1)??"";if(!u(_)||s.some(M))return null;if(o.length>a)return null;return i===nxe?"rule":i===m3e?"output_style":null}function pRt(t){return rxe(t)!==null}function Oit(t){let n=rxe(t);return n===null?null:{destination:t,kind:n}}
export{Tso,f3e,yse,B9t,Aso,lZ,nxe,m3e,uRt,j9t,rxe,pRt,Oit};
