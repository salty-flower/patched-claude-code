// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{xP as m,yP as k}from"./_394.js";import{Adc as a,Bdc as y,Lvc as b,Orc as c,Qrc as S,puc as p}from"./_668.js";import{Zcd as s,_cd as g}from"./_803.js";import{$cd as A}from"./_804.js";import{ldd as t}from"./_805.js";A();S();k();b();g();y();var x=s(()=>t.array(t.object({id:t.string(),title:t.string().optional(),text:t.string(),footer:t.string().optional(),priority:t.number().default(0),maxImpressions:t.number().default(3),accentBar:t.boolean().default(!0),requiresModel:t.string().optional()})).default([])),u=[];function f(){let n=c("tengu_startup_announcements",u),e=x().safeParse(n);return e.success?e.data:u}function l(n){return n.requiresModel===void 0||a(n.requiresModel)}function I(n){let e=m();if(e.startupAnnouncementPick!==void 0)return e.startupAnnouncementPick;let o=p().announcementImpressions??{},i=f().filter((r)=>(o[r.id]??0)<r.maxImpressions&&l(r)).sort((r,d)=>d.priority-r.priority)[0];if(n&&i!==void 0)e.startupAnnouncementPick=i;return i}function q(){let n=f().filter(l).sort((e,o)=>o.priority-e.priority)[0];if(n===void 0)return!1;return JSON.stringify({id:n.id,title:n.title,text:n.text,footer:n.footer})}
export{I as on,q as pn};
