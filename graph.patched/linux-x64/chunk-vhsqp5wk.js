// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Qs}from"./chunk-fr2yty3r.js";import{zt}from"./chunk-txfrkyzp.js";function o(){return Qs({value:"",active:!1,launchWarning:null,vimMode:"INSERT",stash:null})}var r=new zt(()=>o());function i1(n){return r.of(n)}function jlr(n){return i1(n).getState().value}function uye(n,e){n.setState((t)=>{if(t.value===e)return t;if(t.launchWarning!==null&&t.value!==""&&e==="")return{...t,value:e,launchWarning:null};return{...t,value:e}})}function Zkn(n,e){n.setState((t)=>t.stash===e?t:{...t,stash:e})}function IEt(n,e){n.setState((t)=>t.active===e?t:{...t,active:e})}function $3t(n,e){IEt(i1(n),e)}function A7e(n,e){i1(n).setState((t)=>t.vimMode===e?t:{...t,vimMode:e})}function eAn(n,e){n.setState((t)=>t.launchWarning?.type===e.type&&t.launchWarning.prefillLength===e.prefillLength?t:{...t,launchWarning:e})}function tAn(n,e){eAn(i1(n),e)}
export{i1,jlr,uye,Zkn,IEt,$3t,A7e,eAn,tAn};
