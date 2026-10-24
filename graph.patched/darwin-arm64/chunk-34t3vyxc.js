// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{c}from"./chunk-ydpbzmt4.js";import{i}from"./chunk-9a41hw1t.js";import{tfe,kz}from"./chunk-we9anmwe.js";import{Te}from"./chunk-psq3t7gj.js";import{a}from"./chunk-wq923bwc.js";import{Un,EM}from"./chunk-32v5ghb4.js";import{k}from"./chunk-27xjmczp.js";import{Hre}from"./chunk-7pf88165.js";import{z}from"./chunk-mxa4mwnj.js";function WQt(){return EM("feedbackDrafts")[0]??"notify"}function ygo(){if(Hre()!==null)return!1;if(tfe())return!1;if(kz())return!1;if(Te()!=="firstParty")return!1;let e=i.CLAUDE_CODE_SEND_FEEDBACK;if(e===!1)return!1;if(e===!0)return k("tengu_juniper_relay",!1);return k("tengu_juniper_relay",!1)}function bq(){return WQt()!=="off"&&ygo()}function XNn(e,{storageV5:t,via:r}){let n=z()&&t!==void 0?Un("userSettings",{feedbackDrafts:e},void 0,t):Un("userSettings",{feedbackDrafts:e});return a("tengu_feedback_drafts_setting_changed",{value:c(e),via:c(r)}),n}
export{WQt,ygo,bq,XNn};
