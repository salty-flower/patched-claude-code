// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{lp}from"./chunk-c0aaqg7t.js";import{S_}from"./chunk-z0n2djw5.js";import{a}from"./chunk-yvnhkg35.js";import{It,sde,Ew}from"./chunk-hwpb27as.js";import{Be}from"./chunk-r2vtj1kh.js";import{yi}from"./chunk-a60ee1ne.js";import{Kf}from"./chunk-g1yqb0n4.js";import{ams}from"./chunk-nkb63p1y.js";import{Ert}from"./chunk-n3ykh62m.js";import{f0n,oso,cds,M9t}from"./chunk-s5fnj4tm.js";import{u0n,HCt}from"./chunk-j7rc3rgt.js";import{r9n}from"./chunk-tar639dc.js";import{vk}from"./chunk-j8hqhz0c.js";import{Qz}from"./chunk-kqp903rz.js";import{Sh}from"./chunk-45n90e94.js";import{Bo,rd}from"./chunk-g9z2s3cs.js";var p=new Set([Kf,S_]);function h$r(o,e){if(e.length===0)return o;let t=e.map((r)=>[r,Bo(r)]),n=o.filter((r)=>!t.some(([m,i])=>rd(r,m,i)));return n.length===o.length?o:n}function c(o){return o.mcpInfo?.cliOwned===!0&&o.mcpInfo.serverName===lp}var l=((...args)=>{const value=import.meta.require(...args);return typeof args[0]==="string"&&args[0].endsWith(".embedded.txt")?value.default:value})("./chunk-r6za5rr8.js");function bfn(){return(process.env.CLAUDE_CODE_COORDINATOR_EXTRA_TOOLS??"").split(",").map((o)=>o.trim()).filter(Boolean)}function y$r(o,e=bfn()){if(u0n(o)||oso.includes(o.name))return!0;let t=Bo(o.name);return e.some((n)=>n.startsWith(t))}function kMs(o){let e=a.CLAUDE_CODE_BRIEF,t=new Set(bfn()),n=M9t();return o.filter((r)=>f0n.has(r.name)||n&&It(r,Be)&&!Sh(r)||cds(r.name)||c(r)||HCt(r)||e&&p.has(r.name)||Ew(r,t))}function RUt(o,e,t,n){let[r,m]=vk(r9n(yi(Ert([...o,...e]),"name"),n),(s)=>Sh(s)||Qz(s)),i=[...m.sort(sde),...r.sort(sde)];if(l.isCoordinatorMode())return kMs(i);return i}function xUt(o,e){let t=o.length===1?o[0]:void 0;if(t&&ams(e,t))return[];return o}
export{h$r,bfn,y$r,kMs,RUt,xUt};
