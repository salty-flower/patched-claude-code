// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{a}from"./chunk-g2ngvza5.js";import{z,q}from"./chunk-yhfssb7x.js";import{Kn,P}from"./chunk-vtwn1md5.js";import{Vw}from"./chunk-v3s7w1dm.js";import{$t}from"./chunk-kd6kxh5q.js";function hve(){return a.CLAUDE_CODE_DISABLE_WORKFLOWS||Vw()?.settings.disableWorkflows===!0}class t{cached=void 0;resolve(){if(this.cached!==void 0)return this.cached;return this.cached=i(),this.cached}}var n=new z(()=>new t);function Oc(){if(hve())return!1;if(!ETt())return!1;let{available:r,defaultOn:e}=o();if(!r)return!1;return Vw()?.settings.enableWorkflows??e}function iEn(){return o().defaultOn}function TTt(){return ETt()&&!a.CLAUDE_CODE_DISABLE_WORKFLOWS&&o().available}function WYe(){return Vw()?.settings.workflowKeywordTriggerEnabled??!0}function ETt(){return $t("allow_workflows")}function Orr(){if(hve()||!ETt())return!0;if(Vw()?.settings.enableWorkflows===!1)return!0;return a.CLAUDE_CODE_WORKFLOWS===!1||!P("tengu_workflows_enabled",!0)}function o(){return n.of(q().host).resolve()}function i(){if(a.CLAUDE_CODE_WORKFLOWS===!0){let e=P("tengu_workflows_enabled",!0);return{available:e,defaultOn:e}}if(a.CLAUDE_CODE_WORKFLOWS===!1)return{available:!1,defaultOn:!1};if(!P("tengu_workflows_enabled",!0))return{available:!1,defaultOn:!1};return{available:!0,defaultOn:Kn()!=="pro"}}function Drr(){return P("tengu_jade_compass",!0)}
export{hve,Oc,iEn,TTt,WYe,ETt,Orr,Drr};
