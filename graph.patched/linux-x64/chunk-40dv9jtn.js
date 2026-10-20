// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Sc}from"./chunk-nt1g7asm.js";import{_ee}from"./chunk-2gh4h0fv.js";import{k$n}from"./chunk-rncrmfyt.js";import{E2n}from"./chunk-6av53xfs.js";import{posix as r}from"path";var D=r.dirname(_ee),l="/mnt/user-data/working",Goo=r.join(l,_ee),iYe=32,dse=524288,I3t=2097152,zoo=200,E=237,a=4,tZ="CLAUDE.md",qRe="rules",aYe="output-styles",tRt="settings.json",e=".md",p=/[\p{Cc}\p{Cf}\p{Co}\p{Cn}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u2024-\u2026\u2044\u2215\u2216\u2236\u2571\u2572\u27CB\u27CD\u29F5\u29F8\u29F9\u02D0\u05C3\u0589\uA789\uFE13\uFE52\uFE55\uFE68\uFF0E\uFF0F\uFF1A\uFF3C\uFF61\u3002]|(?!\u0020)\p{Zs}/u,c=/^\p{M}/u;function d(t){return t!==""&&t===t.trim()&&Buffer.byteLength(t,"utf8")<=E&&!t.startsWith(".")&&!E2n(t)&&!t.includes("\\")&&!p.test(t)&&!c.test(t)&&!t.endsWith("~")&&!t.endsWith(".swp")&&!t.endsWith(".tmp")}function u(t){return t.length>e.length&&t.endsWith(e)}function O3t(t){return k$n(t)}function M(t){return u(O3t(t))}function YRe(t){if(t.length>zoo||!Sc(t)||t.normalize("NFC")!==t)return null;let n=t.split("/");if(!n.every(d))return null;let[i,...o]=n;if(o.length===0)return i===tZ?"claude_md":null;let s=o.slice(0,-1),_=o.at(-1)??"";if(!u(_)||s.some(M))return null;if(o.length>a)return null;return i===qRe?"rule":i===aYe?"output_style":null}function nRt(t){return YRe(t)!==null}function Cit(t){let n=YRe(t);return n===null?null:{destination:t,kind:n}}
export{Goo,iYe,dse,I3t,zoo,tZ,qRe,aYe,tRt,O3t,YRe,nRt,Cit};
