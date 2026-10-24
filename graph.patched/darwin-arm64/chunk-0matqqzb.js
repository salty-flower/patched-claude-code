// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{r5}from"./chunk-nfgwaxf2.js";import{HJo,D9r,L9r,DJo}from"./chunk-cemwep0x.js";var t={marks:["claude","anthropic","anthropics"],builtinLead:"cc-plugin",products:["claude-code","claude-mods"]},d=[...t.marks,t.builtinLead],c=[...t.marks,...t.products],E=(e)=>new Set(e.map((s)=>L9r(s).join(""))),l=E(d),p=E(c),_=Math.max(...[...l,...p].map((e)=>e.length)),R=(e)=>new Intl.ListFormat("en",{type:"disjunction"}).format(e.map((s)=>`"${s}"`)),g=R(d.map((e)=>`${e}-`)),m=`A third party's plugin name cannot start with ${g}, be ${R(c)}, or put "official" beside "claude" or "anthropic".`,a="Name it for what it does.",_Ss="If this is one of Anthropic's own plugins, validate the marketplace that lists it.";function y9e(e){let s=D9r.test(e),n=(s?r5(e):e).toLowerCase(),r=s?`"${e}" (read as "${n}")`:`"${e}"`,i=L9r(n);if([...DJo(n,_)].some(({joined:o,isWhole:u})=>(u?p:l).has(o))||HJo.test(n)||HJo.test(i.join("")))return{severity:"error",message:`Plugin name ${r} is reserved: it passes as one of Anthropic's own. ${m} `+a};return t.marks.some((o)=>i.includes(o))?{severity:"warning",message:`Plugin name ${r} reads as one of Anthropic's own. `+a}:void 0}
export{_Ss,y9e};
