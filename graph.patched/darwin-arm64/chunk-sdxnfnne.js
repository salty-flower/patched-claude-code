// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{ja}from"./chunk-rpg2kszv.js";import{qt}from"./chunk-zhtwayh2.js";function o(){return ja({value:"",active:!1,launchWarning:null,vimMode:"INSERT",stash:null})}var r=new qt(()=>o());function JL(n){return r.of(n)}function M6n(n){return JL(n).getState().value}function Kle(n,e){n.setState((t)=>{if(t.value===e)return t;if(t.launchWarning!==null&&t.value!==""&&e==="")return{...t,value:e,launchWarning:null};return{...t,value:e}})}function wsn(n,e){n.setState((t)=>t.stash===e?t:{...t,stash:e})}function but(n,e){n.setState((t)=>t.active===e?t:{...t,active:e})}function rNt(n,e){but(JL(n),e)}function wGe(n,e){JL(n).setState((t)=>t.vimMode===e?t:{...t,vimMode:e})}function Tsn(n,e){n.setState((t)=>t.launchWarning?.type===e.type&&t.launchWarning.prefillLength===e.prefillLength?t:{...t,launchWarning:e})}function Esn(n,e){Tsn(JL(n),e)}
export{JL,M6n,Kle,wsn,but,rNt,wGe,Tsn,Esn};
