// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Bu}from"./chunk-jnystawq.js";import{Ay}from"./chunk-g6x5pfpt.js";import{a}from"./chunk-869zfth6.js";import{Ot,bie,LS}from"./chunk-1xqd80pz.js";import{$e}from"./chunk-0wqb5n04.js";import{Pa}from"./chunk-p72qafcy.js";import{bf}from"./chunk-pvw1e2q4.js";import{uXo}from"./chunk-f94e3ymf.js";import{a5e}from"./chunk-smxbvpze.js";import{Hvn,vb,i6r,bYo,MGt}from"./chunk-tkgqbfqd.js";import{Ovn,rbt}from"./chunk-z7a4m01e.js";import{p1n}from"./chunk-j3fdjkhj.js";import{YC}from"./chunk-tqr0xr8c.js";import{eV}from"./chunk-p30yz5md.js";import{ps,Nc}from"./chunk-qt7wfk46.js";var p=new Set([bf,Ay]);function pAr(o,e){if(e.length===0)return o;let t=e.map((r)=>[r,ps(r)]),n=o.filter((r)=>!t.some(([m,i])=>Nc(r,m,i)));return n.length===o.length?o:n}function c(o){return o.mcpInfo?.cliOwned===!0&&o.mcpInfo.serverName===Bu}var l=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-3h3sr54p.js");function vrn(){return(process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((o)=>o.trim()).filter(Boolean)}function fAr(o,e=vrn()){if(Ovn(o)||i6r.includes(o.name))return!0;let t=ps(o.name);return e.some((n)=>n.startsWith(t))}function Xfs(o){let e=a.CLAUDE_CODE_BRIEF,t=new Set(vrn()),n=MGt();return o.filter((r)=>Hvn.has(r.name)||n&&Ot(r,$e)&&!vb(r)||bYo(r.name)||c(r)||rbt(r)||e&&p.has(r.name)||LS(r,t))}function cMt(o,e,t,n){let[r,m]=YC(p1n(Pa(a5e([...o,...e]),"name"),n),(s)=>vb(s)||eV(s)),i=[...m.sort(bie),...r.sort(bie)];if(l.isCoordinatorMode())return Xfs(i);return i}function dMt(o,e){let t=o.length===1?o[0]:void 0;if(t&&uXo(e,t))return[];return o}
export{pAr,vrn,fAr,Xfs,cMt,dMt};
