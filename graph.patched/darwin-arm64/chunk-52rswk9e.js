// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{Ze}from"./chunk-j79dwkaq.js";import{r4}from"./chunk-epan1q4y.js";import{Pd,yu,Bv}from"./chunk-zc9jwmmw.js";import{xk,Ble,l3}from"./chunk-31gxg38t.js";import{WD}from"./chunk-wt44aey8.js";import{Lv}from"./chunk-emh9bc9e.js";import{Ni}from"./chunk-gqevy7zx.js";function i(t){return[t.toolAliases,t.permissions().toolAliases]}function rSr(t){let o=i(t).flatMap((s)=>Object.entries(s??{})),e=o.flatMap(([s,n])=>[...n===r4?[s]:[],...s===r4?[n]:[]]);return[r4,...e,...o.flatMap(([s,n])=>e.includes(n)?[s]:[])]}function r(t){let o=t.permissions(),e=rSr(t);return[...Pd(o),...yu(o)].some((s)=>Ze(s.ruleValue.ruleContent??"",":").trim()==="path"&&e.some((n)=>Bv(o,{name:n},s)))}function X0n(t,o){if(rSr(o).some((e)=>Ni("tool.call",{tool:e})||Ni("tool.check",{tool:e},Lv("tool.check")))||WD("PostToolBatch")||l3("PostToolBatch",o.sessionHooksRegistry,xk(o,"PostToolBatch",o.session.id))||["PreToolUse","PostToolUse"].some((e)=>i(o).some((s)=>Ble({hookEvent:e,toolName:r4,toolInput:t,tools:o.tools,toolAliases:s,sessionHooks:o.sessionHooksRegistry,sessionId:xk(o,e,o.session.id)}))))return"hook";return r(o)?"path_rule":void 0}
export{rSr,X0n};
