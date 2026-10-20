// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{c}from"./chunk-ny2cqbmq.js";import{a}from"./chunk-h422gpw8.js";import{fce,E2}from"./chunk-pvfq0951.js";import{Pe}from"./chunk-gsezw0ay.js";import{i}from"./chunk-dj0gyv94.js";import{Ln,fO}from"./chunk-qwytg6a7.js";import{k}from"./chunk-bvn0epzr.js";import{Hte}from"./chunk-sds9hbaf.js";import{z}from"./chunk-p017vfx2.js";function a9t(){return fO("feedbackDrafts")[0]??"notify"}function noo(){if(Hte()!==null)return!1;if(fce())return!1;if(E2())return!1;if(Pe()!=="firstParty")return!1;let e=a.CLAUDE_CODE_SEND_FEEDBACK;if(e===!1)return!1;if(e===!0)return k("tengu_juniper_relay",!1);return k("tengu_juniper_relay",!1)}function vV(){return a9t()!=="off"&&noo()}function vIn(e,{storageV5:t,via:r}){let n=z()&&t!==void 0?Ln("userSettings",{feedbackDrafts:e},void 0,t):Ln("userSettings",{feedbackDrafts:e});return i("tengu_feedback_drafts_setting_changed",{value:c(e),via:c(r)}),n}
export{a9t,noo,vV,vIn};
