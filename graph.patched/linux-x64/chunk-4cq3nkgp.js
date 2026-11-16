// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Fn}from"./chunk-3x18nsrw.js";import{dt}from"./chunk-gfn3gxth.js";import{uI,Ke}from"./chunk-e9s6zz9d.js";import{Be}from"./chunk-d0zv4t72.js";import{stripVTControlCharacters as i}from"util";function etn(t,e=3){let r=t.map((s)=>Fn(i(s)).trim()),o=r.slice(0,e).join(", "),n=r.length-e;return n>0?`${o} (${n} more)`:o}function Ypo(t=Number.POSITIVE_INFINITY){try{if(!Ke.isSandboxingEnabled())return;let e=Ke.getDeniesDroppedForAnotherHost();if(e.length===0)return;let r=`The sandbox would contact that computer before each command, so it leaves these entries out. An entry that the list calls a ${Be} rule or an ${dt} rule still applies to the file tools. To have the sandbox block the paths, start Claude Code in a folder on that computer.`;return{issue:`Sandbox deny paths on another computer are not enforced, so sandboxed commands are not blocked from them: ${etn(e,t)}`,fix:e.some((o)=>o.endsWith(" from policySettings"))?`${r} If an administrator manages the entries from policySettings, tell them that the sandbox does not enforce these.`:r}}catch(e){uI(e,"deniesOnAnotherHostNotDescribed");return}}function abs(){let t=Ypo(3);if(t)process.stderr.write(`
\u26A0 ${t.issue}
  ${t.fix} \`claude doctor\` lists every entry.

`)}
export{etn,Ypo,abs};
