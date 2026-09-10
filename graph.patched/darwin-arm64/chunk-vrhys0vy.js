// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.266
import{da}from"./chunk-n68c1hqr.js";import{Gt}from"./chunk-cet8na02.js";function o(){return da({value:"",active:!1,launchWarning:null,vimMode:"INSERT",stash:null})}var r=new Gt(()=>o());function bN(n){return r.of(n)}function wqn(n){return bN(n).getState().value}function Mde(n,e){n.setState((t)=>{if(t.value===e)return t;if(t.launchWarning!==null&&t.value!==""&&e==="")return{...t,value:e,launchWarning:null};return{...t,value:e}})}function Rdn(n,e){n.setState((t)=>t.stash===e?t:{...t,stash:e})}function dgt(n,e){n.setState((t)=>t.active===e?t:{...t,active:e})}function CBt(n,e){dgt(bN(n),e)}function O9e(n,e){bN(n).setState((t)=>t.vimMode===e?t:{...t,vimMode:e})}function xdn(n,e){n.setState((t)=>t.launchWarning?.type===e.type&&t.launchWarning.prefillLength===e.prefillLength?t:{...t,launchWarning:e})}function Hdn(n,e){xdn(bN(n),e)}
export{bN,wqn,Mde,Rdn,dgt,CBt,O9e,xdn,Hdn};
