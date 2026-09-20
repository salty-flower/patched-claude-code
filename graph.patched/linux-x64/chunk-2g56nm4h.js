// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{J}from"./chunk-txfrkyzp.js";import{soe,oDe,_pe,sDe,iDe}from"./chunk-c5s0b8jh.js";import{VPe,Mq,JS,ZC,ySe,cD,mue}from"./chunk-v4zgc4qd.js";import{h1t}from"./chunk-q340fxjb.js";import{jve}from"./chunk-6y1ewrzw.js";import{iP}from"./chunk-5smyeq0d.js";import{CCe}from"./chunk-zfwm6e0y.js";import{Bpe}from"./chunk-wvg0yfjv.js";function gXe(e,o,t,i){iP("conversation_reset"),ZC("conversation_reset"),JS(Mq),sDe(),_pe(),soe(),iDe(),oDe(),jve();let r=J();for(let s of Bpe(e.sessionHooksRegistry,r))e.sessionHooksRegistry.remove(r,"Stop",s);t(),ySe(),e.markConversationRemote?.(),h1t(e.readFileState,e.loadedNestedMemoryPaths),cD(e.memorySelector),VPe(o),CCe.of(i).emit(r,o.map((s)=>s.uuid)),e.applyMessageOp({type:"replace-all",messages:mue(o)})}
export{gXe};
