// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{j}from"./chunk-6v460cp3.js";import{$S,Lt,Bg}from"./chunk-ns0ekkj0.js";import{rs}from"./chunk-f5625rx3.js";import{itt,AX}from"./chunk-84yan5pb.js";import{A,W,zE,N}from"./chunk-q0z49y3j.js";N();N();function ET(){let[o,e]=zE((s)=>s+1,0);return A(()=>Bg(e),[]),o}function qQe(o,e){return itt(o)??itt(e)??$S()}function aW(){let o=j((n)=>n.mainLoopModel),e=j((n)=>n.mainLoopModelForSession),s=ET(),r=rs();return W(()=>AX(e,o),[e,o,s,r])}function VQe(){let o=j((n)=>n.mainLoopModel),e=j((n)=>n.mainLoopModelForSession),s=ET(),r=rs();return W(()=>qQe(e,o),[e,o,s,r])}function Pc(){let o=j((n)=>n.mainLoopModel),e=j((n)=>n.mainLoopModelForSession),s=ET(),r=rs();return W(()=>Lt(qQe(e,o)),[e,o,s,r])}
export{ET,qQe,aW,VQe,Pc};
