// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{_p}from"./chunk-5d5c7e2g.js";import{yh}from"./chunk-g1at15hs.js";import{a}from"./chunk-5054mktj.js";import{Lt,Bte,Yb}from"./chunk-hsxntwga.js";import{Ue}from"./chunk-7y7h3m02.js";import{Sl,Oz}from"./chunk-9v35ka7v.js";import{yp}from"./chunk-5zcypx67.js";import{iOo}from"./chunk-w57cgxw3.js";import{HGe}from"./chunk-m26hyk02.js";import{O_,ysn,oMt}from"./chunk-ckxen8vv.js";import{Usn,Iat}from"./chunk-kdmhh8e9.js";import{PAn}from"./chunk-646kfmwk.js";import{nH}from"./chunk-pqj7t96h.js";import{Us,Pc}from"./chunk-7a1w42qw.js";var p=new Set([yp,yh]),c=["subscribe_pr_activity","unsubscribe_pr_activity"];function f(o){return c.some((e)=>o.endsWith(e))}var T=new Set([_p,"github"]);function qZn(o,e){if(e.length===0)return o;let t=e.map((r)=>[r,Us(r)]),n=o.filter((r)=>!t.some(([s,i])=>Pc(r,s,i)));return n.length===o.length?o:n}function u(o){return o.mcpInfo?.cliOwned===!0&&o.mcpInfo.serverName===_p}var l=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-azvnpnbr.js");function jGt(){return(process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((o)=>o.trim()).filter(Boolean)}function KZn(o,e=jGt()){if(Usn(o)||T.has(o.name))return!0;let t=Us(o.name);return e.some((n)=>n.startsWith(t))}function PGo(o){let e=a.CLAUDE_CODE_BRIEF,t=new Set(jGt()),n=oMt();return o.filter((r)=>ysn.has(r.name)||n&&Lt(r,Ue)&&!O_(r)||f(r.name)||u(r)||Iat(r)||e&&p.has(r.name)||Yb(r,t))}function Xyt(o,e,t,n){let[r,s]=nH(PAn(Sl(HGe([...o,...e]),"name"),n),(m)=>O_(m)||Oz(m)),i=[...s.sort(Bte),...r.sort(Bte)];if(l.isCoordinatorMode())return PGo(i);return i}function Jyt(o,e){let t=o.length===1?o[0]:void 0;if(t&&iOo(e,t))return[];return o}
export{qZn,jGt,KZn,PGo,Xyt,Jyt};
