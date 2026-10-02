// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{_p}from"./chunk-fmk5eq99.js";import{_h}from"./chunk-hjhshw1j.js";import{a}from"./chunk-1fpwxv0g.js";import{Lt,Kte,XS}from"./chunk-q01dwdda.js";import{Ue}from"./chunk-q8pmvej3.js";import{wl,UW}from"./chunk-jfbsd9e8.js";import{yp}from"./chunk-pnss6pgj.js";import{G0o}from"./chunk-9add1rv0.js";import{BGe}from"./chunk-3ewhmjtg.js";import{O_,Lsn,yOt}from"./chunk-6g8tbxxy.js";import{sin,jat}from"./chunk-gccfskmw.js";import{WTn}from"./chunk-98qpvhja.js";import{aH}from"./chunk-8b1dkx47.js";import{Us,Ic}from"./chunk-tn1j6vmr.js";var p=new Set([yp,_h]),c=["subscribe_pr_activity","unsubscribe_pr_activity"];function f(o){return c.some((e)=>o.endsWith(e))}var T=new Set([_p,"github"]);function Ser(o,e){if(e.length===0)return o;let t=e.map((r)=>[r,Us(r)]),n=o.filter((r)=>!t.some(([s,i])=>Ic(r,s,i)));return n.length===o.length?o:n}function u(o){return o.mcpInfo?.cliOwned===!0&&o.mcpInfo.serverName===_p}var l=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-29g7csa5.js");function ozt(){return(process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((o)=>o.trim()).filter(Boolean)}function ber(o,e=ozt()){if(sin(o)||T.has(o.name))return!0;let t=Us(o.name);return e.some((n)=>n.startsWith(t))}function vzo(o){let e=a.CLAUDE_CODE_BRIEF,t=new Set(ozt()),n=yOt();return o.filter((r)=>Lsn.has(r.name)||n&&Lt(r,Ue)&&!O_(r)||f(r.name)||u(r)||jat(r)||e&&p.has(r.name)||XS(r,t))}function a_t(o,e,t,n){let[r,s]=aH(WTn(wl(BGe([...o,...e]),"name"),n),(m)=>O_(m)||UW(m)),i=[...s.sort(Kte),...r.sort(Kte)];if(l.isCoordinatorMode())return vzo(i);return i}function l_t(o,e){let t=o.length===1?o[0]:void 0;if(t&&G0o(e,t))return[];return o}
export{Ser,ozt,ber,vzo,a_t,l_t};
