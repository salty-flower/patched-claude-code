// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Qs}from"./chunk-p2dc4my5.js";import{jt}from"./chunk-sgamszzq.js";function o(){return Qs({value:"",active:!1,launchWarning:null,vimMode:"INSERT",stash:null})}var r=new jt(()=>o());function h$(n){return r.of(n)}function ocr(n){return h$(n).getState().value}function hye(n,e){n.setState((t)=>{if(t.value===e)return t;if(t.launchWarning!==null&&t.value!==""&&e==="")return{...t,value:e,launchWarning:null};return{...t,value:e}})}function fCn(n,e){n.setState((t)=>t.stash===e?t:{...t,stash:e})}function zvt(n,e){n.setState((t)=>t.active===e?t:{...t,active:e})}function Qqt(n,e){zvt(h$(n),e)}function OJe(n,e){h$(n).setState((t)=>t.vimMode===e?t:{...t,vimMode:e})}function mCn(n,e){n.setState((t)=>t.launchWarning?.type===e.type&&t.launchWarning.prefillLength===e.prefillLength?t:{...t,launchWarning:e})}function gCn(n,e){mCn(h$(n),e)}
export{h$,ocr,hye,fCn,zvt,Qqt,OJe,mCn,gCn};
