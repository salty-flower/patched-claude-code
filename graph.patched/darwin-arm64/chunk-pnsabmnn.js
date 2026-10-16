// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{t6}from"./chunk-xzypj06m.js";import{k}from"./chunk-1901fdh6.js";import{j1}from"./chunk-jn6attna.js";import{mm}from"./chunk-5kvhbyg2.js";import{lie,Xpe,wAs}from"./chunk-beb9skfa.js";function lJt(){return j1()&&!mm().backgroundDeadlineDisabled}function Tpo(){return lJt()&&k("tengu_cosmic_shore",!0)}var n=600000;function dJt(){return t6()?Math.max(n,lie()):wAs()}function ibr(e){return Tpo()?cJt(e):void 0}function cJt(e){return Math.min(e??dJt(),Xpe())}function ONn(){return lJt()?`Set to true to run this command in the background. With it, \`timeout\` limits how long the command may run in the background before it is stopped (default ${dJt()} ms, max ${Xpe()} ms).`:"Set to true to run this command in the background."}function HNn(){return lJt()?` With \`run_in_background\` the timeout is instead how long the command may run in the background (default ${dJt()}ms / ${Math.round(dJt()/60000)} minutes, max ${Xpe()}ms / ${Math.round(Xpe()/3600000)} hours); at that limit it is stopped and you are notified.`:""}
export{lJt,Tpo,dJt,ibr,cJt,ONn,HNn};
