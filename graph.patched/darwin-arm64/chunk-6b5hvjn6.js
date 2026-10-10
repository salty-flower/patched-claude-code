// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{Xr,zv,ce}from"./chunk-bk5ct2gw.js";import{p}from"./chunk-fdwn5gdv.js";import{_x}from"./chunk-5s80dyp0.js";import{me,hn,Uo,ir,bt}from"./chunk-7hyndmfy.js";var c=p(()=>ir(bt({id:me(),title:me().optional(),text:me(),footer:me().optional(),priority:hn().default(0),maxImpressions:hn().default(3),accentBar:Uo().default(!0),requiresModel:me().optional()})).default([])),i=[];function u(){let n=zv("tengu_startup_announcements",i),t=c().safeParse(n);return t.success?t.data:i}function s(n){return n.requiresModel===void 0||Xr(n.requiresModel)}function eEe(n){let t=_x();if(t.startupAnnouncementPick!==void 0)return t.startupAnnouncementPick;let r=ce().announcementImpressions??{},o=u().filter((e)=>(r[e.id]??0)<e.maxImpressions&&s(e)).sort((e,a)=>a.priority-e.priority)[0];if(n&&o!==void 0)t.startupAnnouncementPick=o;return o}function cLo(){let n=u().filter(s).sort((t,r)=>r.priority-t.priority)[0];if(n===void 0)return!1;return JSON.stringify({id:n.id,title:n.title,text:n.text,footer:n.footer})}
export{eEe,cLo};
