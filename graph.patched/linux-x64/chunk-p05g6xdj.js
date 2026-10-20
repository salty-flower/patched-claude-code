// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{B4}from"./chunk-bvydn19x.js";import{n2o,mWr,gWr,r2o}from"./chunk-m7gr14b0.js";var t={marks:["claude","anthropic","anthropics"],builtinLead:"cc-plugin",products:["claude-code","claude-mods"]},d=[...t.marks,t.builtinLead],c=[...t.marks,...t.products],E=(e)=>new Set(e.map((s)=>gWr(s).join(""))),l=E(d),p=E(c),_=Math.max(...[...l,...p].map((e)=>e.length)),R=(e)=>new Intl.ListFormat("en",{type:"disjunction"}).format(e.map((s)=>`"${s}"`)),g=R(d.map((e)=>`${e}-`)),m=`A third party's plugin name cannot start with ${g}, be ${R(c)}, or put "official" beside "claude" or "anthropic".`,a="Name it for what it does.",nss="If this is one of Anthropic's own plugins, validate the marketplace that lists it.";function Qqe(e){let s=mWr.test(e),n=(s?B4(e):e).toLowerCase(),r=s?`"${e}" (read as "${n}")`:`"${e}"`,i=gWr(n);if([...r2o(n,_)].some(({joined:o,isWhole:u})=>(u?p:l).has(o))||n2o.test(n)||n2o.test(i.join("")))return{severity:"error",message:`Plugin name ${r} is reserved: it passes as one of Anthropic's own. ${m} `+a};return t.marks.some((o)=>i.includes(o))?{severity:"warning",message:`Plugin name ${r} reads as one of Anthropic's own. `+a}:void 0}
export{nss,Qqe};
