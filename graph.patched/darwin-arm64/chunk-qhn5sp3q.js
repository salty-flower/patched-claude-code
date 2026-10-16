// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{zWe}from"./chunk-d9vq4daa.js";class o{converted=new WeakMap;lookup(e){return this.converted.get(e)}remember(e,t){this.converted.set(e,t)}reset(){this.converted=new WeakMap}}var n=new o;function jH(e){let t=n.lookup(e);if(t)return t;let r=zWe(e,{unrepresentable:"throw"});return n.remember(e,r),r}var j4e="attached:",W4e="created:";function G4e(e){return e.startsWith("created:")}var oG="opened:";function fpe(e){return e.startsWith("attached:")||e.startsWith("created:")||e.startsWith(oG)}function WH(e){return Object.entries(e).filter(([t])=>!t.startsWith(oG))}function NFn(e){return{url:e.url,title:e.title,favicon:e.favicon,kind:"frame",updated_at:new Date(e.updatedAt).toISOString()}}
export{jH,j4e,W4e,G4e,oG,fpe,WH,NFn};
