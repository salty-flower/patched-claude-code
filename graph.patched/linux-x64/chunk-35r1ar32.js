// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{be}from"./chunk-30zk17wm.js";import"./chunk-7s3c5qqq.js";import"./chunk-rv2kd9jf.js";import{x,Ae}from"./chunk-1e5y3pjf.js";import"./chunk-sgsf5yd5.js";import"./chunk-asme1eq2.js";import"./chunk-w8ppmegc.js";import"./chunk-m9gbfvns.js";import"./chunk-jpen6jwm.js";import"./chunk-d7ejrssq.js";import"./chunk-r1b219q3.js";import{Y,It}from"./chunk-efckqwp7.js";import{S,q,n}from"./chunk-d0cr5d2v.js";import"./chunk-bvdq8tnt.js";import"./chunk-764j5mtt.js";import"./chunk-ma4xtxwv.js";import"./chunk-gbq6xyrq.js";import{s}from"./chunk-yqfv1yd3.js";import"./chunk-ykrbqs98.js";import"./chunk-q2grjtpb.js";import"./chunk-3qzpxayw.js";import"./chunk-a090dzyj.js";import"./chunk-a2g5xbg4.js";import"./chunk-9cvbc65t.js";import"./chunk-1ttwv9fk.js";import{Ge}from"./chunk-zv6dxs76.js";import{sq}from"./chunk-0sdpjn9a.js";import"./chunk-j35pah18.js";import{ju}from"./chunk-vv42w3zb.js";import"./chunk-qd43z1g9.js";import"./chunk-j55vqm69.js";import"./chunk-e7r3n0fy.js";import"./chunk-wsjwtx5h.js";import"./chunk-yxr9b4ek.js";import"./chunk-cn7kmt56.js";import"./chunk-a8be273g.js";import"./chunk-kc505vjh.js";import"./chunk-jw46j330.js";import"./chunk-0xn3mw8z.js";import"./chunk-30zpf1a7.js";import"./chunk-dkknd74f.js";import"./chunk-1nj7y1sr.js";import"./chunk-s5z7wmv7.js";import"./chunk-hgebmnek.js";import"./chunk-000exgr8.js";import"./chunk-zkwbrkrn.js";import"./chunk-1vhz7b90.js";import"./chunk-jh8hhb0y.js";import"./chunk-jpepp1st.js";import"./chunk-e21g00dm.js";import"./chunk-p0e7nc2g.js";import"./chunk-m3zmmvh7.js";import"./chunk-azztsfgd.js";import"./chunk-1461jpph.js";import"./chunk-7r196x4z.js";import"./chunk-xmefb9d5.js";import"./chunk-4n7ktjmt.js";import"./chunk-02dpwhns.js";import"./chunk-dzd4rkt0.js";import"./chunk-s7r9vssa.js";import"./chunk-hvkwrtra.js";import"./chunk-4v7s9wvr.js";import"./chunk-s4gv6c12.js";import"./chunk-bt08ja64.js";import"./chunk-qv5nyd4p.js";import"./chunk-xzv9n2q7.js";import"./chunk-rv365wnb.js";import"./chunk-t1dbt8zk.js";import"./chunk-9qzqdgp0.js";import"./chunk-d85w7nxf.js";import"./chunk-nsht0110.js";import"./chunk-dmrj2df2.js";import"./chunk-pm1yx9gh.js";import"./chunk-7vzd1b8s.js";import"./chunk-ezy65b9n.js";import"./chunk-0me3rg21.js";import"./chunk-nceebb9v.js";import"./chunk-41nyh22r.js";import"./chunk-4kxavepq.js";import"./chunk-kqhtgdqq.js";import"./chunk-bqf28esr.js";import"./chunk-ts4ymrjf.js";import"./chunk-njtgsd8n.js";import"./chunk-7vs7qneb.js";import{Mt}from"./chunk-k7gygany.js";import{ize}from"./chunk-hs1xnehp.js";import{The}from"./chunk-mwb6q9zm.js";import"./chunk-esh1xgk6.js";import"./chunk-ds8dremv.js";import"./chunk-2txjr9b6.js";import"./chunk-peh5tvnh.js";import"./chunk-jdkn7yce.js";import"./chunk-qh4ma7bm.js";import"./chunk-zm2aajcr.js";import"./chunk-7ntmrqet.js";import"./chunk-edxkqkcr.js";import"./chunk-6c8t6gsc.js";import"./chunk-er188mb2.js";import{readFile as L}from"fs/promises";import{basename as F,join as G}from"path";import{readdir as y,readFile as b,stat as C}from"fs/promises";import{extname as _,join as v}from"path";var E=52428800,T=200,g=60,D=/<command-name>\/([\w:-]+)<\/command-name>/g,A=/"name":"mcp__([^"]+?)__([^"]+)"/g,f='"content":"<command-name>/',R='"content":"<command-message>',k='"type":"tool_use"',N='"type":"custom-title"',O='"type":"pr-link"',M='"role":"user"',P=/"customTitle":"([^"]+)"/,I=/"prNumber":(\d+)/,U=/"role":"user"[^}]*"content":"([^"]+)"/;async function w(u,i){let t={slashCommandCounts:new Map,mcpServerCounts:new Map,sessionDescriptors:[],sessionFileCount:0},m=Date.now()-i*24*60*60*1000,h;try{h=await y(u)}catch(a){if(It(a))return t;throw a}let d=h.filter((a)=>_(a)===".jsonl"),p=(await Promise.all(d.map(async(a)=>{let l=v(u,a);try{let r=await C(l);if(!r.isFile()||r.mtimeMs<m||r.size>E)return null;return l}catch(r){if(It(r))return null;throw r}}))).filter((a)=>a!==null);for(let a of p){let l;try{l=await b(a,"utf-8")}catch(e){if(It(e))continue;throw e}t.sessionFileCount++;let r={prNumbers:[]};for(let e of l.split(`
`)){if(e.length<10)continue;if(e.includes(f)||e.includes(R))for(let o of e.matchAll(D)){let c=o[1];t.slashCommandCounts.set(c,(t.slashCommandCounts.get(c)??0)+1)}if(e.includes(k)&&e.includes('"name":"mcp__'))for(let o of e.matchAll(A)){let c=o[1];t.mcpServerCounts.set(c,(t.mcpServerCounts.get(c)??0)+1)}if(e.includes(N)){let o=P.exec(e);if(o)r.title=o[1]}if(e.includes(O)){let o=I.exec(e);if(o){let c=Number(o[1]);if(!r.prNumbers.includes(c))r.prNumbers.push(c)}}if(!r.firstMessage&&e.includes(M)&&!e.includes(f)&&!e.includes('"content":[')){let o=U.exec(e);if(o){let c=o[1].replace(/\\n/g," ").replace(/\\"/g,'"');if(c.length>3&&!c.startsWith("<"))r.firstMessage=c.slice(0,T)}}}if(r.title||r.prNumbers.length>0||r.firstMessage)t.sessionDescriptors.push(r)}if(t.sessionDescriptors.length>g)t.sessionDescriptors.sort((a,l)=>{let r=(a.title?2:0)+(a.prNumbers.length>0?1:0);return(l.title?2:0)+(l.prNumbers.length>0?1:0)-r}),t.sessionDescriptors=t.sessionDescriptors.slice(0,g);return t}var j=30;function W(u){try{return new URL(u).origin}catch{return}}async function B(u){try{let i=await L(G(u,".mcp.json"),"utf8"),t=q(i);if(t&&typeof t==="object"&&"mcpServers"in t&&t.mcpServers&&typeof t.mcpServers==="object")return t.mcpServers}catch(i){if(!Y(i))n(`team-onboarding: failed to read .mcp.json: ${i instanceof Error?i.message:String(i)}`,{level:"error"})}return{}}async function H(u){let i=be(),t=ju(i),m=await w(t,u),h=[...m.slashCommandCounts.entries()].sort((e,o)=>o[1]-e[1]).map(([e,o])=>({name:`/${e}`,count:o})),d=await B(i),p=[...m.mcpServerCounts.entries()].sort((e,o)=>o[1]-e[1]).map(([e,o])=>{let c=d[e];return{name:e,callCount:o,urlOrigin:typeof c?.url==="string"?W(c.url):void 0}}),a=(await Ge("git",["config","user.name"],{cwd:i})).stdout.trim(),l=(await Ge("git",["remote","get-url","origin"],{cwd:i})).stdout.trim();return{usageData:S({generatedBy:a||void 0,currentRepo:sq(l)??F(i),windowDays:u,sessionCount:m.sessionFileCount,slashCommands:h,mcpServers:p,sessionDescriptors:m.sessionDescriptors},null,2),sessionCount:m.sessionFileCount,slashCommandCount:m.slashCommandCounts.size,mcpServerCount:m.mcpServerCounts.size}}var K=`# Welcome to [Team Name]

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
workflow" narrative. -->`,z=`You are helping a power user generate an onboarding guide for teammates who are new to Claude Code. The guide will live in the team's onboarding docs and can be pasted into Claude for an interactive walkthrough.

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

   Apply any edits they come back with to the file.`,X=`

**Sharing** \u2014 call the ${ize} tool twice:

1. **Right after rendering the draft code block** (still in step 5, before the Review questions). Call with \`mode='check'\` \u2014 this uploads the draft to an existing guide (or creates a new one). Either way you get a \`share_url\` and \`short_code\`. Instead of the \`---\` / \`**Review**\` header from step 5, bridge directly from the link into the numbered questions (no horizontal rule):

   Here's a draft \u2014 a few quick questions to finish it up:

   <share URL>

   Then ask the three numbered questions from step 5 as normal. Save the \`short_code\` from the tool result \u2014 you'll need it in step 2.

2. **After the user answers the Review questions** and you've updated ONBOARDING.md, call it again with \`mode='update'\` and the \`short_code\` from step 1 to refresh the same link. Replace step 5's "drop it in your team docs" close with:

   Here's your onboarding guide: <updated URL>

   Send this to teammates and they'll get a guided walkthrough when they open it in Claude Code.

If the tool returns 'unavailable' at any point, skip that call and use the manual close from step 5 instead.`,J=["Edit(ONBOARDING.md)","Bash(ls *)",ize],V={type:"prompt",name:"team-onboarding",description:"Help teammates ramp on Claude Code with a guide from your usage",allowedTools:J,contentLength:0,isEnabled:()=>Mt("allow_team_onboarding"),policyGate:{policy:"allow_team_onboarding",featureLabel:"Team onboarding"},isHidden:!1,progressMessage:"scanning usage data",effort:"low",requires:{workspace:!0},userFacingName(){return"team-onboarding"},source:"builtin",disableModelInvocation:!0,async getPromptForCommand(u,i){let t=x("tengu_flint_harbor_prompt",{}),m=typeof t?.prompt==="string"?t.prompt:z,h=typeof t?.guideTemplate==="string"?t.guideTemplate:K,d=typeof t?.windowDays==="number"?Math.min(Math.max(Math.floor(t.windowDays),1),365):j;s("tengu_team_onboarding_invoked",{window_days:d}),await Ae((o)=>({...o,teamOnboardingLastUsedAt:Date.now()}),i.storageV5);let{usageData:p,sessionCount:a,slashCommandCount:l,mcpServerCount:r}=await H(d),e=m.replaceAll("{{WINDOW_DAYS}}",String(d)).replaceAll("{{GUIDE_TEMPLATE}}",h).replaceAll("{{USAGE_DATA}}",p)+(The()?X:"");return s("tengu_team_onboarding_generated",{session_count:a,slash_command_count:l,mcp_server_count:r,window_days:d}),[{type:"text",text:e}]}},Ce=V;export{Ce as default};
