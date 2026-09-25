// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Ae}from"./chunk-s8xs8s76.js";import{rt}from"./chunk-zr6jq9j9.js";import{a}from"./chunk-3a4khaz5.js";var rSr=1500,c=3000;function nEe(){return a.CLAUDE_CODE_REMOTE&&Ae()}function Ipo({eventLoggingEnabled:e,growthBookEnabled:t,cacheEmpty:o,relaunches:n}){let i=e&&o?rSr:0,s=t&&n?a.CLAUDE_CODE_FLAG_FETCH_WAIT_MS??c:0,r=Math.max(i,s);return r>0?r:void 0}async function Hpo({initialize:e,budgetMs:t}){let o=performance.now(),n=await rt(e().then(()=>!0,()=>!0),t);return{waitMs:performance.now()-o,timedOut:n===void 0}}
export{rSr,nEe,Ipo,Hpo};
