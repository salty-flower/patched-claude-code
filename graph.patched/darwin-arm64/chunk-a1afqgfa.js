// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Bc}from"./chunk-a0315ndz.js";import{Ne}from"./chunk-tbc65dc4.js";import{_qn}from"./chunk-y2snrdn8.js";import{lOe}from"./chunk-3vhrdtdw.js";function Xa(o,e,s){let t=e&&lOe(o);return(s??Ne().loadedModules).some((r)=>r.hooks(o)&&Bc(r)&&(e===void 0||_qn(r.matcherFor(o),e,t)))}
export{Xa};
