// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{ZIe,xX}from"./chunk-3x4atckz.js";import{D}from"./chunk-eqmywwjn.js";var b5r=Object.freeze(["attachment","hook-context","compaction"]);function tKt(e){return e!==void 0&&e.length>0&&e.every((t)=>b5r.includes(t))?e.map((t)=>`session.append{door=${t}}`):[]}var S5r=Object.freeze(["prompt.section","prompt.context","prompt.attachment","prompt.compose","skill.prompt","attribution.text","session.compact","settings.read"]);function nKt(e){return e.filter((o)=>{let t=ZIe.filter((r)=>xX(o,r));return t.length>0&&t.every((r)=>r.startsWith("classic.")||S5r.includes(r))})}function Aor(e,o){let t=D([...nKt(o.map((n)=>n.pattern)),...o.flatMap((n)=>tKt(n.doors))]),r=t.length>0,s=o.some((n)=>n.isDoorUnread);return[...r?[`${e} hooks on ${t.join(", ")} do not run in a plugin a person installs where an organization manages Claude Code: there, these events pass over the plugins you install, and only a plugin the organization lists in managed settings runs them`]:[],...s?[`${e} holds a session.append hook to a door its source does not spell: whether it runs where an organization manages Claude Code cannot be told from the source`]:[]]}export{b5r,tKt,S5r,nKt,Aor};
