// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{N}from"./chunk-37kdx3dg.js";import{c}from"./chunk-gas689jj.js";import{a}from"./chunk-3a4khaz5.js";import{ncn,DL}from"./chunk-x4gz28fm.js";import{He}from"./chunk-m9hfdm3b.js";import{i}from"./chunk-9cfndpw0.js";import{sn,DA}from"./chunk-je0c1kfp.js";import{x}from"./chunk-twxt3h9y.js";import{LJ}from"./chunk-etkg2s89.js";function L_t(){return DA("feedbackDrafts")[0]??"notify"}function PZn(){if(LJ()!==null)return!1;if(ncn())return!1;if(DL())return!1;if(He()!=="firstParty")return!1;let e=a.CLAUDE_CODE_SEND_FEEDBACK;if(e===!1)return!1;if(e===!0)return x("tengu_juniper_relay",!1);return x("tengu_juniper_relay",!1)}function l$(){return L_t()!=="off"&&PZn()}function Bzt(e,{storageV5:t,via:r}){let n=N()&&t!==void 0?sn("userSettings",{feedbackDrafts:e},void 0,t):sn("userSettings",{feedbackDrafts:e});return i("tengu_feedback_drafts_setting_changed",{value:c(e),via:c(r)}),n}
export{L_t,PZn,l$,Bzt};
