// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Fn}from"./chunk-ksq2mgyv.js";import{dt}from"./chunk-42sx5v11.js";import{mO,Ke}from"./chunk-rsqzfbnr.js";import{Be}from"./chunk-thq7bw7a.js";import{stripVTControlCharacters as i}from"util";function btn(t,e=3){let r=t.map((s)=>Fn(i(s)).trim()),o=r.slice(0,e).join(", "),n=r.length-e;return n>0?`${o} (${n} more)`:o}function wmo(t=Number.POSITIVE_INFINITY){try{if(!Ke.isSandboxingEnabled())return;let e=Ke.getDeniesDroppedForAnotherHost();if(e.length===0)return;let r=`The sandbox would contact that computer before each command, so it leaves these entries out. An entry that the list calls a ${Be} rule or an ${dt} rule still applies to the file tools. To have the sandbox block the paths, start Claude Code in a folder on that computer.`;return{issue:`Sandbox deny paths on another computer are not enforced, so sandboxed commands are not blocked from them: ${btn(e,t)}`,fix:e.some((o)=>o.endsWith(" from policySettings"))?`${r} If an administrator manages the entries from policySettings, tell them that the sandbox does not enforce these.`:r}}catch(e){mO(e,"deniesOnAnotherHostNotDescribed");return}}function zSs(){let t=wmo(3);if(t)process.stderr.write(`
\u26A0 ${t.issue}
  ${t.fix} \`claude doctor\` lists every entry.

`)}
export{btn,wmo,zSs};
