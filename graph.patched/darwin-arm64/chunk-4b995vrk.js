// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{iOe,FX}from"./chunk-ynz70n3e.js";import{D}from"./chunk-xzypj06m.js";var L5r=Object.freeze(["attachment","hook-context","compaction"]);function fVt(e){return e!==void 0&&e.length>0&&e.every((t)=>L5r.includes(t))?e.map((t)=>`session.append{door=${t}}`):[]}var N5r=Object.freeze(["prompt.section","prompt.context","prompt.attachment","prompt.compose","skill.prompt","attribution.text","session.compact","settings.read"]);function mVt(e){return e.filter((o)=>{let t=iOe.filter((r)=>FX(o,r));return t.length>0&&t.every((r)=>r.startsWith("classic.")||N5r.includes(r))})}function jor(e,o){let t=D([...mVt(o.map((n)=>n.pattern)),...o.flatMap((n)=>fVt(n.doors))]),r=t.length>0,s=o.some((n)=>n.isDoorUnread);return[...r?[`${e} hooks on ${t.join(", ")} do not run in a plugin a person installs where an organization manages Claude Code: there, these events pass over the plugins you install, and only a plugin the organization lists in managed settings runs them`]:[],...s?[`${e} holds a session.append hook to a door its source does not spell: whether it runs where an organization manages Claude Code cannot be told from the source`]:[]]}export{L5r,fVt,N5r,mVt,jor};
