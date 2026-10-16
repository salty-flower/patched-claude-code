// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{z}from"./chunk-qeqy4res.js";import{c}from"./chunk-fr28a3he.js";import{a}from"./chunk-xwn0mfnc.js";import{jle,IW}from"./chunk-en4g449d.js";import{xe}from"./chunk-kmgwwaz2.js";import{i}from"./chunk-h723y8sa.js";import{In,UI}from"./chunk-a502zyxr.js";import{k}from"./chunk-k16gymf7.js";import{Mee}from"./chunk-qx925reg.js";function cYt(){return UI("feedbackDrafts")[0]??"notify"}function xJr(){if(Mee()!==null)return!1;if(jle())return!1;if(IW())return!1;if(xe()!=="firstParty")return!1;let e=a.CLAUDE_CODE_SEND_FEEDBACK;if(e===!1)return!1;if(e===!0)return k("tengu_juniper_relay",!1);return k("tengu_juniper_relay",!1)}function OV(){return cYt()!=="off"&&xJr()}function mRn(e,{storageV5:t,via:r}){let n=z()&&t!==void 0?In("userSettings",{feedbackDrafts:e},void 0,t):In("userSettings",{feedbackDrafts:e});return i("tengu_feedback_drafts_setting_changed",{value:c(e),via:c(r)}),n}
export{cYt,xJr,OV,mRn};
