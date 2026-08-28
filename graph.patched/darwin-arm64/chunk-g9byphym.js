// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{a}from"./chunk-bn8q5mbz.js";import{K,W}from"./chunk-g4zaymy2.js";import{An,x}from"./chunk-ghnc2x4f.js";import{HS}from"./chunk-2694tw3t.js";import{xt}from"./chunk-dd7crjgj.js";function kbe(){return a.CLAUDE_CODE_DISABLE_WORKFLOWS||HS()?.settings.disableWorkflows===!0}class t{cached=void 0;resolve(){if(this.cached!==void 0)return this.cached;return this.cached=i(),this.cached}}var n=new K(()=>new t);function Ru(){if(kbe())return!1;if(!Tft())return!1;let{available:r,defaultOn:e}=o();if(!r)return!1;return HS()?.settings.enableWorkflows??e}function cun(){return o().defaultOn}function wze(){return Tft()&&!a.CLAUDE_CODE_DISABLE_WORKFLOWS&&o().available}function wft(){return HS()?.settings.workflowKeywordTriggerEnabled??!0}function Tft(){return xt("allow_workflows")}function Xqn(){if(kbe()||!Tft())return!0;if(HS()?.settings.enableWorkflows===!1)return!0;return a.CLAUDE_CODE_WORKFLOWS===!1||!x("tengu_workflows_enabled",!0)}function o(){return n.of(W().host).resolve()}function i(){if(a.CLAUDE_CODE_WORKFLOWS===!0){let e=x("tengu_workflows_enabled",!0);return{available:e,defaultOn:e}}if(a.CLAUDE_CODE_WORKFLOWS===!1)return{available:!1,defaultOn:!1};if(!x("tengu_workflows_enabled",!0))return{available:!1,defaultOn:!1};return{available:!0,defaultOn:An()!=="pro"}}function Jqn(){return x("tengu_jade_compass",!0)}
export{kbe,Ru,cun,wze,wft,Tft,Xqn,Jqn};
