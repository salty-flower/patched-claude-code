// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Ma}from"./chunk-wf49g251.js";var r={value:"",active:!1,launchWarning:null,vimMode:"INSERT"};function o(){return Ma({...r})}var j_=o();function IZ(){return j_.getState().value}function aOt(n,t){n.setState((e)=>{if(e.value===t)return e;if(e.launchWarning!==null&&e.value!==""&&t==="")return{...e,value:t,launchWarning:null};return{...e,value:t}})}function EWe(n){aOt(j_,n)}function Yst(n,t){n.setState((e)=>e.active===t?e:{...e,active:t})}function lOt(n){Yst(j_,n)}function $tn(n){j_.setState((t)=>t.vimMode===n?t:{...t,vimMode:n})}function Utn(n,t){n.setState((e)=>e.launchWarning?.type===t.type&&e.launchWarning.prefillLength===t.prefillLength?e:{...e,launchWarning:t})}function Btn(n){Utn(j_,n)}
export{j_,IZ,aOt,EWe,Yst,lOt,$tn,Utn,Btn};
