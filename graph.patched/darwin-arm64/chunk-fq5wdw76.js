// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Ln}from"./chunk-53x2yxpb.js";import{lt}from"./chunk-6qcfjjmw.js";import{TP,Ve}from"./chunk-ttn8czdr.js";import{ze}from"./chunk-4htczzfy.js";import{stripVTControlCharacters as i}from"util";function YKt(t,e=3){let r=t.map((s)=>Ln(i(s)).trim()),o=r.slice(0,e).join(", "),n=r.length-e;return n>0?`${o} (${n} more)`:o}function R5r(t=Number.POSITIVE_INFINITY){try{if(!Ve.isSandboxingEnabled())return;let e=Ve.getDeniesDroppedForAnotherHost();if(e.length===0)return;let r=`The sandbox would contact that computer before each command, so it leaves these entries out. An entry that the list calls a ${ze} rule or an ${lt} rule still applies to the file tools. To have the sandbox block the paths, start Claude Code in a folder on that computer.`;return{issue:`Sandbox deny paths on another computer are not enforced, so sandboxed commands are not blocked from them: ${YKt(e,t)}`,fix:e.some((o)=>o.endsWith(" from policySettings"))?`${r} If an administrator manages the entries from policySettings, tell them that the sandbox does not enforce these.`:r}}catch(e){TP(e,"deniesOnAnotherHostNotDescribed");return}}function Z5o(){let t=R5r(3);if(t)process.stderr.write(`
\u26A0 ${t.issue}
  ${t.fix} \`claude doctor\` lists every entry.

`)}
export{YKt,R5r,Z5o};
