// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Ai}from"./chunk-afacp8ga.js";import{zt}from"./chunk-sgyvc67j.js";function o(){return Ai({value:"",active:!1,launchWarning:null,vimMode:"INSERT",stash:null})}var r=new zt(()=>o());function jN(n){return r.of(n)}function l5n(n){return jN(n).getState().value}function xpe(n,e){n.setState((t)=>{if(t.value===e)return t;if(t.launchWarning!==null&&t.value!==""&&e==="")return{...t,value:e,launchWarning:null};return{...t,value:e}})}function Pfn(n,e){n.setState((t)=>t.stash===e?t:{...t,stash:e})}function Bht(n,e){n.setState((t)=>t.active===e?t:{...t,active:e})}function hjt(n,e){Bht(jN(n),e)}function s5e(n,e){jN(n).setState((t)=>t.vimMode===e?t:{...t,vimMode:e})}function Ifn(n,e){n.setState((t)=>t.launchWarning?.type===e.type&&t.launchWarning.prefillLength===e.prefillLength?t:{...t,launchWarning:e})}function Ofn(n,e){Ifn(jN(n),e)}
export{jN,l5n,xpe,Pfn,Bht,hjt,s5e,Ifn,Ofn};
