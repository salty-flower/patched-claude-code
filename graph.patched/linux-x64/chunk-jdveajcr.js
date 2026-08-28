// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{a}from"./chunk-g0kfvhx3.js";import{K,z}from"./chunk-2vv5hpw3.js";import{Tn,x}from"./chunk-ns0ekkj0.js";import{Dv}from"./chunk-a891q37t.js";import{xt}from"./chunk-k7k51kt3.js";function L_e(){return a.CLAUDE_CODE_DISABLE_WORKFLOWS||Dv()?.settings.disableWorkflows===!0}class t{cached=void 0;resolve(){if(this.cached!==void 0)return this.cached;return this.cached=i(),this.cached}}var n=new K(()=>new t);function Hu(){if(L_e())return!1;if(!Bft())return!1;let{available:r,defaultOn:e}=o();if(!r)return!1;return Dv()?.settings.enableWorkflows??e}function Eun(){return o().defaultOn}function Lqe(){return Bft()&&!a.CLAUDE_CODE_DISABLE_WORKFLOWS&&o().available}function Fft(){return Dv()?.settings.workflowKeywordTriggerEnabled??!0}function Bft(){return xt("allow_workflows")}function o6n(){if(L_e()||!Bft())return!0;if(Dv()?.settings.enableWorkflows===!1)return!0;return a.CLAUDE_CODE_WORKFLOWS===!1||!x("tengu_workflows_enabled",!0)}function o(){return n.of(z().host).resolve()}function i(){if(a.CLAUDE_CODE_WORKFLOWS===!0){let e=x("tengu_workflows_enabled",!0);return{available:e,defaultOn:e}}if(a.CLAUDE_CODE_WORKFLOWS===!1)return{available:!1,defaultOn:!1};if(!x("tengu_workflows_enabled",!0))return{available:!1,defaultOn:!1};return{available:!0,defaultOn:Tn()!=="pro"}}function i6n(){return x("tengu_jade_compass",!0)}
export{L_e,Hu,Eun,Lqe,Fft,Bft,o6n,i6n};
