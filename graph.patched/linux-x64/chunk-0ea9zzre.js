// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{$o}from"./chunk-mkvzkqgh.js";import{kQ,$Xt}from"./chunk-bypwjkcf.js";function CP(){return $o("editorMode","normal").value==="vim"}function hXt(){if(kQ())return"shift + \u23CE for newline";return $Xt()?"\\\u23CE for newline":"backslash (\\) + return (\u23CE) for newline"}var n=new Set(["escape","return","enter","tab","backspace","delete","up","down","left","right","pageup","pagedown","home","end","insert","clear","center","undefined","mouse","f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11","f12"]);function hMn(e,t){if(t.ctrl||t.meta)return!1;if(n.has(e))return!1;return e.length>0&&!/^\s/.test(e)}function yMn(e){return e.length>0&&".,?!:;)]".includes(e.charAt(0))}
export{CP,hXt,hMn,yMn};
