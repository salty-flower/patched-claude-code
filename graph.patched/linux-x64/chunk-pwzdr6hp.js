// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{R8e,Fme,Ume,Zgn}from"./chunk-h4q23q42.js";import{G,zt,W}from"./chunk-txfrkyzp.js";import{a}from"./chunk-q2vrcqny.js";import{Jpr}from"./chunk-a4zs7d2x.js";import{Pt}from"./chunk-v4zgc4qd.js";var c=["take_in","publish"];class l{visitors=new Map}var r=new zt(()=>new l);function p(e){try{return e.pending()===!0}catch{return!1}}function Por(e){let o=r.peek(e)?.visitors;return o!==void 0&&[...o.values()].some(p)}async function Hor(e,o){let s=r.peek(e)?.visitors;if(s===void 0)return;let S=(async()=>{for(let i of c){let n=s.get(i);if(n!==void 0&&!Pt(o)&&p(n))try{await n.visit(o)}catch{}}})();if(Pt(o))return;let t=()=>{},y=new Promise((i)=>{t=()=>i()});o.addEventListener("abort",t,{once:!0});try{await Promise.race([S,y])}finally{o.removeEventListener("abort",t)}}function YSn(e,o,s){r.of(s).visitors.set(e,o)}function GSt(e,o){return e===o||e.behavior==="ask"&&e.forcedByCaller===!0}function qSt(e){return e===R8e||e===Fme||e===Ume||e===Zgn||Jpr(e)}var u={allowRules:[],denyRules:[],sessionDenyRules:[],toolsNarrowingDenyRules:[],additionalWorkingDirectories:new Map,launchedInAutoMode:!1};class d{snapshot=u;get(){return this.snapshot}publish(e){let o=a.CLAUDE_CODE_SESSION_KIND==="bg";this.snapshot={allowRules:o?[]:[...e.alwaysAllowRules.cliArg??[]],denyRules:[...e.alwaysDenyRules.cliArg??[]],sessionDenyRules:[...e.alwaysDenyRules.session??[]],toolsNarrowingDenyRules:[...e.alwaysDenyRules.toolsNarrowing??[]],additionalWorkingDirectories:new Map(o?[...e.additionalWorkingDirectories].filter(([,s])=>s.source==="session"):e.additionalWorkingDirectories),launchedInAutoMode:e.mode==="auto"}}reset(){this.snapshot=u}}var m=new G(()=>new d);function w(){return m.of(W().host)}function Oor(e){w().publish(e)}
export{Por,Hor,YSn,GSt,qSt,Oor};
