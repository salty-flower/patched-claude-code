// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{op}from"./chunk-m8nhymg4.js";import{i}from"./chunk-428zme0n.js";import{Yb}from"./chunk-34jp28th.js";function PMi(t){Yb().xtversionName=t}function bIn(){return Yb().xtversionName}function xw(){if(op()?.isVscodeTerm)return!0;if(i.TERM_PROGRAM==="vscode")return!0;return Yb().xtversionName?.startsWith("xterm.js")??!1}function OMi(){let t=Yb().xtversionName?.toLowerCase();return t!==void 0&&(t.startsWith("iterm2")||t.startsWith("tmux "))}function Shr(){if(op()?.isGhosttyXtv)return!0;return Yb().xtversionName?.toLowerCase().startsWith("ghostty")??!1}
export{PMi,bIn,xw,OMi,Shr};
