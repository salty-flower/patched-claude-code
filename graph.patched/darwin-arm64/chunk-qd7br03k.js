// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{sa}from"./chunk-3a4khaz5.js";import{bHt,kwo,Zk,le}from"./chunk-twxt3h9y.js";import{Ar,qOt,ew}from"./chunk-je0c1kfp.js";import{Sk,e2,Qu}from"./chunk-h3bc7dkc.js";import{XEe}from"./chunk-9hjfgsa0.js";function Vne(){let e=ew(),o=e2.flatMap((t)=>Qu(t).errors.map((i)=>i.file?i:{...i,file:Sk(t)})),r=le(),s=XEe.filter((t)=>e.settings[t]===void 0&&r[t]!==Zk[t]&&kwo(t,r[t])).map((t)=>({file:sa(),path:t,message:bHt(t)?"Not a valid value for this setting, so it is ignored and the setting counts as off":"Not a valid value for this setting, so it is ignored and the setting counts as unset",severity:"warning",suggestion:"Set it with /config, or delete the key from this file"}));return{settings:e.settings,errors:[...e.errors,...o,...s]}}function bbt(){return qOt().filter((e)=>!e.preserveOnWrite)}function d2e(){let e=Ar("localSettings");return[...Vne().errors.filter((r)=>!r.mcpErrorMetadata&&r.severity!=="warning"&&r.file!==e),...bbt()]}
export{Vne,bbt,d2e};
