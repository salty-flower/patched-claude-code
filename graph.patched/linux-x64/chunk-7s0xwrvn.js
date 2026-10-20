// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{c}from"./chunk-m3epja3j.js";import{a}from"./chunk-cd1a8ced.js";import{ice,fG}from"./chunk-zjcj7ams.js";import{Pe}from"./chunk-pr2cfg7g.js";import{i}from"./chunk-sr4gfmny.js";import{Ln,lO}from"./chunk-merbp8kx.js";import{k}from"./chunk-7p6jp6kj.js";import{Pte}from"./chunk-38xgev2z.js";import{z}from"./chunk-rdj492d5.js";function Q5t(){return lO("feedbackDrafts")[0]??"notify"}function Iro(){if(Pte()!==null)return!1;if(ice())return!1;if(fG())return!1;if(Pe()!=="firstParty")return!1;let e=a.CLAUDE_CODE_SEND_FEEDBACK;if(e===!1)return!1;if(e===!0)return k("tengu_juniper_relay",!1);return k("tengu_juniper_relay",!1)}function mV(){return Q5t()!=="off"&&Iro()}function cIn(e,{storageV5:t,via:r}){let n=z()&&t!==void 0?Ln("userSettings",{feedbackDrafts:e},void 0,t):Ln("userSettings",{feedbackDrafts:e});return i("tengu_feedback_drafts_setting_changed",{value:c(e),via:c(r)}),n}
export{Q5t,Iro,mV,cIn};
