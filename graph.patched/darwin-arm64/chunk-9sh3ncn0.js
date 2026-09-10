// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{a}from"./chunk-dv6tepz3.js";import{W,B}from"./chunk-sgyvc67j.js";import{jn,H}from"./chunk-e02s7cks.js";import{RE}from"./chunk-ysx7ez10.js";import{Ft}from"./chunk-ea584spk.js";function bxe(){return a.CLAUDE_CODE_DISABLE_WORKFLOWS||RE()?.settings.disableWorkflows===!0}class t{cached=void 0;resolve(){if(this.cached!==void 0)return this.cached;return this.cached=i(),this.cached}}var n=new W(()=>new t);function qc(){if(bxe())return!1;if(!ERt())return!1;let{available:r,defaultOn:e}=o();if(!r)return!1;return RE()?.settings.enableWorkflows??e}function e0n(){return o().defaultOn}function wRt(){return ERt()&&!a.CLAUDE_CODE_DISABLE_WORKFLOWS&&o().available}function Ltt(){return RE()?.settings.workflowKeywordTriggerEnabled??!0}function ERt(){return Ft("allow_workflows")}function idr(){if(bxe()||!ERt())return!0;if(RE()?.settings.enableWorkflows===!1)return!0;return a.CLAUDE_CODE_WORKFLOWS===!1||!H("tengu_workflows_enabled",!0)}function o(){return n.of(B().host).resolve()}function i(){if(a.CLAUDE_CODE_WORKFLOWS===!0){let e=H("tengu_workflows_enabled",!0);return{available:e,defaultOn:e}}if(a.CLAUDE_CODE_WORKFLOWS===!1)return{available:!1,defaultOn:!1};if(!H("tengu_workflows_enabled",!0))return{available:!1,defaultOn:!1};return{available:!0,defaultOn:jn()!=="pro"}}function adr(){return H("tengu_jade_compass",!0)}
export{bxe,qc,e0n,wRt,Ltt,ERt,idr,adr};
