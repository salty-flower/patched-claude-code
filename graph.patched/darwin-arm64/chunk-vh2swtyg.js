// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{K}from"./chunk-g4zaymy2.js";import{c}from"./chunk-jqgad8sa.js";import{_}from"./chunk-wx0zfkp2.js";import{be,oe,qo,cc}from"./chunk-ghnc2x4f.js";import{te}from"./chunk-4p8hs6c2.js";import{nj}from"./chunk-j2rn06t5.js";class p{lastLoggedSessionId=null;autoOpenPending=!1}var kFe=new K(()=>new p);var RG=110,GEt=144,VEt="The diff panel shows git changes \u2014 the current directory isn\u2019t in a git repository";function KEt(e){kFe.of(e).autoOpenPending=!0}function Sqt(e){let t=kFe.of(e),o=t.autoOpenPending;return t.autoOpenPending=!1,o}function Txn(e){kFe.of(e).autoOpenPending=!1}function tCe(){return nj(te())!==null}function YEt(e){let t=oe().diffSidebarOpen;if(t===!1)return!1;return e>=(t===!0?RG:GEt)&&tCe()}function XEt(e,t,o,n){let r=o==="diff"?"convo":"diff";Txn(e),t((i)=>i.replTab===r&&i.panelFileView===null?i:{...i,replTab:r,panelFileView:null});let f=r==="diff";if(oe().diffSidebarOpen!==f)be((i)=>({...i,diffSidebarOpen:f}),n);return _("repl_tab_switch",{tab:c(r)}),r}function Ire(e,t){Txn(e),t((o)=>o.replTab==="convo"&&o.panelFileView===null?o:{...o,replTab:"convo",panelFileView:null})}function vqt(e,t,o){if(Ire(e,t),oe().diffSidebarOpen!==!1)be((n)=>({...n,diffSidebarOpen:!1}),o);_("repl_tab_switch",{tab:c("convo")})}var a=["session","uncommitted","branch"];function wqt(){let e=qo().diffSidebarBaseMode;return e==="uncommitted"||e==="branch"?e:"session"}function Tqt(e,t){let o=a[(a.indexOf(e)+1)%a.length]??"session";return cc((n)=>n.diffSidebarBaseMode===o?n:{...n,diffSidebarBaseMode:o},t),_("repl_diff_base_switch",{mode:c(o)}),o}
export{kFe,RG,GEt,VEt,KEt,Sqt,Txn,tCe,YEt,XEt,Ire,vqt,wqt,Tqt};
