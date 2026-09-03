// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{Ah,At,Ff}from"./chunk-h6md7820.js";import{W}from"./chunk-hx7hd5mf.js";import{Hs}from"./chunk-0q7gpbcf.js";import{C,z,yk,j}from"./chunk-xyxaqzpf.js";import{$De,une}from"./chunk-darxmw8c.js";j();function ZR(){let[o,e]=yk((r)=>r+1,0);return C(()=>Ff(e),[]),o}function W4(o){return ZR(),o()}j();function PIt(o,e){return $De(o)??$De(e)??Ah()}function Lit(o){return At(PIt(o.mainLoopModelForSession,o.mainLoopModel))}function D8(){let o=W((n)=>n.mainLoopModel),e=W((n)=>n.mainLoopModelForSession),r=ZR(),i=Hs();return z(()=>une(e,o),[e,o,r,i])}function Mit(){let o=W((n)=>n.mainLoopModel),e=W((n)=>n.mainLoopModelForSession),r=ZR(),i=Hs();return z(()=>PIt(e,o),[e,o,r,i])}function rl(){let o=W((n)=>n.mainLoopModel),e=W((n)=>n.mainLoopModelForSession),r=ZR(),i=Hs();return z(()=>Lit({mainLoopModel:o,mainLoopModelForSession:e}),[e,o,r,i])}
export{ZR,W4,PIt,Lit,D8,Mit,rl};
