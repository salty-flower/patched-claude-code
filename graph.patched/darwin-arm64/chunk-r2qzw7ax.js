// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Y}from"./chunk-sgyvc67j.js";import{aZ,HRe,Iie,PRe,IRe}from"./chunk-a1d797br.js";import{ix,Rve,$3,mS,Afe,Doe}from"./chunk-e55d0yhx.js";import{yhe}from"./chunk-vr00zgqz.js";import{r0}from"./chunk-jzyf086v.js";import{Mbe}from"./chunk-55msm2q9.js";import{eae}from"./chunk-h2fj4set.js";function j3e(o,e,t,i){r0("conversation_reset"),ix("conversation_reset"),mS($3),PRe(),Iie(),aZ(),IRe(),HRe(),yhe();let s=Y();for(let r of eae(o.sessionHooksRegistry,s))o.sessionHooksRegistry.remove(s,"Stop",r);t(),Afe(),o.markConversationRemote?.(),Rve(e),Mbe.of(i).emit(s,e.map((r)=>r.uuid)),o.applyMessageOp({type:"replace-all",messages:Doe(e)})}
export{j3e};
