// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Ma}from"./chunk-bgkp1vh7.js";var r={value:"",active:!1,launchWarning:null,vimMode:"INSERT"};function o(){return Ma({...r})}var Uy=o();function TZ(){return Uy.getState().value}function iDt(n,t){n.setState((e)=>{if(e.value===t)return e;if(e.launchWarning!==null&&e.value!==""&&t==="")return{...e,value:t,launchWarning:null};return{...e,value:t}})}function HGe(n){iDt(Uy,n)}function qst(n,t){n.setState((e)=>e.active===t?e:{...e,active:t})}function sDt(n){qst(Uy,n)}function Mtn(n){Uy.setState((t)=>t.vimMode===n?t:{...t,vimMode:n})}function Otn(n,t){n.setState((e)=>e.launchWarning?.type===t.type&&e.launchWarning.prefillLength===t.prefillLength?e:{...e,launchWarning:t})}function Ntn(n){Otn(Uy,n)}
export{Uy,TZ,iDt,HGe,qst,sDt,Mtn,Otn,Ntn};
