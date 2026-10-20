// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{NK}from"./chunk-dxktn51d.js";import{k}from"./chunk-7p6jp6kj.js";import{ML}from"./chunk-zjcj7ams.js";import{Su}from"./chunk-k6w93v2g.js";import{pae,cme,pLs}from"./chunk-57xntb92.js";function Fen(){return ML()&&!Su().backgroundDeadlineDisabled}function Dbo(){return Fen()&&k("tengu_cosmic_shore",!0)}var o=600000;function Uen(){return NK()?Math.max(o,pae()):pLs()}function CTr(e){return Dbo()?Ben(e):void 0}function Ben(e){return Math.min(e??Uen(),cme())}function QBn(){return Fen()?`Set to true to run this command in the background. With it, \`timeout\` limits how long the command may run in the background before it is stopped (default ${Uen()} ms, max ${cme()} ms).`:"Set to true to run this command in the background."}function ZBn(){return Fen()?` With \`run_in_background\` the timeout is instead how long the command may run in the background (default ${Uen()}ms / ${Math.round(Uen()/60000)} minutes, max ${cme()}ms / ${Math.round(cme()/3600000)} hours); at that limit it is stopped${Su().backgroundShellsKeptElsewhere?"":" and you are notified"}.`:""}var AAs=["user","classifier","auto_mode","hook"];function Lbo(e){let n=e.behavior==="allow"?e.decisionReason:void 0;switch(n?.type){case"permissionPromptTool":return"user";case"classifier":return n.classifier==="auto-mode"&&n.classifierAllowed===!0?"classifier":void 0;case"mode":return n.mode==="auto"&&n.denialLimitRun!==!0&&n.scriptCheckDeferred!==!0?"auto_mode":void 0;case"hook":return"hook";default:return}}
export{Fen,Dbo,Uen,CTr,Ben,QBn,ZBn,AAs,Lbo};
