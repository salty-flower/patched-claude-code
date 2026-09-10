// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{a}from"./chunk-1bwwmttj.js";import{z,B}from"./chunk-6n7yk222.js";import{Vn,I}from"./chunk-ce4ppmnp.js";import{Cv}from"./chunk-8fer6cmv.js";import{Nt}from"./chunk-k2cr3wah.js";function fxe(){return a.CLAUDE_CODE_DISABLE_WORKFLOWS||Cv()?.settings.disableWorkflows===!0}class t{cached=void 0;resolve(){if(this.cached!==void 0)return this.cached;return this.cached=i(),this.cached}}var n=new z(()=>new t);function qc(){if(fxe())return!1;if(!iRt())return!1;let{available:r,defaultOn:e}=o();if(!r)return!1;return Cv()?.settings.enableWorkflows??e}function IIn(){return o().defaultOn}function sRt(){return iRt()&&!a.CLAUDE_CODE_DISABLE_WORKFLOWS&&o().available}function vtt(){return Cv()?.settings.workflowKeywordTriggerEnabled??!0}function iRt(){return Nt("allow_workflows")}function kur(){if(fxe()||!iRt())return!0;if(Cv()?.settings.enableWorkflows===!1)return!0;return a.CLAUDE_CODE_WORKFLOWS===!1||!I("tengu_workflows_enabled",!0)}function o(){return n.of(B().host).resolve()}function i(){if(a.CLAUDE_CODE_WORKFLOWS===!0){let e=I("tengu_workflows_enabled",!0);return{available:e,defaultOn:e}}if(a.CLAUDE_CODE_WORKFLOWS===!1)return{available:!1,defaultOn:!1};if(!I("tengu_workflows_enabled",!0))return{available:!1,defaultOn:!1};return{available:!0,defaultOn:Vn()!=="pro"}}function Aur(){return I("tengu_jade_compass",!0)}
export{fxe,qc,IIn,sRt,vtt,iRt,kur,Aur};
