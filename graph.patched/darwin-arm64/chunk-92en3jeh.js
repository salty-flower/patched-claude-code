// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{a}from"./chunk-w3k8bej2.js";import{J,G}from"./chunk-38213y7h.js";import{Fn,I}from"./chunk-bsdtxcdc.js";import{Sw}from"./chunk-4k4029wq.js";import{Mt}from"./chunk-y97hdknc.js";function HTe(){return a.CLAUDE_CODE_DISABLE_WORKFLOWS||Sw()?.settings.disableWorkflows===!0}class t{cached=void 0;resolve(){if(this.cached!==void 0)return this.cached;return this.cached=i(),this.cached}}var n=new J(()=>new t);function Zu(){if(HTe())return!1;if(!y_t())return!1;let{available:r,defaultOn:e}=o();if(!r)return!1;return Sw()?.settings.enableWorkflows??e}function ehn(){return o().defaultOn}function h_t(){return y_t()&&!a.CLAUDE_CODE_DISABLE_WORKFLOWS&&o().available}function __t(){return Sw()?.settings.workflowKeywordTriggerEnabled??!0}function y_t(){return Mt("allow_workflows")}function AJn(){if(HTe()||!y_t())return!0;if(Sw()?.settings.enableWorkflows===!1)return!0;return a.CLAUDE_CODE_WORKFLOWS===!1||!I("tengu_workflows_enabled",!0)}function o(){return n.of(G().host).resolve()}function i(){if(a.CLAUDE_CODE_WORKFLOWS===!0){let e=I("tengu_workflows_enabled",!0);return{available:e,defaultOn:e}}if(a.CLAUDE_CODE_WORKFLOWS===!1)return{available:!1,defaultOn:!1};if(!I("tengu_workflows_enabled",!0))return{available:!1,defaultOn:!1};return{available:!0,defaultOn:Fn()!=="pro"}}function CJn(){return I("tengu_jade_compass",!0)}
export{HTe,Zu,ehn,h_t,__t,y_t,AJn,CJn};
