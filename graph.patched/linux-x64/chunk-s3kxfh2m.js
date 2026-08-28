// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{K}from"./chunk-2vv5hpw3.js";import{c}from"./chunk-gt4btdxr.js";import{b}from"./chunk-v1ap59a1.js";import{_e,oe,Wo,cc}from"./chunk-ns0ekkj0.js";import{te}from"./chunk-j0kxfsn8.js";import{Z4}from"./chunk-fa374z64.js";class p{lastLoggedSessionId=null;autoOpenPending=!1}var iNe=new K(()=>new p);var S6=110,IAt=144,RAt="The diff panel shows git changes \u2014 the current directory isn\u2019t in a git repository";function LAt(e){iNe.of(e).autoOpenPending=!0}function tVt(e){let t=iNe.of(e),o=t.autoOpenPending;return t.autoOpenPending=!1,o}function PCn(e){iNe.of(e).autoOpenPending=!1}function zAe(){return Z4(te())!==null}function DAt(e){let t=oe().diffSidebarOpen;if(t===!1)return!1;return e>=(t===!0?S6:IAt)&&zAe()}function PAt(e,t,o,n){let r=o==="diff"?"convo":"diff";PCn(e),t((i)=>i.replTab===r&&i.panelFileView===null?i:{...i,replTab:r,panelFileView:null});let f=r==="diff";if(oe().diffSidebarOpen!==f)_e((i)=>({...i,diffSidebarOpen:f}),n);return b("repl_tab_switch",{tab:c(r)}),r}function Ere(e,t){PCn(e),t((o)=>o.replTab==="convo"&&o.panelFileView===null?o:{...o,replTab:"convo",panelFileView:null})}function nVt(e,t,o){if(Ere(e,t),oe().diffSidebarOpen!==!1)_e((n)=>({...n,diffSidebarOpen:!1}),o);b("repl_tab_switch",{tab:c("convo")})}var a=["session","uncommitted","branch"];function rVt(){let e=Wo().diffSidebarBaseMode;return e==="uncommitted"||e==="branch"?e:"session"}function oVt(e,t){let o=a[(a.indexOf(e)+1)%a.length]??"session";return cc((n)=>n.diffSidebarBaseMode===o?n:{...n,diffSidebarBaseMode:o},t),b("repl_diff_base_switch",{mode:c(o)}),o}
export{iNe,S6,IAt,RAt,LAt,tVt,PCn,zAe,DAt,PAt,Ere,nVt,rVt,oVt};
