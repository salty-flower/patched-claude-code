// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Kr,zk,ue}from"./chunk-1901fdh6.js";import{f}from"./chunk-5r64b6x9.js";import{OP}from"./chunk-np4mrwc6.js";import{ge,gn,Vo,rr,bt}from"./chunk-0grxx6za.js";var c=f(()=>rr(bt({id:ge(),title:ge().optional(),text:ge(),footer:ge().optional(),priority:gn().default(0),maxImpressions:gn().default(3),accentBar:Vo().default(!0),requiresModel:ge().optional()})).default([])),i=[];function u(){let n=zk("tengu_startup_announcements",i),t=c().safeParse(n);return t.success?t.data:i}function s(n){return n.requiresModel===void 0||Kr(n.requiresModel)}function QCe(n){let t=OP();if(t.startupAnnouncementPick!==void 0)return t.startupAnnouncementPick;let r=ue().announcementImpressions??{},o=u().filter((e)=>(r[e.id]??0)<e.maxImpressions&&s(e)).sort((e,a)=>a.priority-e.priority)[0];if(n&&o!==void 0)t.startupAnnouncementPick=o;return o}function yKo(){let n=u().filter(s).sort((t,r)=>r.priority-t.priority)[0];if(n===void 0)return!1;return JSON.stringify({id:n.id,title:n.title,text:n.text,footer:n.footer})}
export{QCe,yKo};
