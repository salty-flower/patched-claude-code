// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{Jnb as g,Knb as n,Mnb as v}from"./_526.js";import{eUb as a,fUb as b,lUb as m,nUb as h}from"./_596.js";import{oUb as u,pUb as A}from"./_597.js";import{rCc as c,xCc as f}from"./_697.js";import{tfd as t,yfd as l}from"./_806.js";import{Exd as d}from"./_839.js";import{format as o}from"util";class p{silly(e,...r){t(o(e,...r),{level:"debug"})}debug(e,...r){t(o(e,...r),{level:"debug"})}info(e,...r){t(o(e,...r),{level:"info"})}warn(e,...r){t(o(e,...r),{level:"warn"})}error(e,...r){t(o(e,...r),{level:"error"})}}function H(){let e=u();if(e.hostAdapter)return e.hostAdapter;return e.hostAdapter={serverName:c,logger:new p,executor:m({getMouseAnimationEnabled:()=>n().mouseAnimation,getHideBeforeActionEnabled:()=>n().hideBeforeAction}),ensureOsPermissions:async()=>{let r=a(),i=r.tcc.checkAccessibility(),s=r.tcc.checkScreenRecording();return i&&s?{granted:!0}:{granted:!1,accessibility:i,screenRecording:s}},isDisabled:()=>!g(),getSubGates:n,getAutoUnhideEnabled:()=>!0,cropRawPatch:()=>null},e.hostAdapter}var w=d(()=>{l();f();A();h();v();b()});
export{H as Hnb,w as Inb};
