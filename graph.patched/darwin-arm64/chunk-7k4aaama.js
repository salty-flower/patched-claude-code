// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{J}from"./chunk-sgamszzq.js";import{doe,fLe,Cpe,mLe,gLe}from"./chunk-7b9261ss.js";import{rPe,BG,Qb,nR,Cbe,wL,wue}from"./chunk-nq62bgfy.js";import{O$t}from"./chunk-vfmbed55.js";import{JEe}from"./chunk-d4eea6et.js";import{dH}from"./chunk-g92k7atw.js";import{jke}from"./chunk-yz6h1c9t.js";import{Kpe}from"./chunk-ycdabn6c.js";function $7e(e,o,t,i){dH("conversation_reset"),nR("conversation_reset"),Qb(BG),mLe(),Cpe(),doe(),gLe(),fLe(),JEe();let r=J();for(let s of Kpe(e.sessionHooksRegistry,r))e.sessionHooksRegistry.remove(r,"Stop",s);t(),Cbe(),e.markConversationRemote?.(),O$t(e.readFileState,e.loadedNestedMemoryPaths),wL(e.memorySelector),rPe(o),jke.of(i).emit(r,o.map((s)=>s.uuid)),e.applyMessageOp({type:"replace-all",messages:wue(o)})}
export{$7e};
