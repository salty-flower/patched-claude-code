// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{kt,ny}from"./chunk-28n1q6sq.js";import{G,Te}from"./chunk-m8nhymg4.js";import{S,f}from"./chunk-v8gz5b0e.js";import{N,d,YD,V}from"./chunk-wryttfdq.js";import{t}from"./chunk-bdfv2ky4.js";import{I}from"./chunk-b5xhmzas.js";import{e8}from"./chunk-gg7nabmz.js";import{l}from"./chunk-mfxenhbr.js";import{g,m}from"./chunk-f8g4f3e3.js";import{mr}from"./chunk-0qf90h64.js";import{St}from"./chunk-x4r54n7x.js";import{Qa,b,rg,Yl,mee}from"./chunk-e44qnbvj.js";import{dt,Bt}from"./chunk-42sx5v11.js";import{Kne,Rx,Mon,Ie,It,bPr}from"./chunk-wqb2b4v0.js";import{xUr,Xde}from"./chunk-cq3w4egf.js";import{Qde}from"./chunk-agh2z804.js";import{oh,O$,zit}from"./chunk-7e5anqg5.js";import{a_}from"./chunk-ntahet54.js";import{$Fr}from"./chunk-pt4x1074.js";import{Dfr,Lfr,Boo,joo,Woo,NGe,Goo}from"./chunk-br0g57fn.js";import{NMt,Yxi,QXt,Xxi}from"./chunk-q363qzr4.js";import{Fw,M_}from"./chunk-n5274ece.js";import{up}from"./chunk-7mwnbb2z.js";import{Qk,Dg,Jf}from"./chunk-vxdhwtwb.js";import{W}from"./chunk-z1a5ffdv.js";function ee(){return b("tengu_onyx_plover",null)}function CPn(){let e=ee();return e?.enabled===!0||e?.available===!0}function CMt(){if(!CPn())return!1;let e=St().autoDreamEnabled;if(e!==void 0)return e;return ee()?.enabled===!0}class te{runner=null}var Y=new W(()=>new te);var pe="## Team memory (`team/` subdirectory)\n\nThe `team/` subdirectory holds memories shared across everyone working in this repo. Other teammates' Claude sessions write here too \u2014 treat it differently from your personal files:\n\n- **Phase 1:** `ls team/` and skim it alongside your personal files. A teammate may have already captured something you'd otherwise duplicate.\n- **Phase 3:** Merge near-duplicates *within* `team/` the same way you would personal memories. If a personal memory restates a team memory, delete the personal one.\n- **Phase 4 \u2014 be conservative pruning `team/`:**\n  - DO delete or fix a team memory that is clearly contradicted by the current code, or that a newer team memory marks as superseded.\n  - DO NOT delete a team memory just because you don't recognize it or it isn't relevant to *your* recent sessions \u2014 a teammate may rely on it.\n  - When unsure, leave it. A stale team memory costs little; deleting a teammate's load-bearing note costs a lot.\n\nDo not promote personal memories into `team/` during a dream \u2014 that's a deliberate choice the user makes via `/remember`, not something to do reflexively.",fe=`### Reconcile memories against CLAUDE.md

Project CLAUDE.md instructions are loaded in your system prompt. For each memory that captures feedback or project conventions (the \`feedback\`/\`project\` types, where tagged), check whether it contradicts a CLAUDE.md instruction on the same topic:

- **Memory is stale** \u2014 CLAUDE.md and the memory describe different procedures for the same task: CLAUDE.md is the maintained, checked-in source. Delete the memory, or rewrite it to agree if it carries context worth keeping (the *why* is still useful but the *how* is wrong).
- **CLAUDE.md may be stale** \u2014 the memory is clearly dated after CLAUDE.md and explicitly corrects it: do NOT edit CLAUDE.md during a dream. Annotate the memory with "contradicts CLAUDE.md \u2014 verify which is current" and list it in your summary so the user can update CLAUDE.md.
- **Not a conflict** \u2014 the memory adds detail CLAUDE.md doesn't cover, or narrows a CLAUDE.md rule with a stated reason. Leave it.

A \`feedback\` memory's "Why: the user corrected me" framing is not evidence it's newer than CLAUDE.md \u2014 CLAUDE.md may have been updated since.`;function re(e,r,o,a=!1,i=!1,s=!1){return`# Dream: Memory Consolidation

You are performing a dream \u2014 a reflective pass over your memory files. Synthesize what you've learned recently into durable, well-organized memories so that future sessions can orient quickly.

Memory directory: \`${e}\`
${zit}

Session transcripts: \`${r}\` (large JSONL files \u2014 grep narrowly, don't read whole files)
${a?`
${pe}
`:""}
---

## Phase 1 \u2014 Orient

- \`ls\` the memory directory to see what already exists
- Read \`${oh}\` to understand the current index
- Skim existing topic files so you improve them rather than creating duplicates
- If a \`sessions/\` subdirectory exists, review recent entries there

## Phase 2 \u2014 Gather recent signal

Look for new information worth persisting. Sources in rough priority order:

1. **Existing memories that drifted** \u2014 facts that contradict something you see in the codebase now
2. **Transcript search** \u2014 if you need specific context (e.g., "what was the error message from yesterday's build failure?"), grep the JSONL transcripts for narrow terms:
   \`grep -rn "<narrow term>" ${r}/ --include="*.jsonl" | tail -50\`

Don't exhaustively read transcripts. Look only for things you already suspect matter.

## Phase 3 \u2014 Consolidate

For each thing worth remembering, write or update a memory file at the top level of the memory directory. Use the memory file format and type conventions from your system prompt's auto-memory section \u2014 it's the source of truth for what to save, how to structure it, and what NOT to save.${i?` The ${Qk} / ${Dg} / ${Jf} tools are unavailable in a dream: consolidate only this memory directory, and leave anything that section marks as shared with the project where it is \u2014 never copy it into these files.`:""}${""}

Focus on:
- Merging new signal into existing topic files rather than creating near-duplicates
- Converting relative dates ("yesterday", "last week") to absolute dates so they remain interpretable after time passes
- Deleting contradicted facts \u2014 if today's investigation disproves an old memory, fix it at the source

## Phase 4 \u2014 Prune and index

Update \`${oh}\` so it stays under ${O$} lines AND under ~25KB. It's an **index**, not a dump \u2014 each entry should be one line under ~150 characters: \`- [Title](file.md) \u2014 one-line hook\`. Never write memory content directly into it.

- Remove pointers to memories that are now stale, wrong, or superseded
- Demote verbose entries: if an index line is over ~200 chars, it's carrying content that belongs in the topic file \u2014 shorten the line, move the detail
- Add pointers to newly important memories
- Resolve contradictions \u2014 if two files disagree, fix the wrong one

${fe}

---

Return a brief summary of what you consolidated, updated, or pruned. If nothing changed (memories are already tight), say so.${o?`

## Additional context

${o}`:""}`}import{readdirSync as he}from"fs";var ge=256,ye=36;function oe(e){let r;try{r=he(e)}catch(a){return V(a)?[]:[null]}let o=new Set;for(let a of r){let i=kt(a.slice(0,ye));if(i!==null||a.endsWith(".jsonl"))o.add(i)}return o.delete(G()),o.size>ge?[null]:[...o]}var _e=30;function q(e){return typeof e==="object"&&e!==null&&"type"in e&&e.type==="dream"}function se(e,r){let o=Fw("dream"),a={...M_(o,"dream","dreaming"),type:"dream",status:"running",skipTranscript:!0,phase:"starting",sessionsReviewing:r.sessionsReviewing,filesTouched:[],turns:[],abortController:r.abortController,priorMtime:r.priorMtime,...r.storageV5!==void 0&&{storageV5:r.storageV5}};return e.register(a),o}function ne(e,r,o,a){a.update(e,(i)=>{let s=new Set(i.filesTouched),u=o.filter((n)=>!s.has(n)&&s.add(n));if(r.text===""&&r.toolUseCount===0&&u.length===0)return i;return{...i,phase:u.length>0?"updating":i.phase,filesTouched:u.length>0?[...i.filesTouched,...u]:i.filesTouched,turns:i.turns.slice(-(_e-1)).concat(r)}})}function ae(e,r){r.update(e,(o)=>({...o,status:"completed",endTime:Date.now(),notified:!0,abortController:void 0})),g("task_dream"),Qa(e,"completed",{skipTranscript:!0,ambient:!0})}function ie(e,r){r.update(e,(o)=>({...o,status:"failed",endTime:Date.now(),notified:!0,abortController:void 0})),m("task_dream","task_dream_failed"),Qa(e,"failed",{skipTranscript:!0,ambient:!0})}var w=null,we=600000,ke=new RegExp(`^\\s*(?:${joo})\\b`,"i"),me={minHours:24,minSessions:5};function be(){let e=b("tengu_onyx_plover",null);return{minHours:typeof e?.minHours==="number"&&Number.isFinite(e.minHours)&&e.minHours>0?e.minHours:me.minHours,minSessions:typeof e?.minSessions==="number"&&Number.isFinite(e.minSessions)&&e.minSessions>0?e.minSessions:me.minSessions}}function Se(){if(mr()!==null)return!1;if(e8())return!1;if(!rg())return!1;if(Qde())return!1;return CMt()}function De(){return!1}function BRi(e){let r=0,o=!1,a=new Set;Y.of(e).runner=async function(s,u){let n=be(),p=De();if(!p&&!Se())return;let A;try{A=await NMt(void 0,s.toolUseContext.storageV5)}catch(c){t(`[autoDream] readLastConsolidatedAt failed: ${d(c)}`);return}let O=(Date.now()-A)/3600000;if(!p&&O<n.minHours)return;let z=Date.now()-r;if(!p&&z<we){t(`[autoDream] scan throttle \u2014 time-gate passed but last scan was ${Math.round(z/1000)}s ago`);return}r=Date.now();let h;try{h=await Xxi(A,s.toolUseContext.storageV5)}catch(c){t(`[autoDream] listSessionsTouchedSince failed: ${d(c)}`);return}let le=G();if(h=h.filter((c)=>c!==le),!p&&h.length<n.minSessions){t(`[autoDream] skip \u2014 ${h.length} sessions since last consolidation, need ${n.minSessions}`),l("tengu_auto_dream_skipped",{reason:S("sessions"),session_count:h.length,min_required:n.minSessions});return}let P=Woo(s.toolUseContext.getAppState().toolPermissionContext,mee());if(P!==void 0){if(t(`[autoDream] skip \u2014 ${Lfr(P)} would refuse memory writes`),l("tengu_auto_dream_skipped",{reason:S("permission_rule")}),u!==void 0){let c=Boo(e,P,Yl());if(c!==void 0)u(It(c,"warning"))}return}let D;if(p)D=A;else{try{D=await Yxi(s.toolUseContext.storageV5)}catch(c){t(`[autoDream] lock acquire failed: ${d(c)}`);return}if(D===null){l("tengu_auto_dream_skipped",{reason:S("lock")});return}}let E=Yl(),M=void 0,y=M==="unplaced"||M==="capped"?void 0:M;if(y==="newer"||y!==void 0&&"unreadable"in y){if(!p)await QXt(D,s.toolUseContext.storageV5);if(y!=="newer"){if(t(`[autoDream] skipped: the memory items could not be read (cause: ${y.unreadable}); the warning above says why and what resumes consolidation`),l("tengu_auto_dream_skipped",{reason:S("items_unreadable")}),w!==null&&u!==void 0&&!a.has(y.unreadable))a.add(y.unreadable),u?.(It(await w.unreadableItemsNotice(y.unreadable,E),"warning"));return}if(t("[autoDream] skip \u2014 newer item record"),l("tengu_auto_dream_skipped",{reason:S("record_newer")}),w!==null&&u!==void 0&&!o)o=!0,u?.(It(w.NEWER_RECORD_NOTICE,"warning"));return}let H=Xde();t(`[autoDream] firing \u2014 ${O.toFixed(1)}h since last, ${h.length} sessions to review`),l("tengu_auto_dream_fired",{hours_since:Math.round(O),sessions_since:h.length,team_memory_enabled:H});let{taskRegistry:x}=s.toolUseContext,v=new AbortController,R=se(x,{sessionsReviewing:h.length,priorMtime:D,abortController:v,storageV5:s.toolUseContext.storageV5}),L="fork";try{let c=a_(Te()),X=`

**Tool constraints for this run:** Shell access is restricted to read-only commands (\`ls\`, \`find\`, \`grep\`, \`cat\`, \`stat\`, \`wc\`, \`head\`, \`tail\`, and similar) plus deleting \`.md\` files inside the memory directory (outside protected subdirectories like \`.git\` or \`agents\`; \`rm\` takes no flags except \`-f\`). Anything else that writes, redirects to a file, or modifies state will be denied. Plan your exploration with this in mind.

Sessions since last consolidation (${h.length}):
${h.map((_)=>`- ${_}`).join(`
`)}`,Ce=!1,de=re(E,c,X,H,xUr(),!1),ue=Ae(R,x,E),F=new Map,j=new Set,J=!1,K=!1,B=!1,C,Q=ny("auto_dream"),Z=()=>$Fr(oe(c),[],Q);Z();try{C=await Rx({promptMessages:[Ie({content:de})],cacheSafeParams:Kne(s),canUseTool:Goo(E,y!==void 0?w?.keptItemsOf(y):void 0,{fork:"dream",onWriteAllowed:(_,U)=>F.set(U,_)}),querySource:"auto_dream",forkLabel:"auto_dream",skipTranscript:!0,overrides:{abortController:v,agentId:Q},onMessage:(_)=>{if(ue(_),Ee(_,j),_.type==="user")Z();if(_.type==="assistant")J=_.isApiErrorMessage===!0},skipCacheWrite:Mon()}),K=!0,B=!v.signal.aborted&&!J}finally{let _=new Set([...F].filter(([k])=>!B||!j.has(k)).map(([,k])=>k)),U=new Set([...F].filter(([k])=>B&&j.has(k)).map(([,k])=>k));if(w!==null&&M==="capped")await w.deferCappedRunWrites({memoryDir:E,dreamWrote:_,mayHaveWritten:U});if(w!==null&&y!==void 0){let k=await w.settleDreamItems({memoryDir:E,before:y,dreamWrote:_,mayHaveWritten:U});if((k.skipped||k.failed)&&K&&!v.signal.aborted&&!p&&await w.claimLockGiveBack(E))await QXt(D,s.toolUseContext.storageV5)}}L="completion",ae(R,x);let T=s.toolUseContext.taskRegistry.get(R),ce=q(T)?T.filesTouched.length:0;if(q(T)&&T.filesTouched.length>0)u?.({...bPr(T.filesTouched),verb:"Improved"}),await Dfr(s.toolUseContext,{source:"dream",summary:`consolidated ${T.filesTouched.length} ${I(T.filesTouched.length,"memory file")}`,paths:T.filesTouched});t(`[autoDream] completed \u2014 cache: read=${C.totalUsage.cache_read_input_tokens} created=${C.totalUsage.cache_creation_input_tokens}`),l("tengu_auto_dream_completed",{cache_read:C.totalUsage.cache_read_input_tokens,cache_created:C.totalUsage.cache_creation_input_tokens,output:C.totalUsage.output_tokens,sessions_reviewed:h.length,files_touched_count:ce,team_memory_enabled:H,account_memory_line_rendered:!1})}catch(c){if(v.signal.aborted){t("[autoDream] aborted by user");return}if(t(`[autoDream] ${L} failed: ${d(c)}`),l("tengu_auto_dream_failed",{phase:f(L),error_class:YD(N(c))}),L==="fork")ie(R,x),await QXt(D,s.toolUseContext.storageV5)}}}function Ee(e,r){if(e.type!=="user"||e.toolDenialKind!==void 0||typeof e.message.content==="string")return;for(let o of e.message.content)if(o.type==="tool_result"&&o.is_error===!0)r.add(o.tool_use_id)}function Ae(e,r,o){return(a)=>{if(a.type!=="assistant")return;let i="",s=0,u=[];for(let n of a.message.content)if(n.type==="text")i+=n.text;else if(n.type==="tool_use"){if(s++,n.name===dt||n.name===Bt){let p=n.input;if(typeof p.file_path==="string")u.push(p.file_path)}else if(up.includes(n.name)){let p=n.input;if(typeof p.command==="string"&&ke.test(p.command))for(let A of p.command.matchAll(/"[^"]*\.md"|'[^']*\.md'|(?:\/|[A-Za-z]:[\\/])\S*\.md\b/g))u.push(A[0].replace(/^["']|["']$/g,""))}}ne(e,{text:i.trim(),toolUseCount:s},u.filter((n)=>NGe(n,o)),r)}}async function jRi(e,r){await Y.of(e.toolUseContext.session.host).runner?.(e,r)}
export{CPn,CMt,BRi,jRi};
