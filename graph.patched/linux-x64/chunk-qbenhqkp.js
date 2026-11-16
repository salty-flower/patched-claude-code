// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import"./chunk-732yb76j.js";import"./chunk-pjehsasc.js";import"./chunk-acdxrrxc.js";import{ge,Rn}from"./chunk-r3adsed5.js";import"./chunk-ka3gamjb.js";import"./chunk-zt4gdxqw.js";import"./chunk-5p3mkpyy.js";import"./chunk-3rgses43.js";import"./chunk-e5p1adf2.js";import"./chunk-a8se3wxy.js";import"./chunk-2xv5yvxr.js";var e={type:"local-jsx",name:"goal",description:"Set a goal Claude checks before stopping",argumentHint:"[<condition> | clear]",immediate:!0},o={type:"local",name:"goal",supportsNonInteractive:!0,thinClientDispatch:"post-text",description:"Set a goal \u2014 keep working until the condition is met",get isHidden(){return!ge()},isEnabled:()=>ge()||Rn(),load:()=>import("./chunk-dgvkf3st.js")},n=e;export{n as default,o as goalNonInteractive};
