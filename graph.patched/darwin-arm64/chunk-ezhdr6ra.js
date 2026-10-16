// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{uc}from"./chunk-btnsqe7h.js";import{XZ}from"./chunk-dvmwj6gj.js";import{nMn}from"./chunk-996thspe.js";import{ojn}from"./chunk-sg1n91rm.js";import{posix as r}from"path";var D=r.dirname(XZ),l="/mnt/user-data/working",JQr=r.join(l,XZ),Cqe=32,goe=524288,g4t=2097152,QQr=200,E=237,a=4,PQ="CLAUDE.md",jTe="rules",Aqe="output-styles",cAt="settings.json",e=".md",p=/[\p{Cc}\p{Cf}\p{Co}\p{Cn}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u2024-\u2026\u2044\u2215\u2216\u2236\u2571\u2572\u27CB\u27CD\u29F5\u29F8\u29F9\u02D0\u05C3\u0589\uA789\uFE13\uFE52\uFE55\uFE68\uFF0E\uFF0F\uFF1A\uFF3C\uFF61\u3002]|(?!\u0020)\p{Zs}/u,c=/^\p{M}/u;function d(t){return t!==""&&t===t.trim()&&Buffer.byteLength(t,"utf8")<=E&&!t.startsWith(".")&&!ojn(t)&&!t.includes("\\")&&!p.test(t)&&!c.test(t)&&!t.endsWith("~")&&!t.endsWith(".swp")&&!t.endsWith(".tmp")}function u(t){return t.length>e.length&&t.endsWith(e)}function h4t(t){return nMn(t)}function M(t){return u(h4t(t))}function WTe(t){if(t.length>QQr||!uc(t)||t.normalize("NFC")!==t)return null;let n=t.split("/");if(!n.every(d))return null;let[i,...o]=n;if(o.length===0)return i===PQ?"claude_md":null;let s=o.slice(0,-1),_=o.at(-1)??"";if(!u(_)||s.some(M))return null;if(o.length>a)return null;return i===jTe?"rule":i===Aqe?"output_style":null}function uAt(t){return WTe(t)!==null}function Not(t){let n=WTe(t);return n===null?null:{destination:t,kind:n}}
export{JQr,Cqe,goe,g4t,QQr,PQ,jTe,Aqe,cAt,h4t,WTe,uAt,Not};
