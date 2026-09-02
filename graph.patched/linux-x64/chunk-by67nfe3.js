// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Cr,gh,oe}from"./chunk-1e5y3pjf.js";import{m}from"./chunk-asme1eq2.js";import{p$}from"./chunk-p7vzgkqx.js";import{w}from"./chunk-gjdr5cm8.js";var c=m(()=>w.array(w.object({id:w.string(),title:w.string().optional(),text:w.string(),footer:w.string().optional(),priority:w.number().default(0),maxImpressions:w.number().default(3),accentBar:w.boolean().default(!0),requiresModel:w.string().optional()})).default([])),i=[];function u(){let n=gh("tengu_startup_announcements",i),t=c().safeParse(n);return t.success?t.data:i}function s(n){return n.requiresModel===void 0||Cr(n.requiresModel)}function zme(n){let t=p$();if(t.startupAnnouncementPick!==void 0)return t.startupAnnouncementPick;let r=oe().announcementImpressions??{},o=u().filter((e)=>(r[e.id]??0)<e.maxImpressions&&s(e)).sort((e,a)=>a.priority-e.priority)[0];if(n&&o!==void 0)t.startupAnnouncementPick=o;return o}function WDn(){let n=u().filter(s).sort((t,r)=>r.priority-t.priority)[0];if(n===void 0)return!1;return JSON.stringify({id:n.id,title:n.title,text:n.text,footer:n.footer})}
export{zme,WDn};
