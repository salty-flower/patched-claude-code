// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{z6}from"./chunk-kpqr86hf.js";import{k}from"./chunk-bvn0epzr.js";import{ND}from"./chunk-pvfq0951.js";import{wu}from"./chunk-ts26kr2k.js";import{Sae,gme,JDs}from"./chunk-hkdm0cpe.js";function Zen(){return ND()&&!wu().backgroundDeadlineDisabled}function cbo(){return Zen()&&k("tengu_cosmic_shore",!0)}var o=600000;function etn(){return z6()?Math.max(o,Sae()):JDs()}function qCr(e){return cbo()?ttn(e):void 0}function ttn(e){return Math.min(e??etn(),gme())}function yBn(){return Zen()?`Set to true to run this command in the background. With it, \`timeout\` limits how long the command may run in the background before it is stopped (default ${etn()} ms, max ${gme()} ms).`:"Set to true to run this command in the background."}function _Bn(){return Zen()?` With \`run_in_background\` the timeout is instead how long the command may run in the background (default ${etn()}ms / ${Math.round(etn()/60000)} minutes, max ${gme()}ms / ${Math.round(gme()/3600000)} hours); at that limit it is stopped${wu().backgroundShellsKeptElsewhere?"":" and you are notified"}.`:""}var uAs=["user","classifier","auto_mode","hook"];function ubo(e){let n=e.behavior==="allow"?e.decisionReason:void 0;switch(n?.type){case"permissionPromptTool":return"user";case"classifier":return n.classifier==="auto-mode"&&n.classifierAllowed===!0?"classifier":void 0;case"mode":return n.mode==="auto"&&n.denialLimitRun!==!0&&n.scriptCheckDeferred!==!0?"auto_mode":void 0;case"hook":return"hook";default:return}}
export{Zen,cbo,etn,qCr,ttn,yBn,_Bn,uAs,ubo};
