// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Kr,dv,ce}from"./chunk-gcyvvtkw.js";import{f}from"./chunk-y575z4xw.js";import{Dw}from"./chunk-zwe9vtev.js";import{fe,fn,Lo,sr,St}from"./chunk-mhv1kvth.js";var c=f(()=>sr(St({id:fe(),title:fe().optional(),text:fe(),footer:fe().optional(),priority:fn().default(0),maxImpressions:fn().default(3),accentBar:Lo().default(!0),requiresModel:fe().optional()})).default([])),i=[];function u(){let n=dv("tengu_startup_announcements",i),t=c().safeParse(n);return t.success?t.data:i}function s(n){return n.requiresModel===void 0||Kr(n.requiresModel)}function LSe(n){let t=Dw();if(t.startupAnnouncementPick!==void 0)return t.startupAnnouncementPick;let r=ce().announcementImpressions??{},o=u().filter((e)=>(r[e.id]??0)<e.maxImpressions&&s(e)).sort((e,a)=>a.priority-e.priority)[0];if(n&&o!==void 0)t.startupAnnouncementPick=o;return o}function uRo(){let n=u().filter(s).sort((t,r)=>r.priority-t.priority)[0];if(n===void 0)return!1;return JSON.stringify({id:n.id,title:n.title,text:n.text,footer:n.footer})}
export{LSe,uRo};
