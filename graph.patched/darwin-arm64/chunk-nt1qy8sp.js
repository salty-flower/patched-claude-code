// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{j}from"./chunk-k1419ccf.js";import{d}from"./chunk-76anb6yt.js";import{a}from"./chunk-yvnhkg35.js";import{APe,rj}from"./chunk-tadwrn0a.js";import{Ie}from"./chunk-kvz2ymff.js";import{i}from"./chunk-4nygtnjw.js";import{An,xP}from"./chunk-x0dc37w9.js";import{k}from"./chunk-bk5ct2gw.js";import{vde}from"./chunk-14rnebpd.js";function J2t(){return xP("feedbackDrafts")[0]??"notify"}function ezr(){if(vde()!==null)return!1;if(APe())return!1;if(rj())return!1;if(Ie()!=="firstParty")return!1;let e=a.CLAUDE_CODE_SEND_FEEDBACK;if(e===!1)return!1;if(e===!0)return k("tengu_juniper_relay",!1);return k("tengu_juniper_relay",!1)}function ez(){return J2t()!=="off"&&ezr()}function mSn(e,{storageV5:t,via:r}){let n=j()&&t!==void 0?An("userSettings",{feedbackDrafts:e},void 0,t):An("userSettings",{feedbackDrafts:e});return i("tengu_feedback_drafts_setting_changed",{value:d(e),via:d(r)}),n}
export{J2t,ezr,ez,mSn};
