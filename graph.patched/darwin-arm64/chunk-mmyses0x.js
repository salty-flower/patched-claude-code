// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{a}from"./chunk-qymratxs.js";import{j,B}from"./chunk-cet8na02.js";import{Vn,H}from"./chunk-vryy7b5x.js";import{pE}from"./chunk-1qb0n0qf.js";import{Nt}from"./chunk-zt6267d7.js";function uRe(){return a.CLAUDE_CODE_DISABLE_WORKFLOWS||pE()?.settings.disableWorkflows===!0}class t{cached=void 0;resolve(){if(this.cached!==void 0)return this.cached;return this.cached=i(),this.cached}}var n=new j(()=>new t);function jc(){if(uRe())return!1;if(!$Tt())return!1;let{available:r,defaultOn:e}=o();if(!r)return!1;return pE()?.settings.enableWorkflows??e}function bRn(){return o().defaultOn}function FTt(){return $Tt()&&!a.CLAUDE_CODE_DISABLE_WORKFLOWS&&o().available}function tet(){return pE()?.settings.workflowKeywordTriggerEnabled??!0}function $Tt(){return Nt("allow_workflows")}function Xar(){if(uRe()||!$Tt())return!0;if(pE()?.settings.enableWorkflows===!1)return!0;return a.CLAUDE_CODE_WORKFLOWS===!1||!H("tengu_workflows_enabled",!0)}function o(){return n.of(B().host).resolve()}function i(){if(a.CLAUDE_CODE_WORKFLOWS===!0){let e=H("tengu_workflows_enabled",!0);return{available:e,defaultOn:e}}if(a.CLAUDE_CODE_WORKFLOWS===!1)return{available:!1,defaultOn:!1};if(!H("tengu_workflows_enabled",!0))return{available:!1,defaultOn:!1};return{available:!0,defaultOn:Vn()!=="pro"}}function Jar(){return H("tengu_jade_compass",!0)}
export{uRe,jc,bRn,FTt,tet,$Tt,Xar,Jar};
