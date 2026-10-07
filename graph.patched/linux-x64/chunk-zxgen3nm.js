// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{G,K,ve}from"./chunk-aywwjcwq.js";import{_,d}from"./chunk-yffha6me.js";import{V,l,s$,Lt}from"./chunk-fdatg9ax.js";import{I}from"./chunk-z6am4wsr.js";import{i}from"./chunk-s90w5q15.js";import{y,m}from"./chunk-tzahwj8w.js";import{nr}from"./chunk-7n5tp35k.js";import{t}from"./chunk-gvn18sr5.js";import{WU}from"./chunk-zyrx67ap.js";import{cr}from"./chunk-v6ek3j23.js";import{lt}from"./chunk-2c0pkjse.js";import{Bi,T,fu,fi}from"./chunk-m0sj7y8g.js";import{St,rn}from"./chunk-0wqb5n04.js";import{pTn,e6,m1}from"./chunk-vy7fk9eg.js";import{uu,i0,wHe}from"./chunk-9dcdw6tv.js";import{yy}from"./chunk-1xqd80pz.js";import{cu,hy}from"./chunk-83whr1kq.js";import{o3,ST,wgt,Re,jt,Gyn}from"./chunk-9wqh5j7s.js";import{Ztn,yBn,flt,_Bn}from"./chunk-xmqmafm7.js";import{f6e,zko,Dlt,Gko}from"./chunk-38v2e78g.js";import{pv,Rm}from"./chunk-88wmkbh6.js";import{U_,rm,zc}from"./chunk-hj55xvj9.js";import{U}from"./chunk-6xtc8snm.js";function Z(){return T("tengu_onyx_plover",null)}function tOt(){let e=Z();return e?.enabled===!0||e?.available===!0}function Y3e(){if(!tOt())return!1;let e=lt().autoDreamEnabled;if(e!==void 0)return e;return Z()?.enabled===!0}import{readdir as he}from"fs/promises";import{basename as ae,dirname as B,join as ge}from"path";class Q{runner=null}var Y=new G(()=>new Q);var ce="## Team memory (`team/` subdirectory)\n\nThe `team/` subdirectory holds memories shared across everyone working in this repo. Other teammates' Claude sessions write here too \u2014 treat it differently from your personal files:\n\n- **Phase 1:** `ls team/` and skim it alongside your personal files. A teammate may have already captured something you'd otherwise duplicate.\n- **Phase 3:** Merge near-duplicates *within* `team/` the same way you would personal memories. If a personal memory restates a team memory, delete the personal one.\n- **Phase 4 \u2014 be conservative pruning `team/`:**\n  - DO delete or fix a team memory that is clearly contradicted by the current code, or that a newer team memory marks as superseded.\n  - DO NOT delete a team memory just because you don't recognize it or it isn't relevant to *your* recent sessions \u2014 a teammate may rely on it.\n  - When unsure, leave it. A stale team memory costs little; deleting a teammate's load-bearing note costs a lot.\n\nDo not promote personal memories into `team/` during a dream \u2014 that's a deliberate choice the user makes via `/remember`, not something to do reflexively.",pe=`### Reconcile memories against CLAUDE.md

Project CLAUDE.md instructions are loaded in your system prompt. For each memory that captures feedback or project conventions (the \`feedback\`/\`project\` types, where tagged), check whether it contradicts a CLAUDE.md instruction on the same topic:

- **Memory is stale** \u2014 CLAUDE.md and the memory describe different procedures for the same task: CLAUDE.md is the maintained, checked-in source. Delete the memory, or rewrite it to agree if it carries context worth keeping (the *why* is still useful but the *how* is wrong).
- **CLAUDE.md may be stale** \u2014 the memory is clearly dated after CLAUDE.md and explicitly corrects it: do NOT edit CLAUDE.md during a dream. Annotate the memory with "contradicts CLAUDE.md \u2014 verify which is current" and list it in your summary so the user can update CLAUDE.md.
- **Not a conflict** \u2014 the memory adds detail CLAUDE.md doesn't cover, or narrows a CLAUDE.md rule with a stated reason. Leave it.

A \`feedback\` memory's "Why: the user corrected me" framing is not evidence it's newer than CLAUDE.md \u2014 CLAUDE.md may have been updated since.`;function ee(e,r,o,c=!1,a=!1,s=!1){return`# Dream: Memory Consolidation

You are performing a dream \u2014 a reflective pass over your memory files. Synthesize what you've learned recently into durable, well-organized memories so that future sessions can orient quickly.

Memory directory: \`${e}\`
${wHe}

Session transcripts: \`${r}\` (large JSONL files \u2014 grep narrowly, don't read whole files)
${c?`
${ce}
`:""}
---

## Phase 1 \u2014 Orient

- \`ls\` the memory directory to see what already exists
- Read \`${uu}\` to understand the current index
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

For each thing worth remembering, write or update a memory file at the top level of the memory directory. Use the memory file format and type conventions from your system prompt's auto-memory section \u2014 it's the source of truth for what to save, how to structure it, and what NOT to save.${a?` The ${U_} / ${rm} / ${zc} tools are unavailable in a dream: consolidate only this memory directory, and leave anything that section marks as shared with the project where it is \u2014 never copy it into these files.`:""}${""}

Focus on:
- Merging new signal into existing topic files rather than creating near-duplicates
- Converting relative dates ("yesterday", "last week") to absolute dates so they remain interpretable after time passes
- Deleting contradicted facts \u2014 if today's investigation disproves an old memory, fix it at the source

## Phase 4 \u2014 Prune and index

Update \`${uu}\` so it stays under ${i0} lines AND under ~25KB. It's an **index**, not a dump \u2014 each entry should be one line under ~150 characters: \`- [Title](file.md) \u2014 one-line hook\`. Never write memory content directly into it.

- Remove pointers to memories that are now stale, wrong, or superseded
- Demote verbose entries: if an index line is over ~200 chars, it's carrying content that belongs in the topic file \u2014 shorten the line, move the detail
- Add pointers to newly important memories
- Resolve contradictions \u2014 if two files disagree, fix the wrong one

${pe}

---

Return a brief summary of what you consolidated, updated, or pruned. If nothing changed (memories are already tight), say so.${o?`

## Additional context

${o}`:""}`}var fe=30;function W(e){return typeof e==="object"&&e!==null&&"type"in e&&e.type==="dream"}function te(e,r){let o=pv("dream"),c={...Rm(o,"dream","dreaming"),type:"dream",status:"running",skipTranscript:!0,phase:"starting",sessionsReviewing:r.sessionsReviewing,filesTouched:[],turns:[],abortController:r.abortController,priorMtime:r.priorMtime,...r.storageV5!==void 0&&{storageV5:r.storageV5}};return e.register(c),o}function re(e,r,o,c){c.update(e,(a)=>{let s=new Set(a.filesTouched),u=o.filter((n)=>!s.has(n)&&s.add(n));if(r.text===""&&r.toolUseCount===0&&u.length===0)return a;return{...a,phase:u.length>0?"updating":a.phase,filesTouched:u.length>0?[...a.filesTouched,...u]:a.filesTouched,turns:a.turns.slice(-(fe-1)).concat(r)}})}function oe(e,r){r.update(e,(o)=>({...o,status:"completed",endTime:Date.now(),notified:!0,abortController:void 0})),y("task_dream"),Bi(e,"completed",{skipTranscript:!0,ambient:!0})}function se(e,r){r.update(e,(o)=>({...o,status:"failed",endTime:Date.now(),notified:!0,abortController:void 0})),m("task_dream","task_dream_failed"),Bi(e,"failed",{skipTranscript:!0,ambient:!0})}var k=null,ye=600000,_e=new RegExp(`^\\s*(?:${yBn})\\b`,"i"),ne={minHours:24,minSessions:5};function we(){let e=T("tengu_onyx_plover",null);return{minHours:typeof e?.minHours==="number"&&Number.isFinite(e.minHours)&&e.minHours>0?e.minHours:ne.minHours,minSessions:typeof e?.minSessions==="number"&&Number.isFinite(e.minSessions)&&e.minSessions>0?e.minSessions:ne.minSessions}}function ke(){if(cr()!==null)return!1;if(WU())return!1;if(!fu())return!1;if(e6())return!1;return Y3e()}function be(){return!1}function Hwo(e){let r=0,o=!1,c=new Set;Y.of(e).runner=async function(s,u){let n=we(),p=be();if(!p&&!ke())return;let A;try{A=await f6e(void 0,s.toolUseContext.storageV5)}catch(g){t(`[autoDream] readLastConsolidatedAt failed: ${l(g)}`);return}let O=(Date.now()-A)/3600000;if(!p&&O<n.minHours)return;let q=Date.now()-r;if(!p&&q<ye){t(`[autoDream] scan throttle \u2014 time-gate passed but last scan was ${Math.round(q/1000)}s ago`);return}r=Date.now();let f;try{f=await Gko(A,s.toolUseContext.storageV5)}catch(g){t(`[autoDream] listSessionsTouchedSince failed: ${l(g)}`);return}let ie=K();if(f=f.filter((g)=>g!==ie),!p&&f.length<n.minSessions){t(`[autoDream] skip \u2014 ${f.length} sessions since last consolidation, need ${n.minSessions}`),i("tengu_auto_dream_skipped",{reason:_("sessions"),session_count:f.length,min_required:n.minSessions});return}let E;if(p)E=A;else{try{E=await zko(s.toolUseContext.storageV5)}catch(g){t(`[autoDream] lock acquire failed: ${l(g)}`);return}if(E===null){i("tengu_auto_dream_skipped",{reason:_("lock")});return}}let D=fi(),M=void 0,h=M==="unplaced"||M==="capped"?void 0:M;if(h==="newer"||h!==void 0&&"unreadable"in h){if(!p)await Dlt(E,s.toolUseContext.storageV5);if(h!=="newer"){if(t(`[autoDream] skipped: the memory items could not be read (cause: ${h.unreadable}); the warning above says why and what resumes consolidation`),i("tengu_auto_dream_skipped",{reason:_("items_unreadable")}),k!==null&&u!==void 0&&!c.has(h.unreadable))c.add(h.unreadable),u?.(jt(await k.unreadableItemsNotice(h.unreadable,D),"warning"));return}if(t("[autoDream] skip \u2014 newer item record"),i("tengu_auto_dream_skipped",{reason:_("record_newer")}),k!==null&&u!==void 0&&!o)o=!0,u?.(jt(k.NEWER_RECORD_NOTICE,"warning"));return}let N=m1();t(`[autoDream] firing \u2014 ${O.toFixed(1)}h since last, ${f.length} sessions to review`),i("tengu_auto_dream_fired",{hours_since:Math.round(O),sessions_since:f.length,team_memory_enabled:N});let{taskRegistry:x}=s.toolUseContext,C=new AbortController,L=te(x,{sessionsReviewing:f.length,priorMtime:E,abortController:C,storageV5:s.toolUseContext.storageV5}),R="fork";try{let g=hy(ve()),z=await Te(D,s.toolUseContext.storageV5),me=`

**Tool constraints for this run:** Shell access is restricted to read-only commands (\`ls\`, \`find\`, \`grep\`, \`cat\`, \`stat\`, \`wc\`, \`head\`, \`tail\`, and similar) plus deleting \`.md\` files inside the memory directory (outside protected subdirectories like \`.git\` or \`agents\`; \`rm\` takes no flags except \`-f\`). Anything else that writes, redirects to a file, or modifies state will be denied. Plan your exploration with this in mind.

Sessions since last consolidation (${f.length}):
${f.map((w)=>`- ${w}`).join(`
`)}`,Ae=!1,le=ee(D,g,me,N,pTn(),!1),de=Se(L,x,D),F=new Map,j=new Set,X=!1,J=!1,H=!1,v;try{v=await ST({promptMessages:[Re({content:le})],cacheSafeParams:o3(s),canUseTool:_Bn(D,h!==void 0?k?.keptItemsOf(h):void 0,{fork:"dream",onWriteAllowed:(w,P)=>F.set(P,w)}),querySource:"auto_dream",forkLabel:"auto_dream",skipTranscript:!0,overrides:{abortController:C},onMessage:(w)=>{if(de(w),De(w,j),w.type==="assistant")X=w.isApiErrorMessage===!0},skipCacheWrite:wgt()}),J=!0,H=!C.signal.aborted&&!X}finally{let w=new Set([...F].filter(([b])=>!H||!j.has(b)).map(([,b])=>b)),P=new Set([...F].filter(([b])=>H&&j.has(b)).map(([,b])=>b));if(k!==null&&M==="capped")await k.deferCappedRunWrites({memoryDir:D,dreamWrote:w,mayHaveWritten:P});if(k!==null&&h!==void 0){let b=await k.settleDreamItems({memoryDir:D,before:h,dreamWrote:w,mayHaveWritten:P});if((b.skipped||b.failed)&&J&&!C.signal.aborted&&!p&&await k.claimLockGiveBack(D))await Dlt(E,s.toolUseContext.storageV5)}}R="completion",oe(L,x);let S=s.toolUseContext.taskRegistry.get(L),ue=W(S)?S.filesTouched.length:0;if(W(S)&&S.filesTouched.length>0)u?.({...Gyn(S.filesTouched),verb:"Improved"}),await Ztn(s.toolUseContext,{source:"dream",summary:`consolidated ${S.filesTouched.length} ${I(S.filesTouched.length,"memory file")}`,paths:S.filesTouched});t(`[autoDream] completed \u2014 cache: read=${v.totalUsage.cache_read_input_tokens} created=${v.totalUsage.cache_creation_input_tokens}`),i("tengu_auto_dream_completed",{cache_read:v.totalUsage.cache_read_input_tokens,cache_created:v.totalUsage.cache_creation_input_tokens,output:v.totalUsage.output_tokens,sessions_reviewed:f.length,daily_logs_found:z,files_touched_count:ue,team_memory_enabled:N,account_memory_line_rendered:!1})}catch(g){if(C.signal.aborted){t("[autoDream] aborted by user");return}if(t(`[autoDream] ${R} failed: ${l(g)}`),i("tengu_auto_dream_failed",{phase:d(R),error_class:s$(V(g))}),R==="fork")se(L,x),await Dlt(E,s.toolUseContext.storageV5)}}}function De(e,r){if(e.type!=="user"||e.toolDenialKind!==void 0||typeof e.message.content==="string")return;for(let o of e.message.content)if(o.type==="tool_result"&&o.is_error===!0)r.add(o.tool_use_id)}function Se(e,r,o){return(c)=>{if(c.type!=="assistant")return;let a="",s=0,u=[];for(let n of c.message.content)if(n.type==="text")a+=n.text;else if(n.type==="tool_use"){if(s++,n.name===St||n.name===rn){let p=n.input;if(typeof p.file_path==="string")u.push(p.file_path)}else if(yy.includes(n.name)){let p=n.input;if(typeof p.command==="string"&&_e.test(p.command))for(let A of p.command.matchAll(/"[^"]*\.md"|'[^']*\.md'|(?:\/|[A-Za-z]:[\\/])\S*\.md\b/g))u.push(A[0].replace(/^["']|["']$/g,""))}}re(e,{text:a.trim(),toolUseCount:s},u.filter((n)=>flt(n,o)),r)}}async function Te(e,r){if(r!==void 0){let o=Ee(e);if(o!==void 0){let c=0,a;do{let s=await r.listRecursive(o,a!==void 0?{cursor:a}:void 0);if(!s.ok)return t(`[autoDream] countDailyLogs: ${s.error.code}`),0;c+=U(s.value.items,(u)=>u.key.namespace==="memory"&&(u.key.relPath.at(-1)??"").endsWith(".md")),a=s.value.cursor}while(a);return c}}try{let o=await he(ge(e,"logs"),{recursive:!0});return U(o,(c)=>c.endsWith(".md"))}catch(o){if(!Lt(o))t(`[autoDream] countDailyLogs: ${l(o)}`);return 0}}function Ee(e){let r=ae(B(e));if(ae(e)!=="memory"||B(B(e))!==cu()||!nr(r))return;return{namespace:"memory",projectKey:r,relPath:["logs"]}}async function Dwo(e,r){await Y.of(e.toolUseContext.session.host).runner?.(e,r)}
export{tOt,Y3e,Hwo,Dwo};
