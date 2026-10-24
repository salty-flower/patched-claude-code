// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{GK}from"./chunk-ersar6wn.js";import{k}from"./chunk-27xjmczp.js";import{nN}from"./chunk-we9anmwe.js";import{wp}from"./chunk-4y48t4gh.js";import{Nde,nye,vVs}from"./chunk-rgx6q5w4.js";function lan(){return nN()&&!wp().backgroundDeadlineDisabled}function PIo(){return lan()&&k("tengu_cosmic_shore",!0)}var o=600000;function dan(){return GK()?Math.max(o,Nde()):vVs()}function QHr(e){return PIo()?can(e):void 0}function can(e){return Math.min(e??dan(),nye())}function tKn(){return lan()?`Set to true to run this command in the background. With it, \`timeout\` limits how long the command may run in the background before it is stopped (default ${dan()} ms, max ${nye()} ms).`:"Set to true to run this command in the background."}function nKn(){return lan()?` With \`run_in_background\` the timeout is instead how long the command may run in the background (default ${dan()}ms / ${Math.round(dan()/60000)} minutes, max ${nye()}ms / ${Math.round(nye()/3600000)} hours); at that limit it is stopped${wp().backgroundShellsKeptElsewhere?"":" and you are notified"}.`:""}var oUs=["user","classifier","auto_mode","hook"];function IIo(e){let n=e.behavior==="allow"?e.decisionReason:void 0;switch(n?.type){case"permissionPromptTool":return"user";case"classifier":return n.classifier==="auto-mode"&&n.classifierAllowed===!0?"classifier":void 0;case"mode":return n.mode==="auto"&&n.denialLimitRun!==!0&&n.scriptCheckDeferred!==!0?"auto_mode":void 0;case"hook":return"hook";default:return}}
export{lan,PIo,dan,QHr,can,tKn,nKn,oUs,IIo};
