// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{B5e,qme,Kme,khn}from"./chunk-a38xyc22.js";import{G,jt,z}from"./chunk-sgamszzq.js";import{a}from"./chunk-wkhfcbsj.js";import{Ofr}from"./chunk-k4mhnjsy.js";import{Pt}from"./chunk-nq62bgfy.js";var c=["take_in","publish"];class l{visitors=new Map}var r=new jt(()=>new l);function p(e){try{return e.pending()===!0}catch{return!1}}function tir(e){let o=r.peek(e)?.visitors;return o!==void 0&&[...o.values()].some(p)}async function nir(e,o){let s=r.peek(e)?.visitors;if(s===void 0)return;let S=(async()=>{for(let i of c){let n=s.get(i);if(n!==void 0&&!Pt(o)&&p(n))try{await n.visit(o)}catch{}}})();if(Pt(o))return;let t=()=>{},y=new Promise((i)=>{t=()=>i()});o.addEventListener("abort",t,{once:!0});try{await Promise.race([S,y])}finally{o.removeEventListener("abort",t)}}function Wwn(e,o,s){r.of(s).visitors.set(e,o)}function Twt(e,o){return e===o||e.behavior==="ask"&&e.forcedByCaller===!0}function kwt(e){return e===B5e||e===qme||e===Kme||e===khn||Ofr(e)}var u={allowRules:[],denyRules:[],sessionDenyRules:[],toolsNarrowingDenyRules:[],additionalWorkingDirectories:new Map,launchedInAutoMode:!1};class d{snapshot=u;get(){return this.snapshot}publish(e){let o=a.CLAUDE_CODE_SESSION_KIND==="bg";this.snapshot={allowRules:o?[]:[...e.alwaysAllowRules.cliArg??[]],denyRules:[...e.alwaysDenyRules.cliArg??[]],sessionDenyRules:[...e.alwaysDenyRules.session??[]],toolsNarrowingDenyRules:[...e.alwaysDenyRules.toolsNarrowing??[]],additionalWorkingDirectories:new Map(o?[...e.additionalWorkingDirectories].filter(([,s])=>s.source==="session"):e.additionalWorkingDirectories),launchedInAutoMode:e.mode==="auto"}}reset(){this.snapshot=u}}var m=new G(()=>new d);function w(){return m.of(z().host)}function rir(e){w().publish(e)}
export{tir,nir,Wwn,Twt,kwt,rir};
