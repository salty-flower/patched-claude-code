// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{ye}from"./chunk-hdbxv3pp.js";import"./chunk-5e3knf27.js";import"./chunk-ma94d7pd.js";import"./chunk-gh3qnpny.js";import{P,Te}from"./chunk-h6md7820.js";import"./chunk-2cgtbdj1.js";import"./chunk-ffgkv432.js";import"./chunk-t1t1emvm.js";import"./chunk-pv906ex9.js";import"./chunk-88cgz317.js";import{V,Pt}from"./chunk-pc7b8z35.js";import"./chunk-2avye5sw.js";import{S,K,t}from"./chunk-t2jwg94b.js";import"./chunk-2mb81hfz.js";import"./chunk-qkcr56w2.js";import"./chunk-1mtde6n1.js";import"./chunk-wv4b4ave.js";import{s}from"./chunk-kzyd0fd4.js";import"./chunk-wpdwa7yz.js";import"./chunk-yxmvvxaq.js";import"./chunk-yx1gn1w6.js";import"./chunk-wmmywewf.js";import{Ve}from"./chunk-73z3qwhg.js";import"./chunk-qw2xqmjm.js";import{vq}from"./chunk-pv31m1gp.js";import"./chunk-h2gsgpx0.js";import{Bu}from"./chunk-0s8h31st.js";import"./chunk-k3mxj323.js";import"./chunk-kzsh05tm.js";import"./chunk-p6qksxwe.js";import"./chunk-zjtbqw2e.js";import"./chunk-wvv6qxhz.js";import"./chunk-d0r3tzx0.js";import"./chunk-s20s1ge7.js";import"./chunk-tgbc60ar.js";import"./chunk-dqgnfptc.js";import"./chunk-qfzsdjtj.js";import"./chunk-yhqjr2er.js";import"./chunk-akratr0p.js";import"./chunk-5b4s2jqq.js";import"./chunk-v94ds1sm.js";import"./chunk-2czbv1yw.js";import"./chunk-kmbbckxk.js";import"./chunk-gmk3nm4k.js";import"./chunk-046h39gw.js";import"./chunk-04r19fmz.js";import"./chunk-xwwpgrkv.js";import"./chunk-gdx67b65.js";import"./chunk-r0hsft7w.js";import"./chunk-ztx67v38.js";import"./chunk-j64ncx4g.js";import"./chunk-1h1jces6.js";import"./chunk-q84dja28.js";import"./chunk-09669z0m.js";import"./chunk-ndfabcjs.js";import"./chunk-3yv85b0k.js";import"./chunk-0g5fhtke.js";import"./chunk-msx8gtcp.js";import"./chunk-rgyha56k.js";import"./chunk-mrrqne4r.js";import"./chunk-zd4qet6w.js";import"./chunk-pfd7xc5y.js";import"./chunk-m6f6yn76.js";import"./chunk-sw1cad4q.js";import"./chunk-2q2nc49z.js";import"./chunk-gy3td9bv.js";import"./chunk-m2hw088w.js";import"./chunk-3vg54qd4.js";import"./chunk-1m8djgca.js";import"./chunk-hr8wrrm4.js";import{Ft}from"./chunk-zskn8f78.js";import{I3e}from"./chunk-w6nz65j3.js";import{gSe}from"./chunk-pxc7cpx7.js";import"./chunk-k2qx3wsk.js";import"./chunk-dhks5jtn.js";import"./chunk-tnjm8sjt.js";import"./chunk-1ghtgc3m.js";import"./chunk-bpk2rz0h.js";import"./chunk-gjjv0be0.js";import{readFile as F}from"fs/promises";import{basename as x,join as G}from"path";import{readdir as y,readFile as b,stat as C}from"fs/promises";import{extname as _,join as v}from"path";var E=52428800,T=200,g=60,D=/<command-name>\/([\w:-]+)<\/command-name>/g,A=/"name":"mcp__([^"]+?)__([^"]+)"/g,f='"content":"<command-name>/',R='"content":"<command-message>',k='"type":"tool_use"',N='"type":"custom-title"',O='"type":"pr-link"',M='"role":"user"',I=/"customTitle":"([^"]+)"/,U=/"prNumber":(\d+)/,L=/"role":"user"[^}]*"content":"([^"]+)"/;async function w(u,i){let o={slashCommandCounts:new Map,mcpServerCounts:new Map,sessionDescriptors:[],sessionFileCount:0},m=Date.now()-i*24*60*60*1000,h;try{h=await y(u)}catch(a){if(Pt(a))return o;throw a}let d=h.filter((a)=>_(a)===".jsonl"),p=(await Promise.all(d.map(async(a)=>{let l=v(u,a);try{let r=await C(l);if(!r.isFile()||r.mtimeMs<m||r.size>E)return null;return l}catch(r){if(Pt(r))return null;throw r}}))).filter((a)=>a!==null);for(let a of p){let l;try{l=await b(a,"utf-8")}catch(e){if(Pt(e))continue;throw e}o.sessionFileCount++;let r={prNumbers:[]};for(let e of l.split(`
`)){if(e.length<10)continue;if(e.includes(f)||e.includes(R))for(let n of e.matchAll(D)){let c=n[1];o.slashCommandCounts.set(c,(o.slashCommandCounts.get(c)??0)+1)}if(e.includes(k)&&e.includes('"name":"mcp__'))for(let n of e.matchAll(A)){let c=n[1];o.mcpServerCounts.set(c,(o.mcpServerCounts.get(c)??0)+1)}if(e.includes(N)){let n=I.exec(e);if(n)r.title=n[1]}if(e.includes(O)){let n=U.exec(e);if(n){let c=Number(n[1]);if(!r.prNumbers.includes(c))r.prNumbers.push(c)}}if(!r.firstMessage&&e.includes(M)&&!e.includes(f)&&!e.includes('"content":[')){let n=L.exec(e);if(n){let c=n[1].replace(/\\n/g," ").replace(/\\"/g,'"');if(c.length>3&&!c.startsWith("<"))r.firstMessage=c.slice(0,T)}}}if(r.title||r.prNumbers.length>0||r.firstMessage)o.sessionDescriptors.push(r)}if(o.sessionDescriptors.length>g)o.sessionDescriptors.sort((a,l)=>{let r=(a.title?2:0)+(a.prNumbers.length>0?1:0);return(l.title?2:0)+(l.prNumbers.length>0?1:0)-r}),o.sessionDescriptors=o.sessionDescriptors.slice(0,g);return o}var j=30;function W(u){try{return new URL(u).origin}catch{return}}async function B(u){try{let i=await F(G(u,".mcp.json"),"utf8"),o=K(i);if(o&&typeof o==="object"&&"mcpServers"in o&&o.mcpServers&&typeof o.mcpServers==="object")return o.mcpServers}catch(i){if(!V(i))t(`team-onboarding: failed to read .mcp.json: ${i instanceof Error?i.message:String(i)}`,{level:"error"})}return{}}async function q(u){let i=ye(),o=Bu(i),m=await w(o,u),h=[...m.slashCommandCounts.entries()].sort((e,n)=>n[1]-e[1]).map(([e,n])=>({name:`/${e}`,count:n})),d=await B(i),p=[...m.mcpServerCounts.entries()].sort((e,n)=>n[1]-e[1]).map(([e,n])=>{let c=d[e];return{name:e,callCount:n,urlOrigin:typeof c?.url==="string"?W(c.url):void 0}}),a=(await Ve("git",["config","user.name"],{cwd:i})).stdout.trim(),l=(await Ve("git",["remote","get-url","origin"],{cwd:i})).stdout.trim();return{usageData:S({generatedBy:a||void 0,currentRepo:vq(l)??x(i),windowDays:u,sessionCount:m.sessionFileCount,slashCommands:h,mcpServers:p,sessionDescriptors:m.sessionDescriptors},null,2),sessionCount:m.sessionFileCount,slashCommandCount:m.slashCommandCounts.size,mcpServerCount:m.mcpServerCounts.size}}var Y=`# Welcome to [Team Name]

## How We Use Claude

Based on [name]'s usage over the last [N] days:

Work Type Breakdown:
  [Category 1]  [ascii bar]  [N]%
  [Category 2]  [ascii bar]  [N]%
  [Category 3]  [ascii bar]  [N]%
  ...

Top Skills & Commands:
  [/command]  [ascii bar]  [N]x/month
  ...

Top MCP Servers:
  [Server]  [ascii bar]  [N] calls
  ...

## Your Setup Checklist

### Codebases
- [ ] [repo-name] \u2014 [repo url]
...

### MCP Servers to Activate
- [ ] [Server] \u2014 [what it's for]. [How to get access]
...

### Skills to Know About
- [/command] \u2014 [what it does, when the team uses it]
...

## Team Tips

_TODO_

## Get Started

_TODO_

<!-- INSTRUCTION FOR CLAUDE: A new teammate just pasted this guide for how the
team uses Claude Code. You're their onboarding buddy \u2014 warm, conversational,
not lecture-y.

Open with a warm welcome \u2014 include the team name from the title. Then: "Your
teammate uses Claude Code for [list all the work types]. Let's get you started."

Check what's already in place against everything under Setup Checklist
(including skills), using markdown checkboxes \u2014 [x] done, [ ] not yet. Lead
with what they already have. One sentence per item, all in one message.

Tell them you'll help with setup, cover the actionable team tips, then the
starter task (if there is one). Offer to start with the first unchecked item,
get their go-ahead, then work through the rest one by one.

After setup, walk them through the remaining sections \u2014 offer to help where you
can (e.g. link to channels), and just surface the purely informational bits.

Don't invent sections or summaries that aren't in the guide. The stats are the
guide creator's personal usage data \u2014 don't extrapolate them into a "team
workflow" narrative. -->`,H=`You are helping a power user generate an onboarding guide for teammates who are new to Claude Code. The guide will live in the team's onboarding docs and can be pasted into Claude for an interactive walkthrough.

You're co-authoring this with them \u2014 collaborative and helpful, like a teammate who's done this before and is happy to share.

## Usage data (last {{WINDOW_DAYS}} days)

This was scanned from the guide creator's local Claude Code transcripts:

\`\`\`json
{{USAGE_DATA}}
\`\`\`

## Your task

Before anything else \u2014 including before thinking through the classification \u2014 output exactly this line as your first visible text:

> Looking at how you've used Claude over the last {{WINDOW_DAYS}} days to put together an onboarding guide for teammates new to Claude Code.

This must come before any extended thinking about session descriptors. The guide creator is staring at a blank screen until you do. Classification is step 2, not step 1.

Generate the guide immediately, then ask for revisions. Don't wait for answers first \u2014 it's easier for the guide creator to edit a concrete draft than answer abstract questions.

1. **Output the acknowledgment line above.** No thinking, no classification, no tool calls before this. One line, then move on.

2. **Derive the work-type breakdown.** Read the \`sessionDescriptors\` array \u2014 each entry describes one session via its title, any linked code reviews (\`prNumbers\`), and first user message. Classify each session into one of these task types:

   - **build_feature** \u2014 new functionality, scripts, tools, config/CI/env setup
   - **debug_fix** \u2014 investigating and fixing bugs
   - **improve_quality** \u2014 refactoring, tests, cleanup, code review
   - **analyze_data** \u2014 queries, metrics, number crunching
   - **plan_design** \u2014 architecture, approach, strategy, understanding unfamiliar code, design review
   - **prototype** \u2014 spikes, POCs, throwaway exploration
   - **write_docs** \u2014 PRDs, RFCs, READMEs, design docs, copy/doc review

   Categories describe the *type of task*, not the project or domain \u2014 a teammate on any project should recognize them. Review sessions belong with whatever's being reviewed: code review is improve_quality, doc review is write_docs, design review is plan_design. Most sessions fit the list; only invent a new category if it's genuinely a different type of task. Pick the top 3-5 with rough percentages. First messages alone are usually enough; titles and code-review links are enrichment. If first messages are uninformative, use tool and MCP counts as a weak hint. If there are ~0 sessions, leave the breakdown as a TODO.

   In the rendered guide, display categories with spaces and title case (e.g. "Build Feature" not "build_feature").

3. **Gather the remaining pieces.** For repos, start with \`currentRepo\` and check the workspace for sibling repo directories. For MCP server setup, use each entry's \`name\` (and \`urlOrigin\` where present) to infer what the server does and how a teammate would get access. Leave the Team Tips and Get Started sections as TODO placeholders \u2014 you'll ask for these in Review and fill them in after.

4. **Write the guide to \`ONBOARDING.md\`** following this template:

\`\`\`
{{GUIDE_TEMPLATE}}
\`\`\`

   Fill in real numbers from the usage data (not placeholders). Use \`generatedBy\` for the name; if it's missing, omit the name. Ascii bar charts: \`\u2588\` for filled, \`\u2591\` for empty, 20 chars wide. Keep the HTML comment instruction at the bottom exactly as shown.

5. **Render the guide in a code block, then close out the first turn.** You're co-authoring this guide with the guide creator \u2014 frame the follow-up as collaboration, not corrections.

   After the code block, add a \`---\` horizontal rule and a \`**Review**\` heading so the guide is visually separated from your questions. Under the heading, number these three questions:

   1. "I went with '[X]' for the team name \u2014 let me know if that sounds right." (or if you couldn't tell: "What's the team name? I'll add it in.")
   2. Is there a starter task for someone new to Claude Code? (ticket or doc link \u2014 optional)
   3. Any team tips you'd tell a new teammate that aren't already in CLAUDE.md?

   After they answer, update \`ONBOARDING.md\` with their team name, tips, and starter task. Then close with this exact line (not numbered, not paraphrased):

   Saved to \`ONBOARDING.md\`. Drop it in your team docs and channels \u2014 when a new teammate pastes it into Claude Code, they get a guided onboarding tour from there.

   Apply any edits they come back with to the file.`,z=`

**Sharing** \u2014 call the ${I3e} tool twice:

1. **Right after rendering the draft code block** (still in step 5, before the Review questions). Call with \`mode='check'\` \u2014 this uploads the draft to an existing guide (or creates a new one). Either way you get a \`share_url\` and \`short_code\`. Instead of the \`---\` / \`**Review**\` header from step 5, bridge directly from the link into the numbered questions (no horizontal rule):

   Here's a draft \u2014 a few quick questions to finish it up:

   <share URL>

   Then ask the three numbered questions from step 5 as normal. Save the \`short_code\` from the tool result \u2014 you'll need it in step 2.

2. **After the user answers the Review questions** and you've updated ONBOARDING.md, call it again with \`mode='update'\` and the \`short_code\` from step 1 to refresh the same link. Replace step 5's "drop it in your team docs" close with:

   Here's your onboarding guide: <updated URL>

   Send this to teammates and they'll get a guided walkthrough when they open it in Claude Code.

If the tool returns 'unavailable' at any point, skip that call and use the manual close from step 5 instead.`,X=["Edit(ONBOARDING.md)","Bash(ls *)",I3e],J={type:"prompt",name:"team-onboarding",description:"Help teammates ramp on Claude Code with a guide from your usage",allowedTools:X,contentLength:0,isEnabled:()=>Ft("allow_team_onboarding"),policyGate:{policy:"allow_team_onboarding",featureLabel:"Team onboarding"},isHidden:!1,progressMessage:"scanning usage data",effort:"low",requires:{workspace:!0},userFacingName(){return"team-onboarding"},source:"builtin",disableModelInvocation:!0,async getPromptForCommand(u,i){let o=P("tengu_flint_harbor_prompt",{}),m=typeof o?.prompt==="string"?o.prompt:H,h=typeof o?.guideTemplate==="string"?o.guideTemplate:Y,d=typeof o?.windowDays==="number"?Math.min(Math.max(Math.floor(o.windowDays),1),365):j;s("tengu_team_onboarding_invoked",{window_days:d}),await Te((n)=>({...n,teamOnboardingLastUsedAt:Date.now()}),i.storageV5);let{usageData:p,sessionCount:a,slashCommandCount:l,mcpServerCount:r}=await q(d),e=m.replaceAll("{{WINDOW_DAYS}}",String(d)).replaceAll("{{GUIDE_TEMPLATE}}",h).replaceAll("{{USAGE_DATA}}",p)+(gSe()?z:"");return s("tengu_team_onboarding_generated",{session_count:a,slash_command_count:l,mcp_server_count:r,window_days:d}),[{type:"text",text:e}]}},Ce=J;export{Ce as default};
