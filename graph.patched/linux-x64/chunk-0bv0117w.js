// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{mt,F}from"./chunk-g79wjybr.js";import{d}from"./chunk-bkr1h20c.js";import{Fr}from"./chunk-cxjvwxsa.js";import{a}from"./chunk-rptge3r8.js";import{f}from"./chunk-ras5x31x.js";import{bl}from"./chunk-942093b7.js";import{DP,Wf,Dt}from"./chunk-vecj8twx.js";import{L}from"./chunk-mfn0g94q.js";import{o,M,u}from"./chunk-w8db6ytr.js";import{A4}from"./chunk-4exae0r9.js";var zc="REPL";class l{#e;get(){return this.#e}replace(e){this.#e=e}}var g=new mt(()=>new l);function gno(){return g.peek(F())?.get()}function hno(){let e=new Date,t=gno();if(t!==void 0){let s=new Map(A4("en-US",{timeZone:t,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(e).map((c)=>[c.type,c.value]));return`${s.get("year")}-${s.get("month")}-${s.get("day")}`}let n=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),p=String(e.getDate()).padStart(2,"0");return`${n}-${r}-${p}`}class m{#e;get(){return this.#e??=hno(),this.#e}clear(){this.#e=void 0}get captured(){return this.#e!==void 0}}var i6t=new mt(()=>new m);function yno(e){return i6t.of(e).get()}function Wos(){return yno(F())}function h(){return new Date().toLocaleString("en-US",{month:"long",year:"numeric"})}var i="(provided in the conversation below)",S='"standard": the normal web search: quick and cheap; right for straightforward lookups (reference facts, official pages, documentation, well-known people, places and topics) and simple follow-up lookups. "extended": a thorough, fresh search at several times the cost and latency.',_=`${Wf} takes a \`mode\`. Use "standard" by default: it is the normal search, quick and cheap. Use "extended" only when a "standard" result comes back thin, off-target or possibly outdated, or from the start for hard-to-find or niche facts, very recent events, prices and availability, and multi-step research: it is thorough and fresh but several times the cost. When you plan several searches, send them in the same turn.`,w=f(()=>u({enabled:M(),mode_description:o().optional(),system_hint:o().optional(),web_search_addendum:o().optional()}));function Gnt(){if(!bl())return null;let e=w().safeParse(a.CLAUDE_CODE_WEB_SEARCH_FAST_ARG!==void 0?{enabled:a.CLAUDE_CODE_WEB_SEARCH_FAST_ARG}:["1","true","yes","on"].includes(String(process.env.CLAUDE_CODE_ALLOW_SERVED_TOOL_TEXT??"").toLowerCase().trim())?Fr("tengu_sleepy_shore",null):null);if(!e.success||!e.data.enabled)return null;let{mode_description:t,system_hint:n,web_search_addendum:r}=e.data;return{mode_description:t?.trim()?t:S,system_hint:n?.trim()?n:_,web_search_addendum:r?.trim()?r:""}}function _no(e){return L(e)&&e.mode==="standard"&&Gnt()!==null}function bno(e,t){if(!Gnt())return{};return{webSearchMode:d(_no(e)?"standard":"extended"),webSearchModeWritten:d(L(t)&&t.mode!==void 0?"yes":"no")}}function UPn(e){let t=Gnt()?.system_hint;return t&&e.some((n)=>Dt(n,Wf))?t:null}function zos(e){return e.replace(i,h())}function Gos(e,t){if(DP({model:e,leanPrompt:t}))return`Search the web. Returns result blocks with titles and URLs. US-only.

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
export{zc,gno,hno,i6t,yno,Wos,Gnt,_no,bno,UPn,zos,Gos};
