// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{Ei}from"./chunk-cxhjnr5a.js";import{Wt}from"./chunk-6n7yk222.js";function o(){return Ei({value:"",active:!1,launchWarning:null,vimMode:"INSERT",stash:null})}var r=new Wt(()=>o());function O$(n){return r.of(n)}function P5n(n){return O$(n).getState().value}function wpe(n,e){n.setState((t)=>{if(t.value===e)return t;if(t.launchWarning!==null&&t.value!==""&&e==="")return{...t,value:e,launchWarning:null};return{...t,value:e}})}function afn(n,e){n.setState((t)=>t.stash===e?t:{...t,stash:e})}function Aht(n,e){n.setState((t)=>t.active===e?t:{...t,active:e})}function Zjt(n,e){Aht(O$(n),e)}function q5e(n,e){O$(n).setState((t)=>t.vimMode===e?t:{...t,vimMode:e})}function lfn(n,e){n.setState((t)=>t.launchWarning?.type===e.type&&t.launchWarning.prefillLength===e.prefillLength?t:{...t,launchWarning:e})}function cfn(n,e){lfn(O$(n),e)}
export{O$,P5n,wpe,afn,Aht,Zjt,q5e,lfn,cfn};
