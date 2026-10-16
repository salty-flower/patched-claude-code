// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{V2}from"./chunk-eqmywwjn.js";import{k}from"./chunk-k16gymf7.js";import{DB}from"./chunk-en4g449d.js";import{mm}from"./chunk-vnekd4yc.js";import{tie,Gpe,LTs}from"./chunk-szfbs79q.js";function qJt(){return DB()&&!mm().backgroundDeadlineDisabled}function Quo(){return qJt()&&k("tengu_cosmic_shore",!0)}var n=600000;function YJt(){return V2()?Math.max(n,tie()):LTs()}function Fbr(e){return Quo()?XJt(e):void 0}function XJt(e){return Math.min(e??YJt(),Gpe())}function fNn(){return qJt()?`Set to true to run this command in the background. With it, \`timeout\` limits how long the command may run in the background before it is stopped (default ${YJt()} ms, max ${Gpe()} ms).`:"Set to true to run this command in the background."}function mNn(){return qJt()?` With \`run_in_background\` the timeout is instead how long the command may run in the background (default ${YJt()}ms / ${Math.round(YJt()/60000)} minutes, max ${Gpe()}ms / ${Math.round(Gpe()/3600000)} hours); at that limit it is stopped and you are notified.`:""}
export{qJt,Quo,YJt,Fbr,XJt,fNn,mNn};
