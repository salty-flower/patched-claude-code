// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{L}from"./chunk-nynxm73s.js";import{c}from"./chunk-g9zw99sb.js";import{a}from"./chunk-1fpwxv0g.js";import{PSn,zN}from"./chunk-n8h76tq4.js";import{Pe}from"./chunk-ntsbwr3d.js";import{i}from"./chunk-aykv0zbt.js";import{fn,zT}from"./chunk-e561d543.js";import{x}from"./chunk-er6f56rj.js";import{Cte}from"./chunk-jfbsd9e8.js";function zCt(){return zT("feedbackDrafts")[0]??"notify"}function yfr(){if(Cte()!==null)return!1;if(PSn())return!1;if(zN())return!1;if(Pe()!=="firstParty")return!1;let e=a.CLAUDE_CODE_SEND_FEEDBACK;if(e===!1)return!1;if(e===!0)return x("tengu_juniper_relay",!1);return x("tengu_juniper_relay",!1)}function tU(){return zCt()!=="off"&&yfr()}function g8t(e,{storageV5:t,via:r}){let n=L()&&t!==void 0?fn("userSettings",{feedbackDrafts:e},void 0,t):fn("userSettings",{feedbackDrafts:e});return i("tengu_feedback_drafts_setting_changed",{value:c(e),via:c(r)}),n}
export{zCt,yfr,tU,g8t};
