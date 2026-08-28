// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Ra}from"./chunk-xc5hdwza.js";var r={value:"",active:!1,launchWarning:null,vimMode:"INSERT"};function o(){return Ra({...r})}var K_=o();function rJ(){return K_.getState().value}function Ixt(n,t){n.setState((e)=>{if(e.value===t)return e;if(e.launchWarning!==null&&e.value!==""&&t==="")return{...e,value:t,launchWarning:null};return{...e,value:t}})}function mrt(n){Ixt(K_,n)}function hrt(n,t){n.setState((e)=>e.active===t?e:{...e,active:t})}function Pxt(n){hrt(K_,n)}function bXt(n){K_.setState((t)=>t.vimMode===n?t:{...t,vimMode:n})}function SXt(n,t){n.setState((e)=>e.launchWarning?.type===t.type&&e.launchWarning.prefillLength===t.prefillLength?e:{...e,launchWarning:t})}function vXt(n){SXt(K_,n)}
export{K_,rJ,Ixt,mrt,hrt,Pxt,bXt,SXt,vXt};
