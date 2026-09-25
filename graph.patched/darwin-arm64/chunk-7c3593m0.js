// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Kr,av,le}from"./chunk-twxt3h9y.js";import{f}from"./chunk-1y7zyxh8.js";import{YI}from"./chunk-etkg2s89.js";import{de,mn,co,qn,at}from"./chunk-ag423d0m.js";var c=f(()=>qn(at({id:de(),title:de().optional(),text:de(),footer:de().optional(),priority:mn().default(0),maxImpressions:mn().default(3),accentBar:co().default(!0),requiresModel:de().optional()})).default([])),i=[];function u(){let n=av("tengu_startup_announcements",i),t=c().safeParse(n);return t.success?t.data:i}function s(n){return n.requiresModel===void 0||Kr(n.requiresModel)}function s$e(n){let t=YI();if(t.startupAnnouncementPick!==void 0)return t.startupAnnouncementPick;let r=le().announcementImpressions??{},o=u().filter((e)=>(r[e.id]??0)<e.maxImpressions&&s(e)).sort((e,a)=>a.priority-e.priority)[0];if(n&&o!==void 0)t.startupAnnouncementPick=o;return o}function V2r(){let n=u().filter(s).sort((t,r)=>r.priority-t.priority)[0];if(n===void 0)return!1;return JSON.stringify({id:n.id,title:n.title,text:n.text,footer:n.footer})}
export{s$e,V2r};
