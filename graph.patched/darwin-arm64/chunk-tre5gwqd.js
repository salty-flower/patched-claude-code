// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{t}from"./chunk-3wz0srxw.js";import{Rxe}from"./chunk-zpb414p7.js";import{QO}from"./chunk-kmg6r51d.js";import{to}from"./chunk-pj3wn6z3.js";var vcr={};to(vcr,{builtinToolSchemasOf:()=>b4t,default:()=>vcr});function Ecr(e){try{return Rxe(e,{unrepresentable:"any"})}catch(o){t(`plugin-types: an output schema did not convert: ${o}`);return}}var b4t=(e)=>e.filter((o)=>o.isMcp!==!0).map((o)=>({name:o.name,inputSchema:o.inputJSONSchema??QO(o.inputSchema),...o.outputSchema!==void 0&&{outputSchema:Ecr(o.outputSchema)}}));export{Ecr,b4t,vcr};
