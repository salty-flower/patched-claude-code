// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{uc}from"./chunk-b9getfsf.js";import{jZ}from"./chunk-7f1jmyrt.js";import{NHn}from"./chunk-38nf1dnm.js";import{U1n}from"./chunk-zhrb424j.js";import{posix as r}from"path";var D=r.dirname(jZ),l="/mnt/user-data/working",q7r=r.join(l,jZ),yqe=32,doe=524288,i6t=2097152,Y7r=200,E=237,a=4,v7="CLAUDE.md",LCe="rules",_qe="output-styles",oAt="settings.json",e=".md",p=/[\p{Cc}\p{Cf}\p{Co}\p{Cn}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u2024-\u2026\u2044\u2215\u2216\u2236\u2571\u2572\u27CB\u27CD\u29F5\u29F8\u29F9\u02D0\u05C3\u0589\uA789\uFE13\uFE52\uFE55\uFE68\uFF0E\uFF0F\uFF1A\uFF3C\uFF61\u3002]|(?!\u0020)\p{Zs}/u,c=/^\p{M}/u;function d(t){return t!==""&&t===t.trim()&&Buffer.byteLength(t,"utf8")<=E&&!t.startsWith(".")&&!U1n(t)&&!t.includes("\\")&&!p.test(t)&&!c.test(t)&&!t.endsWith("~")&&!t.endsWith(".swp")&&!t.endsWith(".tmp")}function u(t){return t.length>e.length&&t.endsWith(e)}function a6t(t){return NHn(t)}function M(t){return u(a6t(t))}function NCe(t){if(t.length>Y7r||!uc(t)||t.normalize("NFC")!==t)return null;let n=t.split("/");if(!n.every(d))return null;let[i,...o]=n;if(o.length===0)return i===v7?"claude_md":null;let s=o.slice(0,-1),_=o.at(-1)??"";if(!u(_)||s.some(M))return null;if(o.length>a)return null;return i===LCe?"rule":i===_qe?"output_style":null}function sAt(t){return NCe(t)!==null}function Oot(t){let n=NCe(t);return n===null?null:{destination:t,kind:n}}
export{q7r,yqe,doe,i6t,Y7r,v7,LCe,_qe,oAt,a6t,NCe,sAt,Oot};
