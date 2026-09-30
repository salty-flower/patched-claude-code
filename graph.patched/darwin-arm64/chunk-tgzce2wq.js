// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{Fr,rC,ce}from"./chunk-er6f56rj.js";import{p}from"./chunk-dsp1md5e.js";import{xH}from"./chunk-jfbsd9e8.js";import{de,dn,po,qn,dt}from"./chunk-twckeja6.js";var c=p(()=>qn(dt({id:de(),title:de().optional(),text:de(),footer:de().optional(),priority:dn().default(0),maxImpressions:dn().default(3),accentBar:po().default(!0),requiresModel:de().optional()})).default([])),i=[];function u(){let n=rC("tengu_startup_announcements",i),t=c().safeParse(n);return t.success?t.data:i}function s(n){return n.requiresModel===void 0||Fr(n.requiresModel)}function ije(n){let t=xH();if(t.startupAnnouncementPick!==void 0)return t.startupAnnouncementPick;let r=ce().announcementImpressions??{},o=u().filter((e)=>(r[e.id]??0)<e.maxImpressions&&s(e)).sort((e,a)=>a.priority-e.priority)[0];if(n&&o!==void 0)t.startupAnnouncementPick=o;return o}function wJr(){let n=u().filter(s).sort((t,r)=>r.priority-t.priority)[0];if(n===void 0)return!1;return JSON.stringify({id:n.id,title:n.title,text:n.text,footer:n.footer})}
export{ije,wJr};
