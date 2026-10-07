// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{z,K,Ee}from"./chunk-8mvda08c.js";import{_,d}from"./chunk-hdvxmrfb.js";import{q,l,mF,Lt}from"./chunk-fqsygynq.js";import{I}from"./chunk-fqzh3zpr.js";import{i}from"./chunk-qbf9wv32.js";import{y,m}from"./chunk-e3gw32ew.js";import{nr}from"./chunk-wq75sevg.js";import{t}from"./chunk-f8eqwxpt.js";import{Z1}from"./chunk-mcq8tx7b.js";import{dr}from"./chunk-ev2h864q.js";import{ct}from"./chunk-861a7whf.js";import{Bi,k,mu,fi}from"./chunk-s46qgfx7.js";import{bt,rn}from"./chunk-ma17m27h.js";import{Pkn,l4,TB}from"./chunk-j8zs3xhh.js";import{pu,dD,xHe}from"./chunk-5kpah0ej.js";import{_y}from"./chunk-ax2crbgp.js";import{du,yy}from"./chunk-805xjggr.js";import{p3,vk,Ogt,Re,jt,d_n}from"./chunk-y0b3kvx1.js";import{gnn,MUn,_lt,DUn}from"./chunk-v9e7131w.js";import{S4e,kko,jlt,Ako}from"./chunk-nzjhwy3y.js";import{mE,Rm}from"./chunk-xz126qex.js";import{B_,rm,zc}from"./chunk-7zqvf92a.js";import{B}from"./chunk-n6jrzhpg.js";function Z(){return k("tengu_onyx_plover",null)}function yOt(){let e=Z();return e?.enabled===!0||e?.available===!0}function r4e(){if(!yOt())return!1;let e=ct().autoDreamEnabled;if(e!==void 0)return e;return Z()?.enabled===!0}import{readdir as he}from"fs/promises";import{basename as ae,dirname as V,join as ge}from"path";class Q{runner=null}var H=new z(()=>new Q);var ce="## Team memory (`team/` subdirectory)\n\nThe `team/` subdirectory holds memories shared across everyone working in this repo. Other teammates' Claude sessions write here too \u2014 treat it differently from your personal files:\n\n- **Phase 1:** `ls team/` and skim it alongside your personal files. A teammate may have already captured something you'd otherwise duplicate.\n- **Phase 3:** Merge near-duplicates *within* `team/` the same way you would personal memories. If a personal memory restates a team memory, delete the personal one.\n- **Phase 4 \u2014 be conservative pruning `team/`:**\n  - DO delete or fix a team memory that is clearly contradicted by the current code, or that a newer team memory marks as superseded.\n  - DO NOT delete a team memory just because you don't recognize it or it isn't relevant to *your* recent sessions \u2014 a teammate may rely on it.\n  - When unsure, leave it. A stale team memory costs little; deleting a teammate's load-bearing note costs a lot.\n\nDo not promote personal memories into `team/` during a dream \u2014 that's a deliberate choice the user makes via `/remember`, not something to do reflexively.",pe=`### Reconcile memories against CLAUDE.md

Project CLAUDE.md instructions are loaded in your system prompt. For each memory that captures feedback or project conventions (the \`feedback\`/\`project\` types, where tagged), check whether it contradicts a CLAUDE.md instruction on the same topic:

- **Memory is stale** \u2014 CLAUDE.md and the memory describe different procedures for the same task: CLAUDE.md is the maintained, checked-in source. Delete the memory, or rewrite it to agree if it carries context worth keeping (the *why* is still useful but the *how* is wrong).
- **CLAUDE.md may be stale** \u2014 the memory is clearly dated after CLAUDE.md and explicitly corrects it: do NOT edit CLAUDE.md during a dream. Annotate the memory with "contradicts CLAUDE.md \u2014 verify which is current" and list it in your summary so the user can update CLAUDE.md.
- **Not a conflict** \u2014 the memory adds detail CLAUDE.md doesn't cover, or narrows a CLAUDE.md rule with a stated reason. Leave it.

A \`feedback\` memory's "Why: the user corrected me" framing is not evidence it's newer than CLAUDE.md \u2014 CLAUDE.md may have been updated since.`;function ee(e,r,o,c=!1,a=!1,s=!1){return`# Dream: Memory Consolidation

You are performing a dream \u2014 a reflective pass over your memory files. Synthesize what you've learned recently into durable, well-organized memories so that future sessions can orient quickly.

Memory directory: \`${e}\`
${xHe}

Session transcripts: \`${r}\` (large JSONL files \u2014 grep narrowly, don't read whole files)
${c?`
${ce}
`:""}
---

## Phase 1 \u2014 Orient

- \`ls\` the memory directory to see what already exists
- Read \`${pu}\` to understand the current index
- Skim existing topic files so you improve them rather than creating duplicates
- \`ls -R logs/\` \u2014 recent activity logs (one file per session under \`YYYY/MM/DD/\`). If a \`sessions/\` subdirectory also exists, review recent entries there too

## Phase 2 \u2014 Gather recent signal

Look for new information worth persisting. Sources in rough priority order:

1. **Session logs** (\`logs/YYYY/MM/DD/<id>-<title>.md\`) \u2014 the append-only activity stream, one file per session. Read the most recent 1\u20133 days of sessions (the filename title tells you what each was about); each line is prefix-coded (\`>\` user, \`<\` assistant, \`.\` tool call)
2. **Existing memories that drifted** \u2014 facts that contradict something you see in the codebase now
3. **Transcript search** \u2014 if you need specific context (e.g., "what was the error message from yesterday's build failure?"), grep the JSONL transcripts for narrow terms:
   \`grep -rn "<narrow term>" ${r}/ --include="*.jsonl" | tail -50\`

Don't exhaustively read transcripts. Look only for things you already suspect matter.

## Phase 3 \u2014 Consolidate

For each thing worth remembering, write or update a memory file at the top level of the memory directory. Use the memory file format and type conventions from your system prompt's auto-memory section \u2014 it's the source of truth for what to save, how to structure it, and what NOT to save.${a?` The ${B_} / ${rm} / ${zc} tools are unavailable in a dream: consolidate only this memory directory, and leave anything that section marks as shared with the project where it is \u2014 never copy it into these files.`:""}${""}

Focus on:
- Merging new signal into existing topic files rather than creating near-duplicates
- Converting relative dates ("yesterday", "last week") to absolute dates so they remain interpretable after time passes
- Deleting contradicted facts \u2014 if today's investigation disproves an old memory, fix it at the source

## Phase 4 \u2014 Prune and index

Update \`${pu}\` so it stays under ${dD} lines AND under ~25KB. It's an **index**, not a dump \u2014 each entry should be one line under ~150 characters: \`- [Title](file.md) \u2014 one-line hook\`. Never write memory content directly into it.

- Remove pointers to memories that are now stale, wrong, or superseded
- Demote verbose entries: if an index line is over ~200 chars, it's carrying content that belongs in the topic file \u2014 shorten the line, move the detail
- Add pointers to newly important memories
- Resolve contradictions \u2014 if two files disagree, fix the wrong one

${pe}

---

Return a brief summary of what you consolidated, updated, or pruned. If nothing changed (memories are already tight), say so.${o?`

## Additional context

${o}`:""}`}var fe=30;function Y(e){return typeof e==="object"&&e!==null&&"type"in e&&e.type==="dream"}function te(e,r){let o=mE("dream"),c={...Rm(o,"dream","dreaming"),type:"dream",status:"running",skipTranscript:!0,phase:"starting",sessionsReviewing:r.sessionsReviewing,filesTouched:[],turns:[],abortController:r.abortController,priorMtime:r.priorMtime,...r.storageV5!==void 0&&{storageV5:r.storageV5}};return e.register(c),o}function re(e,r,o,c){c.update(e,(a)=>{let s=new Set(a.filesTouched),u=o.filter((n)=>!s.has(n)&&s.add(n));if(r.text===""&&r.toolUseCount===0&&u.length===0)return a;return{...a,phase:u.length>0?"updating":a.phase,filesTouched:u.length>0?[...a.filesTouched,...u]:a.filesTouched,turns:a.turns.slice(-(fe-1)).concat(r)}})}function oe(e,r){r.update(e,(o)=>({...o,status:"completed",endTime:Date.now(),notified:!0,abortController:void 0})),y("task_dream"),Bi(e,"completed",{skipTranscript:!0,ambient:!0})}function se(e,r){r.update(e,(o)=>({...o,status:"failed",endTime:Date.now(),notified:!0,abortController:void 0})),m("task_dream","task_dream_failed"),Bi(e,"failed",{skipTranscript:!0,ambient:!0})}var b=null,ye=600000,_e=new RegExp(`^\\s*(?:${MUn})\\b`,"i"),ne={minHours:24,minSessions:5};function we(){let e=k("tengu_onyx_plover",null);return{minHours:typeof e?.minHours==="number"&&Number.isFinite(e.minHours)&&e.minHours>0?e.minHours:ne.minHours,minSessions:typeof e?.minSessions==="number"&&Number.isFinite(e.minSessions)&&e.minSessions>0?e.minSessions:ne.minSessions}}function ke(){if(dr()!==null)return!1;if(Z1())return!1;if(!mu())return!1;if(l4())return!1;return r4e()}function be(){return!1}function PEo(e){let r=0,o=!1,c=new Set;H.of(e).runner=async function(s,u){let n=we(),p=be();if(!p&&!ke())return;let A;try{A=await S4e(void 0,s.toolUseContext.storageV5)}catch(g){t(`[autoDream] readLastConsolidatedAt failed: ${l(g)}`);return}let P=(Date.now()-A)/3600000;if(!p&&P<n.minHours)return;let W=Date.now()-r;if(!p&&W<ye){t(`[autoDream] scan throttle \u2014 time-gate passed but last scan was ${Math.round(W/1000)}s ago`);return}r=Date.now();let f;try{f=await Ako(A,s.toolUseContext.storageV5)}catch(g){t(`[autoDream] listSessionsTouchedSince failed: ${l(g)}`);return}let ie=K();if(f=f.filter((g)=>g!==ie),!p&&f.length<n.minSessions){t(`[autoDream] skip \u2014 ${f.length} sessions since last consolidation, need ${n.minSessions}`),i("tengu_auto_dream_skipped",{reason:_("sessions"),session_count:f.length,min_required:n.minSessions});return}let E;if(p)E=A;else{try{E=await kko(s.toolUseContext.storageV5)}catch(g){t(`[autoDream] lock acquire failed: ${l(g)}`);return}if(E===null){i("tengu_auto_dream_skipped",{reason:_("lock")});return}}let S=fi(),M=void 0,h=M==="unplaced"||M==="capped"?void 0:M;if(h==="newer"||h!==void 0&&"unreadable"in h){if(!p)await jlt(E,s.toolUseContext.storageV5);if(h!=="newer"){if(t(`[autoDream] skipped: the memory items could not be read (cause: ${h.unreadable}); the warning above says why and what resumes consolidation`),i("tengu_auto_dream_skipped",{reason:_("items_unreadable")}),b!==null&&u!==void 0&&!c.has(h.unreadable))c.add(h.unreadable),u?.(jt(await b.unreadableItemsNotice(h.unreadable,S),"warning"));return}if(t("[autoDream] skip \u2014 newer item record"),i("tengu_auto_dream_skipped",{reason:_("record_newer")}),b!==null&&u!==void 0&&!o)o=!0,u?.(jt(b.NEWER_RECORD_NOTICE,"warning"));return}let O=TB();t(`[autoDream] firing \u2014 ${P.toFixed(1)}h since last, ${f.length} sessions to review`),i("tengu_auto_dream_fired",{hours_since:Math.round(P),sessions_since:f.length,team_memory_enabled:O});let{taskRegistry:x}=s.toolUseContext,C=new AbortController,L=te(x,{sessionsReviewing:f.length,priorMtime:E,abortController:C,storageV5:s.toolUseContext.storageV5}),R="fork";try{let g=yy(Ee()),G=await Te(S,s.toolUseContext.storageV5),me=`

**Tool constraints for this run:** Shell access is restricted to read-only commands (\`ls\`, \`find\`, \`grep\`, \`cat\`, \`stat\`, \`wc\`, \`head\`, \`tail\`, and similar) plus deleting \`.md\` files inside the memory directory (outside protected subdirectories like \`.git\` or \`agents\`; \`rm\` takes no flags except \`-f\`). Anything else that writes, redirects to a file, or modifies state will be denied. Plan your exploration with this in mind.

Sessions since last consolidation (${f.length}):
${f.map((w)=>`- ${w}`).join(`
`)}`,ve=!1,le=ee(S,g,me,O,Pkn(),!1),de=Se(L,x,S),N=new Map,F=new Set,X=!1,J=!1,j=!1,v;try{v=await vk({promptMessages:[Re({content:le})],cacheSafeParams:p3(s),canUseTool:DUn(S,h!==void 0?b?.keptItemsOf(h):void 0,{fork:"dream",onWriteAllowed:(w,U)=>N.set(U,w)}),querySource:"auto_dream",forkLabel:"auto_dream",skipTranscript:!0,overrides:{abortController:C},onMessage:(w)=>{if(de(w),De(w,F),w.type==="assistant")X=w.isApiErrorMessage===!0},skipCacheWrite:Ogt()}),J=!0,j=!C.signal.aborted&&!X}finally{let w=new Set([...N].filter(([D])=>!j||!F.has(D)).map(([,D])=>D)),U=new Set([...N].filter(([D])=>j&&F.has(D)).map(([,D])=>D));if(b!==null&&M==="capped")await b.deferCappedRunWrites({memoryDir:S,dreamWrote:w,mayHaveWritten:U});if(b!==null&&h!==void 0){let D=await b.settleDreamItems({memoryDir:S,before:h,dreamWrote:w,mayHaveWritten:U});if((D.skipped||D.failed)&&J&&!C.signal.aborted&&!p&&await b.claimLockGiveBack(S))await jlt(E,s.toolUseContext.storageV5)}}R="completion",oe(L,x);let T=s.toolUseContext.taskRegistry.get(L),ue=Y(T)?T.filesTouched.length:0;if(Y(T)&&T.filesTouched.length>0)u?.({...d_n(T.filesTouched),verb:"Improved"}),await gnn(s.toolUseContext,{source:"dream",summary:`consolidated ${T.filesTouched.length} ${I(T.filesTouched.length,"memory file")}`,paths:T.filesTouched});t(`[autoDream] completed \u2014 cache: read=${v.totalUsage.cache_read_input_tokens} created=${v.totalUsage.cache_creation_input_tokens}`),i("tengu_auto_dream_completed",{cache_read:v.totalUsage.cache_read_input_tokens,cache_created:v.totalUsage.cache_creation_input_tokens,output:v.totalUsage.output_tokens,sessions_reviewed:f.length,daily_logs_found:G,files_touched_count:ue,team_memory_enabled:O,account_memory_line_rendered:!1})}catch(g){if(C.signal.aborted){t("[autoDream] aborted by user");return}if(t(`[autoDream] ${R} failed: ${l(g)}`),i("tengu_auto_dream_failed",{phase:d(R),error_class:mF(q(g))}),R==="fork")se(L,x),await jlt(E,s.toolUseContext.storageV5)}}}function De(e,r){if(e.type!=="user"||e.toolDenialKind!==void 0||typeof e.message.content==="string")return;for(let o of e.message.content)if(o.type==="tool_result"&&o.is_error===!0)r.add(o.tool_use_id)}function Se(e,r,o){return(c)=>{if(c.type!=="assistant")return;let a="",s=0,u=[];for(let n of c.message.content)if(n.type==="text")a+=n.text;else if(n.type==="tool_use"){if(s++,n.name===bt||n.name===rn){let p=n.input;if(typeof p.file_path==="string")u.push(p.file_path)}else if(_y.includes(n.name)){let p=n.input;if(typeof p.command==="string"&&_e.test(p.command))for(let A of p.command.matchAll(/"[^"]*\.md"|'[^']*\.md'|(?:\/|[A-Za-z]:[\\/])\S*\.md\b/g))u.push(A[0].replace(/^["']|["']$/g,""))}}re(e,{text:a.trim(),toolUseCount:s},u.filter((n)=>_lt(n,o)),r)}}async function Te(e,r){if(r!==void 0){let o=Ae(e);if(o!==void 0){let c=0,a;do{let s=await r.listRecursive(o,a!==void 0?{cursor:a}:void 0);if(!s.ok)return t(`[autoDream] countDailyLogs: ${s.error.code}`),0;c+=B(s.value.items,(u)=>u.key.namespace==="memory"&&(u.key.relPath.at(-1)??"").endsWith(".md")),a=s.value.cursor}while(a);return c}}try{let o=await he(ge(e,"logs"),{recursive:!0});return B(o,(c)=>c.endsWith(".md"))}catch(o){if(!Lt(o))t(`[autoDream] countDailyLogs: ${l(o)}`);return 0}}function Ae(e){let r=ae(V(e));if(ae(e)!=="memory"||V(V(e))!==du()||!nr(r))return;return{namespace:"memory",projectKey:r,relPath:["logs"]}}async function IEo(e,r){await H.of(e.toolUseContext.session.host).runner?.(e,r)}
export{yOt,r4e,PEo,IEo};
