// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{mt,F}from"./chunk-vd0a9d2s.js";import{d}from"./chunk-eak61y8v.js";import{$r}from"./chunk-gcyvvtkw.js";import{a}from"./chunk-70qqbqq4.js";import{f}from"./chunk-y575z4xw.js";import{Sl}from"./chunk-fsnz81vy.js";import{$P,Wf,Dt}from"./chunk-q21zbtsq.js";import{L}from"./chunk-mfn0g94q.js";import{o,H,u}from"./chunk-hcyr0654.js";import{DK}from"./chunk-5x68dmkf.js";class l{#e;get(){return this.#e}replace(e){this.#e=e}}var g=new mt(()=>new l);function Wno(){return g.peek(F())?.get()}function Gno(){let e=new Date,t=Wno();if(t!==void 0){let s=new Map(DK("en-US",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e).map((c)=>[c.type,c.value]));return`${s.get("year")}-${s.get("month")}-${s.get("day")}`}let n=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),p=String(e.getDate()).padStart(2,"0");return`${n}-${r}-${p}`}class m{#e;get(){return this.#e??=Gno(),this.#e}clear(){this.#e=void 0}get captured(){return this.#e!==void 0}}var w4t=new mt(()=>new m);function zno(e){return w4t.of(e).get()}function Tss(){return zno(F())}function h(){return new Date().toLocaleString("en-US",{month:"long",year:"numeric"})}var i="(provided in the conversation below)",S='"standard": the normal web search: quick and cheap; right for straightforward lookups (reference facts, official pages, documentation, well-known people, places and topics) and simple follow-up lookups. "extended": a thorough, fresh search at several times the cost and latency.',_=`${Wf} takes a \`mode\`. Use "standard" by default: it is the normal search, quick and cheap. Use "extended" only when a "standard" result comes back thin, off-target or possibly outdated, or from the start for hard-to-find or niche facts, very recent events, prices and availability, and multi-step research: it is thorough and fresh but several times the cost. When you plan several searches, send them in the same turn.`,w=f(()=>u({enabled:H(),mode_description:o().optional(),system_hint:o().optional(),web_search_addendum:o().optional()}));function Znt(){if(!Sl())return null;let e=w().safeParse(a.CLAUDE_CODE_WEB_SEARCH_FAST_ARG!==void 0?{enabled:a.CLAUDE_CODE_WEB_SEARCH_FAST_ARG}:["1","true","yes","on"].includes(String(process.env.CLAUDE_CODE_ALLOW_SERVED_TOOL_TEXT??"").toLowerCase().trim())?$r("tengu_sleepy_shore",null):null);if(!e.success||!e.data.enabled)return null;let{mode_description:t,system_hint:n,web_search_addendum:r}=e.data;return{mode_description:t?.trim()?t:S,system_hint:n?.trim()?n:_,web_search_addendum:r?.trim()?r:""}}function Vno(e){return L(e)&&e.mode==="standard"&&Znt()!==null}function qno(e,t){if(!Znt())return{};return{webSearchMode:d(Vno(e)?"standard":"extended"),webSearchModeWritten:d(L(t)&&t.mode!==void 0?"yes":"no")}}function oIn(e){let t=Znt()?.system_hint;return t&&e.some((n)=>Dt(n,Wf))?t:null}function Rss(e){return e.replace(i,h())}function xss(e,t){if($P({model:e,leanPrompt:t}))return`Search the web. Returns result blocks with titles and URLs. US-only.

- The current month is ${i} \u2014 use this when searching for recent information.
- \`allowed_domains\` / \`blocked_domains\` filter results.
- After answering from results, end with a "Sources:" list of the URLs you used as markdown links.`;return`
- Allows Claude to search the web and use the results to inform responses
- Provides up-to-date information for current events and recent data
- Returns search result information formatted as search result blocks, including links as markdown hyperlinks
- Use this tool for accessing information beyond Claude's knowledge cutoff
- Searches are performed automatically within a single API call

CRITICAL REQUIREMENT - You MUST follow this:
  - After answering the user's question, you MUST include a "Sources:" section at the end of your response
  - In the Sources section, list all relevant URLs from the search results as markdown hyperlinks: [Title](URL)
  - This is MANDATORY - never skip including sources in your response
  - Example format:

    [Your answer here]

    Sources:
    - [Source Title 1](https://example.com/1)
    - [Source Title 2](https://example.com/2)

Usage notes:
  - Domain filtering is supported to include or block specific websites
  - Web search is only available in the US

IMPORTANT - Use the correct year in search queries:
  - The current month is ${i}. You MUST use this year when searching for recent information, documentation, or current events.
  - Example: If the user asks for "latest React docs", search for "React documentation" with the current year, NOT last year
`}
export{Wno,Gno,w4t,zno,Tss,Znt,Vno,qno,oIn,Rss,xss};
