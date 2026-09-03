// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{a}from"./chunk-pv906ex9.js";import{X,G}from"./chunk-hdbxv3pp.js";import{Xn,P}from"./chunk-h6md7820.js";import{MT}from"./chunk-tgbc60ar.js";import{Ft}from"./chunk-zskn8f78.js";function YAe(){return a.CLAUDE_CODE_DISABLE_WORKFLOWS||MT()?.settings.disableWorkflows===!0}class t{cached=void 0;resolve(){if(this.cached!==void 0)return this.cached;return this.cached=i(),this.cached}}var n=new X(()=>new t);function vc(){if(YAe())return!1;if(!bbt())return!1;let{available:r,defaultOn:e}=o();if(!r)return!1;return MT()?.settings.enableWorkflows??e}function ZSn(){return o().defaultOn}function Sbt(){return bbt()&&!a.CLAUDE_CODE_DISABLE_WORKFLOWS&&o().available}function tXe(){return MT()?.settings.workflowKeywordTriggerEnabled??!0}function bbt(){return Ft("allow_workflows")}function BZn(){if(YAe()||!bbt())return!0;if(MT()?.settings.enableWorkflows===!1)return!0;return a.CLAUDE_CODE_WORKFLOWS===!1||!P("tengu_workflows_enabled",!0)}function o(){return n.of(G().host).resolve()}function i(){if(a.CLAUDE_CODE_WORKFLOWS===!0){let e=P("tengu_workflows_enabled",!0);return{available:e,defaultOn:e}}if(a.CLAUDE_CODE_WORKFLOWS===!1)return{available:!1,defaultOn:!1};if(!P("tengu_workflows_enabled",!0))return{available:!1,defaultOn:!1};return{available:!0,defaultOn:Xn()!=="pro"}}function jZn(){return P("tengu_jade_compass",!0)}
export{YAe,vc,ZSn,Sbt,tXe,bbt,BZn,jZn};
