// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{B}from"./chunk-f16c4jnr.js";import{d}from"./chunk-yffha6me.js";import{a}from"./chunk-869zfth6.js";import{tst,WU}from"./chunk-zyrx67ap.js";import{He}from"./chunk-9dnqpecd.js";import{i}from"./chunk-s90w5q15.js";import{_n,GR}from"./chunk-2c0pkjse.js";import{T}from"./chunk-m0sj7y8g.js";import{pse}from"./chunk-0fybab08.js";function mLt(){return GR("feedbackDrafts")[0]??"notify"}function KMr(){if(pse()!==null)return!1;if(tst())return!1;if(WU())return!1;if(He()!=="firstParty")return!1;let e=a.CLAUDE_CODE_SEND_FEEDBACK;if(e===!1)return!1;if(e===!0)return T("tengu_juniper_relay",!1);return T("tengu_juniper_relay",!1)}function fW(){return mLt()!=="off"&&KMr()}function _cn(e,{storageV5:t,via:r}){let n=B()&&t!==void 0?_n("userSettings",{feedbackDrafts:e},void 0,t):_n("userSettings",{feedbackDrafts:e});return i("tengu_feedback_drafts_setting_changed",{value:d(e),via:d(r)}),n}
export{mLt,KMr,fW,_cn};
