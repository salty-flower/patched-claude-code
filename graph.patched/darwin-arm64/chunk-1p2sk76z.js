// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Yc}from"./chunk-ax7r0qj7.js";import{oJ}from"./chunk-n3ykh62m.js";import{vAn}from"./chunk-sfn1dbxq.js";import{bHn}from"./chunk-xmdpqvbv.js";import{posix as r}from"path";var D=r.dirname(oJ),l="/mnt/user-data/working",fVr=r.join(l,oJ),YWe=32,wte=524288,UWt=2097152,mVr=200,E=237,a=4,VX="CLAUDE.md",Bve="rules",XWe="output-styles",ySt="settings.json",e=".md",p=/[\p{Cc}\p{Cf}\p{Co}\p{Cn}\p{Zl}\p{Zp}\p{Default_Ignorable_Code_Point}\u2800\u{1D159}\u2024-\u2026\u2044\u2215\u2216\u2236\u2571\u2572\u27CB\u27CD\u29F5\u29F8\u29F9\u02D0\u05C3\u0589\uA789\uFE13\uFE52\uFE55\uFE68\uFF0E\uFF0F\uFF1A\uFF3C\uFF61\u3002]|(?!\u0020)\p{Zs}/u,c=/^\p{M}/u;function d(t){return t!==""&&t===t.trim()&&Buffer.byteLength(t,"utf8")<=E&&!t.startsWith(".")&&!bHn(t)&&!t.includes("\\")&&!p.test(t)&&!c.test(t)&&!t.endsWith("~")&&!t.endsWith(".swp")&&!t.endsWith(".tmp")}function u(t){return t.length>e.length&&t.endsWith(e)}function BWt(t){return vAn(t)}function M(t){return u(BWt(t))}function jve(t){if(t.length>mVr||!Yc(t)||t.normalize("NFC")!==t)return null;let n=t.split("/");if(!n.every(d))return null;let[i,...o]=n;if(o.length===0)return i===VX?"claude_md":null;let s=o.slice(0,-1),_=o.at(-1)??"";if(!u(_)||s.some(M))return null;if(o.length>a)return null;return i===Bve?"rule":i===XWe?"output_style":null}function _St(t){return jve(t)!==null}function ZQe(t){let n=jve(t);return n===null?null:{destination:t,kind:n}}
export{fVr,YWe,wte,UWt,mVr,VX,Bve,XWe,ySt,BWt,jve,_St,ZQe};
