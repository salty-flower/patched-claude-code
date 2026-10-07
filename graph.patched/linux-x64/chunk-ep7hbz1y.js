// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{b0e}from"./chunk-p72qafcy.js";class o{converted=new WeakMap;lookup(e){return this.converted.get(e)}remember(e,t){this.converted.set(e,t)}reset(){this.converted=new WeakMap}}var n=new o;function zI(e){let t=n.lookup(e);if(t)return t;let r=b0e(e,{unrepresentable:"throw"});return n.remember(e,r),r}var iWe="attached:",aWe="created:";function lWe(e){return e.startsWith("created:")}var o9="opened:";function Rse(e){return e.startsWith("attached:")||e.startsWith("created:")||e.startsWith(o9)}function GI(e){return Object.entries(e).filter(([t])=>!t.startsWith(o9))}function Twn(e){return{url:e.url,title:e.title,favicon:e.favicon,kind:"frame",updated_at:new Date(e.updatedAt).toISOString()}}
export{zI,iWe,aWe,lWe,o9,Rse,GI,Twn};
