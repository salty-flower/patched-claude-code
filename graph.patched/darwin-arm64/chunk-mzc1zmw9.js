// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{VL,Nge}from"./chunk-s8xs8s76.js";import{kr}from"./chunk-4cwgnmh9.js";import{Gr}from"./chunk-gtx2njpm.js";import{rh,Lvr,Bw,Yse}from"./chunk-h8x3acbh.js";import{v_}from"./chunk-vtrgktb7.js";function Rbe(e){if(Gr("hooks"))return[];let n=VL()?.[e]??[];if(Bw())return n.filter((o)=>!("pluginRoot"in o)&&!("deviceOwner"in o));let t=rh(),i=t&&!kr()?v_():null,r=Lvr();return[...Yse()?.[e]??[],...t?[]:Nge()?.[e]??[],...n.filter((o)=>!(t&&("pluginRoot"in o)&&!i?.has(o.pluginId))&&!(r&&("deviceOwner"in o)))]}function afr(){return!Gr("hooks")&&!Bw()&&!kr()}
export{Rbe,afr};
