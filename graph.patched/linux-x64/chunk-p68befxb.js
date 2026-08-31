// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{a}from"./chunk-m9gbfvns.js";import{J,W}from"./chunk-30zk17wm.js";import{Nn,x}from"./chunk-1e5y3pjf.js";import{bH}from"./chunk-kc505vjh.js";import{Mt}from"./chunk-k7gygany.js";function wwe(){return a.CLAUDE_CODE_DISABLE_WORKFLOWS||bH()?.settings.disableWorkflows===!0}class t{cached=void 0;resolve(){if(this.cached!==void 0)return this.cached;return this.cached=i(),this.cached}}var n=new J(()=>new t);function Qu(){if(wwe())return!1;if(!Zht())return!1;let{available:r,defaultOn:e}=o();if(!r)return!1;return bH()?.settings.enableWorkflows??e}function Mgn(){return o().defaultOn}function Jht(){return Zht()&&!a.CLAUDE_CODE_DISABLE_WORKFLOWS&&o().available}function Qht(){return bH()?.settings.workflowKeywordTriggerEnabled??!0}function Zht(){return Mt("allow_workflows")}function a7n(){if(wwe()||!Zht())return!0;if(bH()?.settings.enableWorkflows===!1)return!0;return a.CLAUDE_CODE_WORKFLOWS===!1||!x("tengu_workflows_enabled",!0)}function o(){return n.of(W().host).resolve()}function i(){if(a.CLAUDE_CODE_WORKFLOWS===!0){let e=x("tengu_workflows_enabled",!0);return{available:e,defaultOn:e}}if(a.CLAUDE_CODE_WORKFLOWS===!1)return{available:!1,defaultOn:!1};if(!x("tengu_workflows_enabled",!0))return{available:!1,defaultOn:!1};return{available:!0,defaultOn:Nn()!=="pro"}}function l7n(){return x("tengu_jade_compass",!0)}
export{wwe,Qu,Mgn,Jht,Qht,Zht,a7n,l7n};
