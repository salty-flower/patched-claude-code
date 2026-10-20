// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Jr,mC,ue}from"./chunk-bvn0epzr.js";import{f}from"./chunk-ynakaye4.js";import{eQo,tQo}from"./chunk-2y730k9t.js";import{XP}from"./chunk-17scmzj7.js";import{ge,hn,No,rr,bt}from"./chunk-e72bctbv.js";var m=f(()=>rr(bt({id:ge(),title:ge().optional(),text:ge(),textIfUnusedLimitReset:ge().optional().catch(void 0),footer:ge().optional(),priority:hn().default(0),maxImpressions:hn().default(3),accentBar:No().default(!0),requiresModel:ge().optional()})).default([])),o=[];function i(){let e=mC("tengu_startup_announcements",o),t=m().safeParse(e);return t.success?t.data:o}function s(e){return e.requiresModel===void 0||Jr(e.requiresModel)}function u(){let e=ue().announcementImpressions??{};return i().filter((t)=>(e[t.id]??0)<t.maxImpressions&&s(t))}function vAe(e){let t=XP();if(t.startupAnnouncementPick!==void 0)return t.startupAnnouncementPick;let n=u().sort((a,c)=>c.priority-a.priority)[0],r=n?.textIfUnusedLimitReset&&eQo()?{...n,text:n.textIfUnusedLimitReset}:n;if(e&&r!==void 0)t.startupAnnouncementPick=r;return r}function dJo(e,t){if(u().some((n)=>n.textIfUnusedLimitReset))tQo(e,t)}function cJo(){let e=i().filter(s).sort((t,n)=>n.priority-t.priority)[0];if(e===void 0)return!1;return JSON.stringify({id:e.id,title:e.title,text:e.text,footer:e.footer})}
export{vAe,dJo,cJo};
