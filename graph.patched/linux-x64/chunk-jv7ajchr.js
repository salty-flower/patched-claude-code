// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{q,LAe}from"./chunk-dxktn51d.js";import{uMe,dht,IWe,cht,uht}from"./chunk-0vmvv2wk.js";import{rF}from"./chunk-38xgev2z.js";import{OVn}from"./chunk-gzxd3rp1.js";import{GV,c5e,HIt,hPe,Oz,t_}from"./chunk-rncrmfyt.js";import{dXe}from"./chunk-8gckzpfc.js";import{kU}from"./chunk-9747w1pz.js";import{Zwn}from"./chunk-hxgfmpv7.js";import{tbe}from"./chunk-qv7dtxex.js";import{gWe}from"./chunk-s2rsrx51.js";function tKt(e,o,t,i){kU("conversation_reset"),rF("conversation_reset"),t_(Oz),cht(),IWe(),uMe(),uht(),dht(),dXe();let r=q();for(let s of gWe(e.sessionHooksRegistry,r))e.sessionHooksRegistry.remove(r,"Stop",s);t(),c5e(),e.markConversationRemote?.(),OVn(e.readFileState),GV(e.memorySelector),LAe(),hPe(o),Zwn(i,r,o.map((s)=>s.uuid)),e.applyMessageOp({type:"replace-all",messages:HIt(o)}),tbe(!0)}
export{tKt};
