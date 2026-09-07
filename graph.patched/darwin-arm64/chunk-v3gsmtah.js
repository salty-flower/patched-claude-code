// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{a}from"./chunk-dq2s4wjn.js";import{j,B}from"./chunk-zhtwayh2.js";import{Bn,I}from"./chunk-n495pc0t.js";import{gw}from"./chunk-sxccpdbg.js";import{Pt}from"./chunk-2q73xrvs.js";function ECe(){return a.CLAUDE_CODE_DISABLE_WORKFLOWS||gw()?.settings.disableWorkflows===!0}class t{cached=void 0;resolve(){if(this.cached!==void 0)return this.cached;return this.cached=i(),this.cached}}var n=new j(()=>new t);function vc(){if(ECe())return!1;if(!Xwt())return!1;let{available:r,defaultOn:e}=o();if(!r)return!1;return gw()?.settings.enableWorkflows??e}function qwn(){return o().defaultOn}function Kwt(){return Xwt()&&!a.CLAUDE_CODE_DISABLE_WORKFLOWS&&o().available}function UXe(){return gw()?.settings.workflowKeywordTriggerEnabled??!0}function Xwt(){return Pt("allow_workflows")}function FZn(){if(ECe()||!Xwt())return!0;if(gw()?.settings.enableWorkflows===!1)return!0;return a.CLAUDE_CODE_WORKFLOWS===!1||!I("tengu_workflows_enabled",!0)}function o(){return n.of(B().host).resolve()}function i(){if(a.CLAUDE_CODE_WORKFLOWS===!0){let e=I("tengu_workflows_enabled",!0);return{available:e,defaultOn:e}}if(a.CLAUDE_CODE_WORKFLOWS===!1)return{available:!1,defaultOn:!1};if(!I("tengu_workflows_enabled",!0))return{available:!1,defaultOn:!1};return{available:!0,defaultOn:Bn()!=="pro"}}function $Zn(){return I("tengu_jade_compass",!0)}
export{ECe,vc,qwn,Kwt,UXe,Xwt,FZn,$Zn};
