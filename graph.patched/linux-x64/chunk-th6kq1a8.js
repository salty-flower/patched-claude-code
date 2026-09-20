// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{ut,t}from"./chunk-847hpqqs.js";import{a}from"./chunk-q2vrcqny.js";import{je}from"./chunk-77ybm3jg.js";import{LK}from"./chunk-05jxh7mq.js";var c="it2";class u{inITerm2=null;it2Command="it2";recordInITerm2(e){this.inITerm2=e}recordIt2Command(e){this.it2Command=e}}function I(){return{cachedDetectionResult:null,backendsRegistered:!1,inProcessFallbackActive:!1,TmuxBackendClass:null,ITermBackendClass:null,tmuxBackend:null,itermBackend:null,terminalProbes:new u}}var h7=I();var d=a.TMUX,T=a.TMUX_PANE;function v$t(){return!!d}async function WV(){return v$t()}function Gan(){return T||null}function qan(){if(!d)return null;return ut(d,",")||null}async function ope(){return(await je(LK,["-V"])).code===0}function CU(e=h7){let{terminalProbes:o}=e;if(o.inITerm2!==null)return o.inITerm2;let s=a.TERM_PROGRAM,i=!!a.ITERM_SESSION_ID,l=a.terminal==="iTerm.app",n=s==="iTerm.app"||i||l;return o.recordInITerm2(n),n}function XWn(e=h7){return e.terminalProbes.it2Command}async function DKe(e=h7){let o=a.SHELL||"/bin/zsh",s=await je(o,["-lc",`command -v ${c}`],{useCwd:!1,timeout:2000}),i=s.code===0?s.stdout.split(`
`).map((m)=>m.trim()).filter(Boolean).at(-1)??"":"",l=async(m)=>je(m,["session","list"]),n=i||c,r=await l(n);if(i&&r.code!==0&&(r.code===127||/ENOENT/i.test(r.error??"")))n=c,r=await l(n);if(r.code!==0)return t(`[isIt2CliAvailable] '${n} session list' failed (code=${r.code}): ${r.stderr||r.error||"no stderr"}. `+(i?"it2 was found on PATH \u2014 check that the iTerm2 Python API is enabled "+"(Preferences > General > Magic > Enable Python API).":"it2 was not found on PATH (including login-shell PATH).")),!1;return e.terminalProbes.recordIt2Command(n),!0}
export{h7,v$t,WV,Gan,qan,ope,CU,XWn,DKe};
