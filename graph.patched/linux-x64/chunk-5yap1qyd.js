// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Se}from"./chunk-2vv5hpw3.js";import"./chunk-gqqx2ybk.js";import{x,_e}from"./chunk-ns0ekkj0.js";import"./chunk-xj8gnzar.js";import"./chunk-s0y4aasp.js";import"./chunk-k69qdkv1.js";import"./chunk-g0kfvhx3.js";import"./chunk-kvgzj9kk.js";import"./chunk-hjxpwbhy.js";import"./chunk-gt4btdxr.js";import{X,At}from"./chunk-7h2h1m4y.js";import{v,V,n}from"./chunk-akz0cj0f.js";import"./chunk-qkpfba5t.js";import"./chunk-m09j9ze8.js";import"./chunk-2h7wbm8s.js";import"./chunk-6ce4s97h.js";import"./chunk-s2t7yx8x.js";import{s}from"./chunk-cvykgfry.js";import"./chunk-v1ap59a1.js";import"./chunk-j0kxfsn8.js";import"./chunk-b16q8tvv.js";import"./chunk-wp51qqtd.js";import"./chunk-z8bgyj99.js";import"./chunk-2t5hwcdv.js";import{We}from"./chunk-7jw96n8z.js";import{nG}from"./chunk-fa374z64.js";import"./chunk-cgwm6n4d.js";import{yu}from"./chunk-6ypvgjr3.js";import"./chunk-ey3r955r.js";import"./chunk-4a808ek9.js";import"./chunk-apqzzgp2.js";import"./chunk-fz00m7zs.js";import"./chunk-je342w1n.js";import"./chunk-gxpna0zj.js";import"./chunk-vryz951p.js";import"./chunk-a891q37t.js";import"./chunk-cdpc3se3.js";import"./chunk-n6st122x.js";import"./chunk-z3w4y6ds.js";import"./chunk-bcez0qfh.js";import"./chunk-8v512hc9.js";import"./chunk-3fgza2mw.js";import"./chunk-yyzqa5fj.js";import"./chunk-jrqq3240.js";import"./chunk-gbhg5hb4.js";import"./chunk-vaxm4qh6.js";import"./chunk-zx6a3ytk.js";import"./chunk-hn2qdxkx.js";import"./chunk-09523qb1.js";import"./chunk-hk0e76vg.js";import"./chunk-4aysr9ma.js";import"./chunk-keye04cq.js";import"./chunk-3py4444c.js";import"./chunk-dakyjptz.js";import"./chunk-3k7ywj35.js";import"./chunk-ryvgd9z0.js";import"./chunk-8ba2x98b.js";import"./chunk-qbwsw6nn.js";import"./chunk-c555rnz7.js";import"./chunk-mrmpqhhr.js";import"./chunk-v975cyxw.js";import"./chunk-2966xjk4.js";import"./chunk-p23he0jn.js";import"./chunk-2dfkwr2q.js";import"./chunk-qw0q1g4b.js";import"./chunk-6yeqjyb9.js";import"./chunk-sd094199.js";import"./chunk-tfd4rw1n.js";import"./chunk-q7r209hm.js";import"./chunk-mp7ft3kc.js";import"./chunk-9hz48emz.js";import"./chunk-swj5sfs1.js";import"./chunk-pgh575qg.js";import"./chunk-yvh97n7n.js";import"./chunk-qc6xt7s1.js";import"./chunk-pws3zj07.js";import"./chunk-5j82knza.js";import"./chunk-w0pbjm26.js";import"./chunk-hdxkjmp1.js";import"./chunk-5pf2r3ta.js";import"./chunk-aw9sr560.js";import"./chunk-0nb3y211.js";import"./chunk-pyd16tkx.js";import"./chunk-dfs7pzac.js";import"./chunk-xw94cfq3.js";import{xt}from"./chunk-k7k51kt3.js";import{kUe}from"./chunk-fs04y13y.js";import{$fe}from"./chunk-mywxx5jv.js";import"./chunk-mj52rk1p.js";import"./chunk-c8dx8wrx.js";import"./chunk-zpq01mh4.js";import"./chunk-5ty1498y.js";import"./chunk-zs5s22a5.js";import"./chunk-cj0zmg6k.js";import"./chunk-qfwvs04s.js";import"./chunk-vt29yvxx.js";import"./chunk-f58mzqmc.js";import"./chunk-9q51f9rr.js";import{readFile as L}from"fs/promises";import{basename as F,join as j}from"path";import{readdir as y,readFile as C,stat as b}from"fs/promises";import{extname as _,join as E}from"path";var S=52428800,T=200,g=60,D=/<command-name>\/([\w:-]+)<\/command-name>/g,A=/"name":"mcp__([^"]+?)__([^"]+)"/g,f='"content":"<command-name>/',R='"content":"<command-message>',k='"type":"tool_use"',N='"type":"custom-title"',O='"type":"pr-link"',M='"role":"user"',P=/"customTitle":"([^"]+)"/,I=/"prNumber":(\d+)/,U=/"role":"user"[^}]*"content":"([^"]+)"/;async function w(u,i){let t={slashCommandCounts:new Map,mcpServerCounts:new Map,sessionDescriptors:[],sessionFileCount:0},m=Date.now()-i*24*60*60*1000,h;try{h=await y(u)}catch(a){if(At(a))return t;throw a}let d=h.filter((a)=>_(a)===".jsonl"),p=(await Promise.all(d.map(async(a)=>{let l=E(u,a);try{let r=await b(l);if(!r.isFile()||r.mtimeMs<m||r.size>S)return null;return l}catch(r){if(At(r))return null;throw r}}))).filter((a)=>a!==null);for(let a of p){let l;try{l=await C(a,"utf-8")}catch(e){if(At(e))continue;throw e}t.sessionFileCount++;let r={prNumbers:[]};for(let e of l.split(`
`)){if(e.length<10)continue;if(e.includes(f)||e.includes(R))for(let o of e.matchAll(D)){let c=o[1];t.slashCommandCounts.set(c,(t.slashCommandCounts.get(c)??0)+1)}if(e.includes(k)&&e.includes('"name":"mcp__'))for(let o of e.matchAll(A)){let c=o[1];t.mcpServerCounts.set(c,(t.mcpServerCounts.get(c)??0)+1)}if(e.includes(N)){let o=P.exec(e);if(o)r.title=o[1]}if(e.includes(O)){let o=I.exec(e);if(o){let c=Number(o[1]);if(!r.prNumbers.includes(c))r.prNumbers.push(c)}}if(!r.firstMessage&&e.includes(M)&&!e.includes(f)&&!e.includes('"content":[')){let o=U.exec(e);if(o){let c=o[1].replace(/\\n/g," ").replace(/\\"/g,'"');if(c.length>3&&!c.startsWith("<"))r.firstMessage=c.slice(0,T)}}}if(r.title||r.prNumbers.length>0||r.firstMessage)t.sessionDescriptors.push(r)}if(t.sessionDescriptors.length>g)t.sessionDescriptors.sort((a,l)=>{let r=(a.title?2:0)+(a.prNumbers.length>0?1:0);return(l.title?2:0)+(l.prNumbers.length>0?1:0)-r}),t.sessionDescriptors=t.sessionDescriptors.slice(0,g);return t}var G=30;function W(u){try{return new URL(u).origin}catch{return}}async function B(u){try{let i=await L(j(u,".mcp.json"),"utf8"),t=V(i);if(t&&typeof t==="object"&&"mcpServers"in t&&t.mcpServers&&typeof t.mcpServers==="object")return t.mcpServers}catch(i){if(!X(i))n(`team-onboarding: failed to read .mcp.json: ${i instanceof Error?i.message:String(i)}`,{level:"error"})}return{}}async function q(u){let i=Se(),t=yu(i),m=await w(t,u),h=[...m.slashCommandCounts.entries()].sort((e,o)=>o[1]-e[1]).map(([e,o])=>({name:`/${e}`,count:o})),d=await B(i),p=[...m.mcpServerCounts.entries()].sort((e,o)=>o[1]-e[1]).map(([e,o])=>{let c=d[e];return{name:e,callCount:o,urlOrigin:typeof c?.url==="string"?W(c.url):void 0}}),a=(await We("git",["config","user.name"],{cwd:i})).stdout.trim(),l=(await We("git",["remote","get-url","origin"],{cwd:i})).stdout.trim();return{usageData:v({generatedBy:a||void 0,currentRepo:nG(l)??F(i),windowDays:u,sessionCount:m.sessionFileCount,slashCommands:h,mcpServers:p,sessionDescriptors:m.sessionDescriptors},null,2),sessionCount:m.sessionFileCount,slashCommandCount:m.slashCommandCounts.size,mcpServerCount:m.mcpServerCounts.size}}var Y=`# Welcome to [Team Name]

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

   Apply any edits they come back with to the file.`,K=`

**Sharing** \u2014 call the ${kUe} tool twice:

1. **Right after rendering the draft code block** (still in step 5, before the Review questions). Call with \`mode='check'\` \u2014 this uploads the draft to an existing guide (or creates a new one). Either way you get a \`share_url\` and \`short_code\`. Instead of the \`---\` / \`**Review**\` header from step 5, bridge directly from the link into the numbered questions (no horizontal rule):

   Here's a draft \u2014 a few quick questions to finish it up:

   <share URL>

   Then ask the three numbered questions from step 5 as normal. Save the \`short_code\` from the tool result \u2014 you'll need it in step 2.

2. **After the user answers the Review questions** and you've updated ONBOARDING.md, call it again with \`mode='update'\` and the \`short_code\` from step 1 to refresh the same link. Replace step 5's "drop it in your team docs" close with:

   Here's your onboarding guide: <updated URL>

   Send this to teammates and they'll get a guided walkthrough when they open it in Claude Code.

If the tool returns 'unavailable' at any point, skip that call and use the manual close from step 5 instead.`,z=["Edit(ONBOARDING.md)","Bash(ls *)",kUe],J={type:"prompt",name:"team-onboarding",description:"Help teammates ramp on Claude Code with a guide from your usage",allowedTools:z,contentLength:0,isEnabled:()=>xt("allow_team_onboarding"),isHidden:!1,progressMessage:"scanning usage data",effort:"low",requires:{workspace:!0},userFacingName(){return"team-onboarding"},source:"builtin",disableModelInvocation:!0,async getPromptForCommand(u,i){let t=x("tengu_flint_harbor_prompt",{}),m=typeof t?.prompt==="string"?t.prompt:H,h=typeof t?.guideTemplate==="string"?t.guideTemplate:Y,d=typeof t?.windowDays==="number"?Math.min(Math.max(Math.floor(t.windowDays),1),365):G;s("tengu_team_onboarding_invoked",{window_days:d}),await _e((o)=>({...o,teamOnboardingLastUsedAt:Date.now()}),i.storageV5);let{usageData:p,sessionCount:a,slashCommandCount:l,mcpServerCount:r}=await q(d),e=m.replaceAll("{{WINDOW_DAYS}}",String(d)).replaceAll("{{GUIDE_TEMPLATE}}",h).replaceAll("{{USAGE_DATA}}",p)+($fe()?K:"");return s("tengu_team_onboarding_generated",{session_count:a,slash_command_count:l,mcp_server_count:r,window_days:d}),[{type:"text",text:e}]}},Ce=J;export{Ce as default};
