// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{readFileSync as c}from"fs";var Sjt="/sys/fs/cgroup/cpuacct";function Cgn(e){for(let n of e.split(`
`)){let[,r,t]=n.split(":");if(r==="cpuacct"&&t!==void 0)return t}return}function wjt(e){try{let n=Number(c(e,"utf8"));return Number.isFinite(n)?n/1e6:void 0}catch{return}}
export{Sjt,Cgn,wjt};
