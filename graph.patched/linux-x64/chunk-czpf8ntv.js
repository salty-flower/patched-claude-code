// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
var vNe="Can't open \u2014 this session is running in another terminal";async function nW(o){let i=(await EVt(o)).find((e)=>e.kind!=="interactive");return i?{kind:i.kind,jobId:i.jobId}:null}async function EVt(o){let i=await import("./chunk-q1wbb9gf.js").then((n)=>n.listAllLiveSessions()).catch(()=>[]),e=[];for(let n of i){if(n.sessionId!==o||n.pid===process.pid||!n.kind)continue;if(n.kind==="interactive"&&n.parkedJobId!==void 0)continue;e.push({kind:n.kind,jobId:n.jobId,pid:n.pid})}return e}
export{vNe,nW,EVt};
