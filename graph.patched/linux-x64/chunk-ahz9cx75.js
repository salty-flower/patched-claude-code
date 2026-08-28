// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{br,Oh,oe}from"./chunk-ns0ekkj0.js";import{h}from"./chunk-s0y4aasp.js";import{UD}from"./chunk-cpbkzz56.js";import{w}from"./chunk-pawnzj8m.js";var c=h(()=>w.array(w.object({id:w.string(),title:w.string().optional(),text:w.string(),footer:w.string().optional(),priority:w.number().default(0),maxImpressions:w.number().default(3),accentBar:w.boolean().default(!0),requiresModel:w.string().optional()})).default([])),i=[];function u(){let n=Oh("tengu_startup_announcements",i),t=c().safeParse(n);return t.success?t.data:i}function s(n){return n.requiresModel===void 0||br(n.requiresModel)}function ape(n){let t=UD();if(t.startupAnnouncementPick!==void 0)return t.startupAnnouncementPick;let r=oe().announcementImpressions??{},o=u().filter((e)=>(r[e.id]??0)<e.maxImpressions&&s(e)).sort((e,a)=>a.priority-e.priority)[0];if(n&&o!==void 0)t.startupAnnouncementPick=o;return o}function dCn(){let n=u().filter(s).sort((t,r)=>r.priority-t.priority)[0];if(n===void 0)return!1;return JSON.stringify({id:n.id,title:n.title,text:n.text,footer:n.footer})}
export{ape,dCn};
