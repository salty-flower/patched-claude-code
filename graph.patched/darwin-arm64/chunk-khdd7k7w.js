// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{G}from"./chunk-278j353c.js";import{c}from"./chunk-dnq93t1z.js";import{a}from"./chunk-k4g6y57j.js";import{Yle,UW}from"./chunk-jn6attna.js";import{Pe}from"./chunk-nvk7bh0e.js";import{i}from"./chunk-52pf9qag.js";import{In,GI}from"./chunk-61p68esv.js";import{k}from"./chunk-1901fdh6.js";import{Nee}from"./chunk-1kmjytm1.js";function k3t(){return GI("feedbackDrafts")[0]??"notify"}function oJr(){if(Nee()!==null)return!1;if(Yle())return!1;if(UW())return!1;if(Pe()!=="firstParty")return!1;let e=a.CLAUDE_CODE_SEND_FEEDBACK;if(e===!1)return!1;if(e===!0)return k("tengu_juniper_relay",!1);return k("tengu_juniper_relay",!1)}function B6(){return k3t()!=="off"&&oJr()}function LRn(e,{storageV5:t,via:r}){let n=G()&&t!==void 0?In("userSettings",{feedbackDrafts:e},void 0,t):In("userSettings",{feedbackDrafts:e});return i("tengu_feedback_drafts_setting_changed",{value:c(e),via:c(r)}),n}
export{k3t,oJr,B6,LRn};
