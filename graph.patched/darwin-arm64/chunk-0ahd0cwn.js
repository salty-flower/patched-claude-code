// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import"./chunk-5p4f0tx0.js";import"./chunk-28n1q6sq.js";import"./chunk-m6dx7g2x.js";import{ge,Rn}from"./chunk-m8nhymg4.js";import"./chunk-aft72t1j.js";import"./chunk-v8gz5b0e.js";import"./chunk-wryttfdq.js";import"./chunk-0cvfymxt.js";import"./chunk-0sn0736b.js";import"./chunk-908wtyzb.js";import"./chunk-hqh4zzjp.js";var e={type:"local-jsx",name:"goal",description:"Set a goal Claude checks before stopping",argumentHint:"[<condition> | clear]",immediate:!0},o={type:"local",name:"goal",supportsNonInteractive:!0,thinClientDispatch:"post-text",description:"Set a goal \u2014 keep working until the condition is met",get isHidden(){return!ge()},isEnabled:()=>ge()||Rn(),load:()=>import("./chunk-bc3f9dd0.js")},n=e;export{n as default,o as goalNonInteractive};
