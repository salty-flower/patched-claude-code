// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{a}from"./chunk-td8fcebs.js";import{G,U}from"./chunk-bj7g1p32.js";import{Yn,x}from"./chunk-3e93vkg3.js";import{mH}from"./chunk-qyjj7h0q.js";import{Lt}from"./chunk-fet7e4b8.js";function gve(){return a.CLAUDE_CODE_DISABLE_WORKFLOWS||mH()?.settings.disableWorkflows===!0}class t{cached=void 0;resolve(){if(this.cached!==void 0)return this.cached;return this.cached=i(),this.cached}}var n=new G(()=>new t);function Ac(){if(gve())return!1;if(!LHt())return!1;let{available:r,defaultOn:e}=o();if(!r)return!1;return mH()?.settings.enableWorkflows??e}function hHn(){return o().defaultOn}function xHt(){return LHt()&&!a.CLAUDE_CODE_DISABLE_WORKFLOWS&&o().available}function AXe(){return mH()?.settings.workflowKeywordTriggerEnabled??!0}function LHt(){return Lt("allow_workflows")}function eZn(){if(gve()||!LHt())return!0;if(mH()?.settings.enableWorkflows===!1)return!0;return a.CLAUDE_CODE_WORKFLOWS===!1||!x("tengu_workflows_enabled",!0)}function o(){return n.of(U().host).resolve()}function i(){if(a.CLAUDE_CODE_WORKFLOWS===!0){let e=x("tengu_workflows_enabled",!0);return{available:e,defaultOn:e}}if(a.CLAUDE_CODE_WORKFLOWS===!1)return{available:!1,defaultOn:!1};if(!x("tengu_workflows_enabled",!0))return{available:!1,defaultOn:!1};return{available:!0,defaultOn:Yn()!=="pro"}}function tZn(){return x("tengu_jade_compass",!0)}
export{gve,Ac,hHn,xHt,AXe,LHt,eZn,tZn};
