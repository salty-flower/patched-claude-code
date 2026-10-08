// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{G,K,Ee}from"./chunk-g79wjybr.js";import{b,d}from"./chunk-bkr1h20c.js";import{q,l,J$,Ft}from"./chunk-5g6j8x8p.js";import{I}from"./chunk-2j48j0j1.js";import{i}from"./chunk-nayw0pf7.js";import{y,m}from"./chunk-68vq239n.js";import{or}from"./chunk-hrwjwwzw.js";import{t}from"./chunk-p46wpkfz.js";import{$B}from"./chunk-cjpd2k0t.js";import{fr}from"./chunk-jhxnp941.js";import{ut}from"./chunk-gsa86a2x.js";import{Vi,T,Eu,ai,tW}from"./chunk-cxjvwxsa.js";import{St,tn}from"./chunk-hesrqedr.js";import{aPn,p3,_j}from"./chunk-bx1nhgzb.js";import{wu,X0,O0e}from"./chunk-f9e0q8vm.js";import{By}from"./chunk-vecj8twx.js";import{Su,Uy}from"./chunk-7qntjzak.js";import{m6,BT,V_t,Re,jt,Tvn}from"./chunk-g263vvvn.js";import{yin,_in,XGn,JGn,QGn,Eut,ZGn}from"./chunk-mfys4n2a.js";import{a8e,aMo,Yut,lMo}from"./chunk-rwnqjr79.js";import{Nv,Bm}from"./chunk-0gv2h7jq.js";import{eb,mm,sd}from"./chunk-pbexq8d9.js";import{U}from"./chunk-vmwr1ee4.js";function Q(){return T("tengu_onyx_plover",null)}function zDt(){let e=Q();return e?.enabled===!0||e?.available===!0}function q5e(){if(!zDt())return!1;let e=ut().autoDreamEnabled;if(e!==void 0)return e;return Q()?.enabled===!0}import{readdir as ge}from"fs/promises";import{basename as ae,dirname as V,join as ye}from"path";class ee{runner=null}var Y=new G(()=>new ee);var pe="## Team memory (`team/` subdirectory)\n\nThe `team/` subdirectory holds memories shared across everyone working in this repo. Other teammates' Claude sessions write here too \u2014 treat it differently from your personal files:\n\n- **Phase 1:** `ls team/` and skim it alongside your personal files. A teammate may have already captured something you'd otherwise duplicate.\n- **Phase 3:** Merge near-duplicates *within* `team/` the same way you would personal memories. If a personal memory restates a team memory, delete the personal one.\n- **Phase 4 \u2014 be conservative pruning `team/`:**\n  - DO delete or fix a team memory that is clearly contradicted by the current code, or that a newer team memory marks as superseded.\n  - DO NOT delete a team memory just because you don't recognize it or it isn't relevant to *your* recent sessions \u2014 a teammate may rely on it.\n  - When unsure, leave it. A stale team memory costs little; deleting a teammate's load-bearing note costs a lot.\n\nDo not promote personal memories into `team/` during a dream \u2014 that's a deliberate choice the user makes via `/remember`, not something to do reflexively.",fe=`### Reconcile memories against CLAUDE.md

Project CLAUDE.md instructions are loaded in your system prompt. For each memory that captures feedback or project conventions (the \`feedback\`/\`project\` types, where tagged), check whether it contradicts a CLAUDE.md instruction on the same topic:

- **Memory is stale** \u2014 CLAUDE.md and the memory describe different procedures for the same task: CLAUDE.md is the maintained, checked-in source. Delete the memory, or rewrite it to agree if it carries context worth keeping (the *why* is still useful but the *how* is wrong).
- **CLAUDE.md may be stale** \u2014 the memory is clearly dated after CLAUDE.md and explicitly corrects it: do NOT edit CLAUDE.md during a dream. Annotate the memory with "contradicts CLAUDE.md \u2014 verify which is current" and list it in your summary so the user can update CLAUDE.md.
- **Not a conflict** \u2014 the memory adds detail CLAUDE.md doesn't cover, or narrows a CLAUDE.md rule with a stated reason. Leave it.

A \`feedback\` memory's "Why: the user corrected me" framing is not evidence it's newer than CLAUDE.md \u2014 CLAUDE.md may have been updated since.`;function te(e,r,o,c=!1,a=!1,s=!1){return`# Dream: Memory Consolidation

You are performing a dream \u2014 a reflective pass over your memory files. Synthesize what you've learned recently into durable, well-organized memories so that future sessions can orient quickly.

Memory directory: \`${e}\`
${O0e}

Session transcripts: \`${r}\` (large JSONL files \u2014 grep narrowly, don't read whole files)
${c?`
${pe}
`:""}
---

## Phase 1 \u2014 Orient

- \`ls\` the memory directory to see what already exists
- Read \`${wu}\` to understand the current index
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

For each thing worth remembering, write or update a memory file at the top level of the memory directory. Use the memory file format and type conventions from your system prompt's auto-memory section \u2014 it's the source of truth for what to save, how to structure it, and what NOT to save.${a?` The ${eb} / ${mm} / ${sd} tools are unavailable in a dream: consolidate only this memory directory, and leave anything that section marks as shared with the project where it is \u2014 never copy it into these files.`:""}${""}

Focus on:
- Merging new signal into existing topic files rather than creating near-duplicates
- Converting relative dates ("yesterday", "last week") to absolute dates so they remain interpretable after time passes
- Deleting contradicted facts \u2014 if today's investigation disproves an old memory, fix it at the source

## Phase 4 \u2014 Prune and index

Update \`${wu}\` so it stays under ${X0} lines AND under ~25KB. It's an **index**, not a dump \u2014 each entry should be one line under ~150 characters: \`- [Title](file.md) \u2014 one-line hook\`. Never write memory content directly into it.

- Remove pointers to memories that are now stale, wrong, or superseded
- Demote verbose entries: if an index line is over ~200 chars, it's carrying content that belongs in the topic file \u2014 shorten the line, move the detail
- Add pointers to newly important memories
- Resolve contradictions \u2014 if two files disagree, fix the wrong one

${fe}

---

Return a brief summary of what you consolidated, updated, or pruned. If nothing changed (memories are already tight), say so.${o?`

## Additional context

${o}`:""}`}var he=30;function B(e){return typeof e==="object"&&e!==null&&"type"in e&&e.type==="dream"}function re(e,r){let o=Nv("dream"),c={...Bm(o,"dream","dreaming"),type:"dream",status:"running",skipTranscript:!0,phase:"starting",sessionsReviewing:r.sessionsReviewing,filesTouched:[],turns:[],abortController:r.abortController,priorMtime:r.priorMtime,...r.storageV5!==void 0&&{storageV5:r.storageV5}};return e.register(c),o}function oe(e,r,o,c){c.update(e,(a)=>{let s=new Set(a.filesTouched),n=o.filter((u)=>!s.has(u)&&s.add(u));if(r.text===""&&r.toolUseCount===0&&n.length===0)return a;return{...a,phase:n.length>0?"updating":a.phase,filesTouched:n.length>0?[...a.filesTouched,...n]:a.filesTouched,turns:a.turns.slice(-(he-1)).concat(r)}})}function se(e,r){r.update(e,(o)=>({...o,status:"completed",endTime:Date.now(),notified:!0,abortController:void 0})),y("task_dream"),Vi(e,"completed",{skipTranscript:!0,ambient:!0})}function ne(e,r){r.update(e,(o)=>({...o,status:"failed",endTime:Date.now(),notified:!0,abortController:void 0})),m("task_dream","task_dream_failed"),Vi(e,"failed",{skipTranscript:!0,ambient:!0})}var w=null,_e=600000,we=new RegExp(`^\\s*(?:${JGn})\\b`,"i"),ie={minHours:24,minSessions:5};function ke(){let e=T("tengu_onyx_plover",null);return{minHours:typeof e?.minHours==="number"&&Number.isFinite(e.minHours)&&e.minHours>0?e.minHours:ie.minHours,minSessions:typeof e?.minSessions==="number"&&Number.isFinite(e.minSessions)&&e.minSessions>0?e.minSessions:ie.minSessions}}function be(){if(fr()!==null)return!1;if($B())return!1;if(!Eu())return!1;if(p3())return!1;return q5e()}function De(){return!1}function hPo(e){let r=0,o=!1,c=new Set;Y.of(e).runner=async function(s,n){let u=ke(),f=De();if(!f&&!be())return;let A;try{A=await a8e(void 0,s.toolUseContext.storageV5)}catch(p){t(`[autoDream] readLastConsolidatedAt failed: ${l(p)}`);return}let O=(Date.now()-A)/3600000;if(!f&&O<u.minHours)return;let z=Date.now()-r;if(!f&&z<_e){t(`[autoDream] scan throttle \u2014 time-gate passed but last scan was ${Math.round(z/1000)}s ago`);return}r=Date.now();let h;try{h=await lMo(A,s.toolUseContext.storageV5)}catch(p){t(`[autoDream] listSessionsTouchedSince failed: ${l(p)}`);return}let me=K();if(h=h.filter((p)=>p!==me),!f&&h.length<u.minSessions){t(`[autoDream] skip \u2014 ${h.length} sessions since last consolidation, need ${u.minSessions}`),i("tengu_auto_dream_skipped",{reason:b("sessions"),session_count:h.length,min_required:u.minSessions});return}let N=QGn(s.toolUseContext.getAppState().toolPermissionContext,tW());if(N!==void 0){if(t(`[autoDream] skip \u2014 ${_in(N)} would refuse memory writes`),i("tengu_auto_dream_skipped",{reason:b("permission_rule")}),n!==void 0){let p=XGn(e,N,ai());if(p!==void 0)n(jt(p,"warning"))}return}let E;if(f)E=A;else{try{E=await aMo(s.toolUseContext.storageV5)}catch(p){t(`[autoDream] lock acquire failed: ${l(p)}`);return}if(E===null){i("tengu_auto_dream_skipped",{reason:b("lock")});return}}let D=ai(),M=void 0,g=M==="unplaced"||M==="capped"?void 0:M;if(g==="newer"||g!==void 0&&"unreadable"in g){if(!f)await Yut(E,s.toolUseContext.storageV5);if(g!=="newer"){if(t(`[autoDream] skipped: the memory items could not be read (cause: ${g.unreadable}); the warning above says why and what resumes consolidation`),i("tengu_auto_dream_skipped",{reason:b("items_unreadable")}),w!==null&&n!==void 0&&!c.has(g.unreadable))c.add(g.unreadable),n?.(jt(await w.unreadableItemsNotice(g.unreadable,D),"warning"));return}if(t("[autoDream] skip \u2014 newer item record"),i("tengu_auto_dream_skipped",{reason:b("record_newer")}),w!==null&&n!==void 0&&!o)o=!0,n?.(jt(w.NEWER_RECORD_NOTICE,"warning"));return}let F=_j();t(`[autoDream] firing \u2014 ${O.toFixed(1)}h since last, ${h.length} sessions to review`),i("tengu_auto_dream_fired",{hours_since:Math.round(O),sessions_since:h.length,team_memory_enabled:F});let{taskRegistry:x}=s.toolUseContext,C=new AbortController,L=re(x,{sessionsReviewing:h.length,priorMtime:E,abortController:C,storageV5:s.toolUseContext.storageV5}),R="fork";try{let p=Uy(Ee()),X=await Ae(D,s.toolUseContext.storageV5),le=`

**Tool constraints for this run:** Shell access is restricted to read-only commands (\`ls\`, \`find\`, \`grep\`, \`cat\`, \`stat\`, \`wc\`, \`head\`, \`tail\`, and similar) plus deleting \`.md\` files inside the memory directory (outside protected subdirectories like \`.git\` or \`agents\`; \`rm\` takes no flags except \`-f\`). Anything else that writes, redirects to a file, or modifies state will be denied. Plan your exploration with this in mind.

Sessions since last consolidation (${h.length}):
${h.map((_)=>`- ${_}`).join(`
`)}`,Ce=!1,de=te(D,p,le,F,aPn(),!1),ue=Se(L,x,D),j=new Map,H=new Set,J=!1,Z=!1,W=!1,v;try{v=await BT({promptMessages:[Re({content:de})],cacheSafeParams:m6(s),canUseTool:ZGn(D,g!==void 0?w?.keptItemsOf(g):void 0,{fork:"dream",onWriteAllowed:(_,P)=>j.set(P,_)}),querySource:"auto_dream",forkLabel:"auto_dream",skipTranscript:!0,overrides:{abortController:C},onMessage:(_)=>{if(ue(_),Te(_,H),_.type==="assistant")J=_.isApiErrorMessage===!0},skipCacheWrite:V_t()}),Z=!0,W=!C.signal.aborted&&!J}finally{let _=new Set([...j].filter(([k])=>!W||!H.has(k)).map(([,k])=>k)),P=new Set([...j].filter(([k])=>W&&H.has(k)).map(([,k])=>k));if(w!==null&&M==="capped")await w.deferCappedRunWrites({memoryDir:D,dreamWrote:_,mayHaveWritten:P});if(w!==null&&g!==void 0){let k=await w.settleDreamItems({memoryDir:D,before:g,dreamWrote:_,mayHaveWritten:P});if((k.skipped||k.failed)&&Z&&!C.signal.aborted&&!f&&await w.claimLockGiveBack(D))await Yut(E,s.toolUseContext.storageV5)}}R="completion",se(L,x);let S=s.toolUseContext.taskRegistry.get(L),ce=B(S)?S.filesTouched.length:0;if(B(S)&&S.filesTouched.length>0)n?.({...Tvn(S.filesTouched),verb:"Improved"}),await yin(s.toolUseContext,{source:"dream",summary:`consolidated ${S.filesTouched.length} ${I(S.filesTouched.length,"memory file")}`,paths:S.filesTouched});t(`[autoDream] completed \u2014 cache: read=${v.totalUsage.cache_read_input_tokens} created=${v.totalUsage.cache_creation_input_tokens}`),i("tengu_auto_dream_completed",{cache_read:v.totalUsage.cache_read_input_tokens,cache_created:v.totalUsage.cache_creation_input_tokens,output:v.totalUsage.output_tokens,sessions_reviewed:h.length,daily_logs_found:X,files_touched_count:ce,team_memory_enabled:F,account_memory_line_rendered:!1})}catch(p){if(C.signal.aborted){t("[autoDream] aborted by user");return}if(t(`[autoDream] ${R} failed: ${l(p)}`),i("tengu_auto_dream_failed",{phase:d(R),error_class:J$(q(p))}),R==="fork")ne(L,x),await Yut(E,s.toolUseContext.storageV5)}}}function Te(e,r){if(e.type!=="user"||e.toolDenialKind!==void 0||typeof e.message.content==="string")return;for(let o of e.message.content)if(o.type==="tool_result"&&o.is_error===!0)r.add(o.tool_use_id)}function Se(e,r,o){return(c)=>{if(c.type!=="assistant")return;let a="",s=0,n=[];for(let u of c.message.content)if(u.type==="text")a+=u.text;else if(u.type==="tool_use"){if(s++,u.name===St||u.name===tn){let f=u.input;if(typeof f.file_path==="string")n.push(f.file_path)}else if(By.includes(u.name)){let f=u.input;if(typeof f.command==="string"&&we.test(f.command))for(let A of f.command.matchAll(/"[^"]*\.md"|'[^']*\.md'|(?:\/|[A-Za-z]:[\\/])\S*\.md\b/g))n.push(A[0].replace(/^["']|["']$/g,""))}}oe(e,{text:a.trim(),toolUseCount:s},n.filter((u)=>Eut(u,o)),r)}}async function Ae(e,r){if(r!==void 0){let o=ve(e);if(o!==void 0){let c=0,a;do{let s=await r.listRecursive(o,a!==void 0?{cursor:a}:void 0);if(!s.ok)return t(`[autoDream] countDailyLogs: ${s.error.code}`),0;c+=U(s.value.items,(n)=>n.key.namespace==="memory"&&(n.key.relPath.at(-1)??"").endsWith(".md")),a=s.value.cursor}while(a);return c}}try{let o=await ge(ye(e,"logs"),{recursive:!0});return U(o,(c)=>c.endsWith(".md"))}catch(o){if(!Ft(o))t(`[autoDream] countDailyLogs: ${l(o)}`);return 0}}function ve(e){let r=ae(V(e));if(ae(e)!=="memory"||V(V(e))!==Su()||!or(r))return;return{namespace:"memory",projectKey:r,relPath:["logs"]}}async function yPo(e,r){await Y.of(e.toolUseContext.session.host).runner?.(e,r)}
export{zDt,q5e,hPo,yPo};
