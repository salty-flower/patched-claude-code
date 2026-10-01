// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{At,j}from"./chunk-a7cah040.js";import{c}from"./chunk-g9zw99sb.js";import{Lo}from"./chunk-er6f56rj.js";import{p}from"./chunk-dsp1md5e.js";import{a}from"./chunk-1fpwxv0g.js";import{N}from"./chunk-zpb414p7.js";import{Bl}from"./chunk-ntsbwr3d.js";import{iR,hg,Lt}from"./chunk-q01dwdda.js";import{o,O,d}from"./chunk-g4gq2k0z.js";var Ay="memory_list",nf="memory_read",ec="memory_write",uHo=["memory_list","memory_read","memory_write"];var Fl="REPL";function SLr(){let e=new Date,t=e.getFullYear(),r=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0");return`${t}-${r}-${n}`}class i{#e;get(){return this.#e??=SLr(),this.#e}clear(){this.#e=void 0}get captured(){return this.#e!==void 0}}var WLt=new At(()=>new i);function bLr(e){return WLt.of(e).get()}function pHo(){return bLr(j())}function l(){return new Date().toLocaleString("en-US",{month:"long",year:"numeric"})}var s="(provided in the conversation below)",u='"standard": the normal web search: quick and cheap; right for straightforward lookups (reference facts, official pages, documentation, well-known people, places and topics) and simple follow-up lookups. "extended": a thorough, fresh search at several times the cost and latency.',m=`${hg} takes a \`mode\`. Use "standard" by default: it is the normal search, quick and cheap. Use "extended" only when a "standard" result comes back thin, off-target or possibly outdated, or from the start for hard-to-find or niche facts, very recent events, prices and availability, and multi-step research: it is thorough and fresh but several times the cost. When you plan several searches, send them in the same turn.`,h=p(()=>d({enabled:O(),mode_description:o().optional(),system_hint:o().optional(),web_search_addendum:o().optional()}));function R5e(){if(!Bl())return null;let e=h().safeParse(a.CLAUDE_CODE_WEB_SEARCH_FAST_ARG!==void 0?{enabled:a.CLAUDE_CODE_WEB_SEARCH_FAST_ARG}:["1","true","yes","on"].includes(String(process.env.CLAUDE_CODE_ALLOW_SERVED_TOOL_TEXT??"").toLowerCase().trim())?Lo("tengu_sleepy_shore",null):null);if(!e.success||!e.data.enabled)return null;let{mode_description:t,system_hint:r,web_search_addendum:n}=e.data;return{mode_description:t?.trim()?t:u,system_hint:r?.trim()?r:m,web_search_addendum:n?.trim()?n:""}}function wLr(e){return N(e)&&e.mode==="standard"&&R5e()!==null}function ELr(e){if(!R5e())return{};return{webSearchMode:c(wLr(e)?"standard":"extended")}}function hdn(e){let t=R5e()?.system_hint;return t&&e.some((r)=>Lt(r,hg))?t:null}function fHo(e){return e.replace(s,l())}function mHo(e,t){if(iR({model:e,leanPrompt:t}))return`Search the web. Returns result blocks with titles and URLs. US-only.

- The current month is ${s} \u2014 use this when searching for recent information.
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
  - The current month is ${s}. You MUST use this year when searching for recent information, documentation, or current events.
  - Example: If the user asks for "latest React docs", search for "React documentation" with the current year, NOT last year
`}
export{Ay,nf,ec,uHo,Fl,SLr,WLt,bLr,pHo,R5e,wLr,ELr,hdn,fHo,mHo};
