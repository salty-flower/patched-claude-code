// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{U}from"./chunk-ht3pd6g4.js";import{d}from"./chunk-hdvxmrfb.js";import{a}from"./chunk-j77txbjn.js";import{cst,Z1}from"./chunk-mcq8tx7b.js";import{Me}from"./chunk-sac2pmqn.js";import{i}from"./chunk-qbf9wv32.js";import{_n,YR}from"./chunk-861a7whf.js";import{k}from"./chunk-s46qgfx7.js";import{hse}from"./chunk-2s6nnhcv.js";function yLt(){return YR("feedbackDrafts")[0]??"notify"}function U0r(){if(hse()!==null)return!1;if(cst())return!1;if(Z1())return!1;if(Me()!=="firstParty")return!1;let e=a.CLAUDE_CODE_SEND_FEEDBACK;if(e===!1)return!1;if(e===!0)return k("tengu_juniper_relay",!1);return k("tengu_juniper_relay",!1)}function E2(){return yLt()!=="off"&&U0r()}function hcn(e,{storageV5:t,via:r}){let n=U()&&t!==void 0?_n("userSettings",{feedbackDrafts:e},void 0,t):_n("userSettings",{feedbackDrafts:e});return i("tengu_feedback_drafts_setting_changed",{value:d(e),via:d(r)}),n}
export{yLt,U0r,E2,hcn};
