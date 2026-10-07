// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Uu}from"./chunk-6pm26t04.js";import{Ty}from"./chunk-e58tctgr.js";import{a}from"./chunk-j77txbjn.js";import{Ot,kie,Nb}from"./chunk-ax2crbgp.js";import{Fe}from"./chunk-ma17m27h.js";import{Ia}from"./chunk-nqb0d8cm.js";import{Sf}from"./chunk-44myv9zp.js";import{YXo}from"./chunk-an9ypasp.js";import{m9e}from"./chunk-yj2w4929.js";import{QEn,vS,M4r,r9o,KGt}from"./chunk-vxh9zeka.js";import{XEn,mSt}from"./chunk-5ksbc6vw.js";import{xBn}from"./chunk-dgne5796.js";import{ZT}from"./chunk-qmgtg38c.js";import{lV}from"./chunk-f66ke795.js";import{ps,Fc}from"./chunk-qs7t29dk.js";var p=new Set([Sf,Ty]);function RAr(o,e){if(e.length===0)return o;let t=e.map((r)=>[r,ps(r)]),n=o.filter((r)=>!t.some(([m,i])=>Fc(r,m,i)));return n.length===o.length?o:n}function c(o){return o.mcpInfo?.cliOwned===!0&&o.mcpInfo.serverName===Uu}var l=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-5raj3q2p.js");function Frn(){return(process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((o)=>o.trim()).filter(Boolean)}function xAr(o,e=Frn()){if(XEn(o)||M4r.includes(o.name))return!0;let t=ps(o.name);return e.some((n)=>n.startsWith(t))}function Ims(o){let e=a.CLAUDE_CODE_BRIEF,t=new Set(Frn()),n=KGt();return o.filter((r)=>QEn.has(r.name)||n&&Ot(r,Fe)&&!vS(r)||r9o(r.name)||c(r)||mSt(r)||e&&p.has(r.name)||Nb(r,t))}function w0t(o,e,t,n){let[r,m]=ZT(xBn(Ia(m9e([...o,...e]),"name"),n),(s)=>vS(s)||lV(s)),i=[...m.sort(kie),...r.sort(kie)];if(l.isCoordinatorMode())return Ims(i);return i}function E0t(o,e){let t=o.length===1?o[0]:void 0;if(t&&YXo(e,t))return[];return o}
export{RAr,Frn,xAr,Ims,w0t,E0t};
