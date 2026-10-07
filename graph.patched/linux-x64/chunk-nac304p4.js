// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Gr,UT,ce}from"./chunk-m0sj7y8g.js";import{f}from"./chunk-wp37h1qm.js";import{yw}from"./chunk-0fybab08.js";import{fe,fn,Oo,or,gt}from"./chunk-w2sra8cw.js";var c=f(()=>or(gt({id:fe(),title:fe().optional(),text:fe(),footer:fe().optional(),priority:fn().default(0),maxImpressions:fn().default(3),accentBar:Oo().default(!0),requiresModel:fe().optional()})).default([])),i=[];function u(){let n=UT("tengu_startup_announcements",i),t=c().safeParse(n);return t.success?t.data:i}function s(n){return n.requiresModel===void 0||Gr(n.requiresModel)}function xye(n){let t=yw();if(t.startupAnnouncementPick!==void 0)return t.startupAnnouncementPick;let r=ce().announcementImpressions??{},o=u().filter((e)=>(r[e.id]??0)<e.maxImpressions&&s(e)).sort((e,a)=>a.priority-e.priority)[0];if(n&&o!==void 0)t.startupAnnouncementPick=o;return o}function wbo(){let n=u().filter(s).sort((t,r)=>r.priority-t.priority)[0];if(n===void 0)return!1;return JSON.stringify({id:n.id,title:n.title,text:n.text,footer:n.footer})}
export{xye,wbo};
