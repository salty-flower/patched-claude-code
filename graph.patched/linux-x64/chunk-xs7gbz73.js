// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{go}from"./chunk-se5a0ehn.js";import{Q7,h6t}from"./chunk-chdt1drv.js";function cw(){return go("editorMode","normal").value==="vim"}function FVt(){if(Q7())return"shift + \u23CE for newline";return h6t()?"\\\u23CE for newline":"backslash (\\) + return (\u23CE) for newline"}var n=new Set(["escape","return","enter","tab","backspace","delete","up","down","left","right","pageup","pagedown","home","end","insert","clear","center","undefined","mouse","f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11","f12"]);function Dxn(e,t){if(t.ctrl||t.meta)return!1;if(n.has(e))return!1;return e.length>0&&!/^\s/.test(e)}function Pxn(e){return e.length>0&&".,?!:;)]".includes(e.charAt(0))}
export{cw,FVt,Dxn,Pxn};
