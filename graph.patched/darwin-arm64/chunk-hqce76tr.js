// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{p}from"./chunk-h58p4vvs.js";import{i}from"./chunk-n1cpnz94.js";import{bbe,kq}from"./chunk-3e6pdcy8.js";import{Te}from"./chunk-39j7k06t.js";import{l}from"./chunk-hm8vbfs0.js";import{Vn,I0}from"./chunk-gbez09mv.js";import{k}from"./chunk-axsjfnwn.js";import{fce}from"./chunk-106sk3sk.js";import{X}from"./chunk-bgsak306.js";function _yn(){return I0("feedbackDrafts")[0]??"notify"}function UGo(){if(fce()!==null)return!1;if(bbe())return!1;if(kq())return!1;if(Te()!=="firstParty")return!1;let e=i.CLAUDE_CODE_SEND_FEEDBACK;if(e===!1)return!1;if(e===!0)return k("tengu_juniper_relay",!1);return k("tengu_juniper_relay",!1)}function W9(){return _yn()!=="off"&&UGo()}function hJn(e,{storageV5:t,via:r}){let n=X()&&t!==void 0?Vn("userSettings",{feedbackDrafts:e},void 0,t):Vn("userSettings",{feedbackDrafts:e});return l("tengu_feedback_drafts_setting_changed",{value:p(e),via:p(r)}),n}
export{_yn,UGo,W9,hJn};
