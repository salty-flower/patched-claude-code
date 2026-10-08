// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{B}from"./chunk-a48152q4.js";import{d}from"./chunk-eak61y8v.js";import{a}from"./chunk-70qqbqq4.js";import{blt,KU}from"./chunk-pf8p4bsg.js";import{Pe}from"./chunk-fsnz81vy.js";import{i}from"./chunk-ne43gjnt.js";import{Sn,yx}from"./chunk-48by85wp.js";import{C}from"./chunk-gcyvvtkw.js";import{Jie}from"./chunk-zwe9vtev.js";function c1t(){return yx("feedbackDrafts")[0]??"notify"}function f1r(){if(Jie()!==null)return!1;if(blt())return!1;if(KU())return!1;if(Pe()!=="firstParty")return!1;let e=a.CLAUDE_CODE_SEND_FEEDBACK;if(e===!1)return!1;if(e===!0)return C("tengu_juniper_relay",!1);return C("tengu_juniper_relay",!1)}function DW(){return c1t()!=="off"&&f1r()}function Ffn(e,{storageV5:t,via:r}){let n=B()&&t!==void 0?Sn("userSettings",{feedbackDrafts:e},void 0,t):Sn("userSettings",{feedbackDrafts:e});return i("tengu_feedback_drafts_setting_changed",{value:d(e),via:d(r)}),n}
export{c1t,f1r,DW,Ffn};
