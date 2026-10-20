// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Jr,FR,ue}from"./chunk-7p6jp6kj.js";import{p}from"./chunk-949csv87.js";import{EQo,kQo}from"./chunk-ba1bv8vy.js";import{KP}from"./chunk-eqv06f5p.js";import{ge,gn,No,rr,St}from"./chunk-bb22xwtc.js";var m=p(()=>rr(St({id:ge(),title:ge().optional(),text:ge(),textIfUnusedLimitReset:ge().optional().catch(void 0),footer:ge().optional(),priority:gn().default(0),maxImpressions:gn().default(3),accentBar:No().default(!0),requiresModel:ge().optional()})).default([])),o=[];function i(){let e=FR("tengu_startup_announcements",o),t=m().safeParse(e);return t.success?t.data:o}function s(e){return e.requiresModel===void 0||Jr(e.requiresModel)}function u(){let e=ue().announcementImpressions??{};return i().filter((t)=>(e[t.id]??0)<t.maxImpressions&&s(t))}function hCe(e){let t=KP();if(t.startupAnnouncementPick!==void 0)return t.startupAnnouncementPick;let n=u().sort((a,c)=>c.priority-a.priority)[0],r=n?.textIfUnusedLimitReset&&EQo()?{...n,text:n.textIfUnusedLimitReset}:n;if(e&&r!==void 0)t.startupAnnouncementPick=r;return r}function OJo(e,t){if(u().some((n)=>n.textIfUnusedLimitReset))kQo(e,t)}function MJo(){let e=i().filter(s).sort((t,n)=>n.priority-t.priority)[0];if(e===void 0)return!1;return JSON.stringify({id:e.id,title:e.title,text:e.text,footer:e.footer})}
export{hCe,OJo,MJo};
