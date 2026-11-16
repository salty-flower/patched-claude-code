// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{sp}from"./chunk-r3adsed5.js";import{i}from"./chunk-5g5ea6r9.js";import{KS}from"./chunk-kyk58mef.js";function JMi(t){KS().xtversionName=t}function oOn(){return KS().xtversionName}function Rw(){if(sp()?.isVscodeTerm)return!0;if(i.TERM_PROGRAM==="vscode")return!0;return KS().xtversionName?.startsWith("xterm.js")??!1}function QMi(){let t=KS().xtversionName?.toLowerCase();return t!==void 0&&(t.startsWith("iterm2")||t.startsWith("tmux "))}function Xmr(){if(sp()?.isGhosttyXtv)return!0;return KS().xtversionName?.toLowerCase().startsWith("ghostty")??!1}
export{JMi,oOn,Rw,QMi,Xmr};
