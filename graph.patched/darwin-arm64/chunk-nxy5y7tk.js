// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{a}from"./chunk-bn8q5mbz.js";import{pE}from"./chunk-ssqabadz.js";var t=new Set(["iTerm.app","vscode","WezTerm","WarpTerminal","Hyper","Tabby","rio","contour","alacritty"]);function PFe(){if(a.CLAUDE_CODE_FORCE_STRIKETHROUGH)return!0;let r=a.TERM;if(a.TERM_PROGRAM==="Apple_Terminal"||r==="linux")return!1;return t.has(a.TERM_PROGRAM??"")||pE.isGhostty()||pE.isMintty()||pE.isJetBrainsIdeTerminal()||a.LC_TERMINAL==="iTerm2"||!!r?.includes("kitty")||!!r?.includes("alacritty")||!!r?.startsWith("foot")||!!a.KITTY_WINDOW_ID||!!a.ALACRITTY_LOG||!!a.KONSOLE_VERSION||!!a.WT_SESSION||!!a.ZED_TERM||parseInt(a.VTE_VERSION??"",10)>=4400}
export{PFe};
