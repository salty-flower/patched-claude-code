// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{lr,Jt}from"./chunk-hxm5yqk0.js";import{ot}from"./chunk-gzs70jxe.js";import{eze,em}from"./chunk-dmqmjvjp.js";import{D}from"./chunk-6rnejvk7.js";var C8n=new Set(["publish_version","edit_version","publish_files","copy_file","create_from_type"]),M$o=new Set(["publish_version","publish_files","authorize_upload"]);function T8n(t,e){return t==="create_from_type"||M$o.has(t)&&!(D(e)&&e.slug!==void 0&&e.slug!==null&&e.slug!=="")}var _pn="delete_artifact";function s(t){let e=Array.isArray(t)?t.find((i)=>D(i)&&i.type==="text"):void 0,r=typeof t==="string"?t:D(e)?e.text:void 0;if(typeof r!=="string")return null;let o=ot(r,!1);return D(o)?o:null}function A8n(t){let e=s(t);if(e===null||typeof e.url!=="string")return null;let r=Jt(e.url);if(r===null||e.slug!==void 0&&e.slug!==r.slug)return null;let o=typeof e.title==="string"?em(e.title):null,i=typeof e.version==="string"&&eze.test(e.version)?e.version:void 0;return{slug:r.slug,env:r.env,...o!==null&&o!==""&&{title:o},...i!==void 0&&{version:i}}}function R8n(t){let e=s(t);return e!==null&&e.deleted===!0&&typeof e.slug==="string"&&lr.test(e.slug)?e.slug:null}class n{writers=null;loadWriters=null;register(t){this.writers=t}loaded(){if(this.writers===null)this.loadWriters?.();return this.writers}}var ZGe=new n;function r3s(t){ZGe.register(t)}class l{arm=null;register(t){this.arm=t}}var H$o=new l;function o3s(t){H$o.register(t)}
export{C8n,M$o,T8n,_pn,A8n,R8n,ZGe,r3s,H$o,o3s};
