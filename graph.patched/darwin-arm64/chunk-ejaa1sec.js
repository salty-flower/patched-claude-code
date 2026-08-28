// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{j}from"./chunk-6g06harn.js";import{Nv,Ot,Ug}from"./chunk-ghnc2x4f.js";import{rs}from"./chunk-k81452wq.js";import{att,RX}from"./chunk-rky7dxrc.js";import{E,q,zT,N}from"./chunk-5752v0zq.js";N();N();function CA(){let[o,e]=zT((s)=>s+1,0);return E(()=>Ug(e),[]),o}function VQe(o,e){return att(o)??att(e)??Nv()}function u5(){let o=j((n)=>n.mainLoopModel),e=j((n)=>n.mainLoopModelForSession),s=CA(),r=rs();return q(()=>RX(e,o),[e,o,s,r])}function KQe(){let o=j((n)=>n.mainLoopModel),e=j((n)=>n.mainLoopModelForSession),s=CA(),r=rs();return q(()=>VQe(e,o),[e,o,s,r])}function Dc(){let o=j((n)=>n.mainLoopModel),e=j((n)=>n.mainLoopModelForSession),s=CA(),r=rs();return q(()=>Ot(VQe(e,o)),[e,o,s,r])}
export{CA,VQe,u5,KQe,Dc};
