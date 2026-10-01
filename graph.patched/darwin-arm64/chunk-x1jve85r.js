// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Ce}from"./chunk-a7cah040.js";import{it}from"./chunk-jm8r4kd0.js";import{a}from"./chunk-1fpwxv0g.js";import{GN}from"./chunk-n8h76tq4.js";var sDt=1500,c=3000;function hlt(){return a.CLAUDE_CODE_REMOTE&&Ce()}function jin(){return hlt()&&GN()}function Hko({eventLoggingEnabled:e,growthBookEnabled:t,cacheEmpty:n,relaunches:o}){let r=e&&n?sDt:0,u=t&&o?a.CLAUDE_CODE_FLAG_FETCH_WAIT_MS??c:0,i=Math.max(r,u);return i>0?i:void 0}function Oko({nonInteractive:e,budgetMs:t,settingsEnvPending:n,cacheEmpty:o,warmWakeEarlyFetch:r}){return e&&t!==void 0&&!n&&(o||r)}function Dko({nonInteractive:e,budgetMs:t,settingsEnvPending:n,cacheEmpty:o,relaunches:r,autoModeKillSwitchOnDisk:u,warmWakeEarlyFetch:i}){if(t===void 0)return;if(e&&!n&&(o||r&&(u||!i)))return"gb-before-mode";return r?"gb-before-context":"gb-before-tools"}async function Mko({initialize:e,budgetMs:t}){let n=performance.now(),o=await it(e().then(()=>!0,()=>!0),t);return{waitMs:performance.now()-n,timedOut:o===void 0}}
export{sDt,hlt,jin,Hko,Oko,Dko,Mko};
