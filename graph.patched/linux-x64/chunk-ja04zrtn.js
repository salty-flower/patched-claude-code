// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{ja}from"./chunk-j22dybre.js";import{Wt}from"./chunk-bj7g1p32.js";function o(){return ja({value:"",active:!1,launchWarning:null,vimMode:"INSERT",stash:null})}var r=new Wt(()=>o());function G$(n){return r.of(n)}function Qjn(n){return G$(n).getState().value}function Fle(n,e){n.setState((t)=>{if(t.value===e)return t;if(t.launchWarning!==null&&t.value!==""&&e==="")return{...t,value:e,launchWarning:null};return{...t,value:e}})}function Won(n,e){n.setState((t)=>t.stash===e?t:{...t,stash:e})}function nut(n,e){n.setState((t)=>t.active===e?t:{...t,active:e})}function DMt(n,e){nut(G$(n),e)}function oqe(n,e){G$(n).setState((t)=>t.vimMode===e?t:{...t,vimMode:e})}function zon(n,e){n.setState((t)=>t.launchWarning?.type===e.type&&t.launchWarning.prefillLength===e.prefillLength?t:{...t,launchWarning:e})}function Von(n,e){zon(G$(n),e)}
export{G$,Qjn,Fle,Won,nut,DMt,oqe,zon,Von};
