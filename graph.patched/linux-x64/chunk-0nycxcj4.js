// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{B}from"./chunk-4p5wb748.js";import{d}from"./chunk-bkr1h20c.js";import{a}from"./chunk-rptge3r8.js";import{plt,$B}from"./chunk-cjpd2k0t.js";import{Pe}from"./chunk-942093b7.js";import{i}from"./chunk-nayw0pf7.js";import{bn,fx}from"./chunk-gsa86a2x.js";import{T}from"./chunk-cxjvwxsa.js";import{Wie}from"./chunk-aqh2c7wz.js";function sUt(){return fx("feedbackDrafts")[0]??"notify"}function vUr(){if(Wie()!==null)return!1;if(plt())return!1;if($B())return!1;if(Pe()!=="firstParty")return!1;let e=a.CLAUDE_CODE_SEND_FEEDBACK;if(e===!1)return!1;if(e===!0)return T("tengu_juniper_relay",!1);return T("tengu_juniper_relay",!1)}function Az(){return sUt()!=="off"&&vUr()}function Ufn(e,{storageV5:t,via:r}){let n=B()&&t!==void 0?bn("userSettings",{feedbackDrafts:e},void 0,t):bn("userSettings",{feedbackDrafts:e});return i("tengu_feedback_drafts_setting_changed",{value:d(e),via:d(r)}),n}
export{sUt,vUr,Az,Ufn};
