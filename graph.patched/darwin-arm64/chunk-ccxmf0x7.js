// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{we}from"./chunk-xzypj06m.js";import{Be}from"./chunk-54xe5s81.js";import{a}from"./chunk-k4g6y57j.js";import{L_}from"./chunk-jn6attna.js";var oq=1500,Xbo=3000;function dee(){return a.CLAUDE_CODE_REMOTE&&we()}function Btn(){return dee()&&L_()}function dRs({eventLoggingEnabled:e,growthBookEnabled:n,cacheEmpty:o,relaunches:i}){let t=e&&o?oq:0,r=n&&i?a.CLAUDE_CODE_FLAG_FETCH_WAIT_MS??Xbo:0,s=Math.max(t,r);return s>0?s:void 0}function cRs({site:e,nonInteractive:n,budgetMs:o,settingsEnvPending:i,cacheEmpty:t,warmCacheKick:r}){if(!n||o===void 0)return"not_eligible";if(!t&&!r)return"not_asked_warm";if(i)return t?"settings_pending_empty":"settings_pending_warm";if(e==="init")return t?"started_in_init_empty":"started_in_init_warm";return t?"started_after_init_empty":"started_after_init_warm"}function uRs(e){switch(e){case"started_in_init_empty":case"started_in_init_warm":case"started_after_init_empty":case"started_after_init_warm":return!0;case"not_asked_warm":case"settings_pending_empty":case"settings_pending_warm":case"launch_excluded":case"not_eligible":return!1}}function pRs({nonInteractive:e,budgetMs:n,settingsEnvPending:o,cacheEmpty:i,relaunches:t,autoModeKillSwitchOnDisk:r,warmWakeEarlyFetch:s}){if(n===void 0)return;if(e&&!o&&(i||t&&(r||!s)))return"gb-before-mode";return t?"gb-before-context":"gb-before-tools"}async function XUe({initialize:e,budgetMs:n}){let o=performance.now(),i=await Be(e().then(()=>!0,()=>!0),n);return{waitMs:performance.now()-o,timedOut:i===void 0}}
export{oq,Xbo,dee,Btn,dRs,cRs,uRs,pRs,XUe};
