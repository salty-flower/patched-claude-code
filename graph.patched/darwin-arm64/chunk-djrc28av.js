// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{dt}from"./chunk-anq3mk5n.js";import{wce,ei}from"./chunk-42txhxmf.js";import{e6}from"./chunk-rvawj5kr.js";import{kZe}from"./chunk-gzssw8ss.js";import{L}from"./chunk-z7qmen4d.js";var u=["note","lang"],c=`Note: \`label\` was longer than ${e6} characters and was cut to that length; only its start was kept. A label is a few words naming the version, not a description of the changes.`;function AAn(t){if(!L(t))return null;let r=u.filter((e)=>(e in t)),o;if(typeof t.label==="string"&&wce(t.label)>e6){let e=t.label.replaceAll(`\r
`,`
`).trim(),p=wce(e)>e6;o={value:p?ei(e,e6).trimEnd():e,cut:p}}let s,a;if(t.action==="call_endpoint"&&typeof t.body==="string"){let e=kZe(dt(t.body,!1)).stripped;if(Array.isArray(e))s="array";else if(e!==null&&typeof e==="object")s="object";a=e}let l;if(t.action==="write_db"&&typeof t.data==="string"){let e=kZe(dt(t.data,!1)).stripped;if(L(e))l=e}let d=(t.action===void 0||t.action==="publish")&&Array.isArray(t.files)&&t.files.some((e)=>typeof e==="string")?t.files.map((e)=>typeof e==="string"?{path:e}:e):void 0,f=(t.action===void 0||t.action==="publish")&&Array.isArray(t.edits)&&t.edits.length===0;if(r.length===0&&s===void 0&&l===void 0&&d===void 0&&!f&&o===void 0)return null;let n={...t},i=[];for(let e of r)delete n[e],i.push(`legacy_${e}`);if(s!==void 0)n.body=a,i.push(`body_json_string_to_${s}`);if(l!==void 0)n.data=l,i.push("data_json_string_to_object");if(d!==void 0)n.files=d,i.push("files_string_list");if(f)delete n.edits,i.push("edits_empty");if(o!==void 0)n.label=o.value,i.push(o.cut?"label_clamped":"label_trimmed");return{input:n,shapeClass:i.join("+"),...o?.cut&&{resultNote:c}}}
export{AAn};
