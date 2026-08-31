// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{sI}from"./chunk-nf1fwtrr.js";var lBe="Can't open \u2014 this session is running in another terminal";function Xie({sessionId:o,holder:i,canFork:e}){let{jobId:n}=i,s=n?`Run \`claude attach ${n}\` to open it, or \`claude stop ${n}\` first to resume it here.`:"Run `claude agents` to find its id, then `claude attach <id>` to open it, or `claude stop <id>` first to resume it here.",t=e?" Add --fork-session to branch off a copy instead.":"";return`Session ${o} is running as a background session${n?` (${n})`:""}. ${s}${t}`}async function cq(o){let i=(await D7t(o)).find((n)=>n.kind!=="interactive");if(!i)return null;let e=i.jobId!==void 0&&sI.test(i.jobId)?i.jobId:void 0;return{kind:i.kind,jobId:e}}async function D7t(o){let i=await import("./chunk-6mw04wrh.js").then((n)=>n.listAllLiveSessions()).catch(()=>[]),e=[];for(let n of i){if(n.sessionId!==o||n.pid===process.pid||!n.kind)continue;if(n.kind==="interactive"&&n.parkedJobId!==void 0)continue;e.push({kind:n.kind,jobId:n.jobId,pid:n.pid})}return e}
export{lBe,Xie,cq,D7t};
