// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{n}from"./chunk-akz0cj0f.js";import{gt}from"./chunk-2h7wbm8s.js";import{a}from"./chunk-g0kfvhx3.js";import{Fe}from"./chunk-7jw96n8z.js";import{eU}from"./chunk-86n59xcy.js";var c="it2";class u{inITerm2=null;it2Command="it2";recordInITerm2(e){this.inITerm2=e}recordIt2Command(e){this.it2Command=e}}function I(){return{cachedDetectionResult:null,backendsRegistered:!1,inProcessFallbackActive:!1,TmuxBackendClass:null,ITermBackendClass:null,tmuxBackend:null,itermBackend:null,terminalProbes:new u}}var z3=I();var d=a.TMUX,T=a.TMUX_PANE;function Aft(){return!!d}async function KB(){return Aft()}function pFt(){return T||null}function fFt(){if(!d)return null;return gt(d,",")||null}async function eee(){return(await Fe(eU,["-V"])).code===0}function rM(e=z3){let{terminalProbes:o}=e;if(o.inITerm2!==null)return o.inITerm2;let s=a.TERM_PROGRAM,i=!!a.ITERM_SESSION_ID,l=a.terminal==="iTerm.app",t=s==="iTerm.app"||i||l;return o.recordInITerm2(t),t}function Qcn(e=z3){return e.terminalProbes.it2Command}async function ZRe(e=z3){let o=a.SHELL||"/bin/zsh",s=await Fe(o,["-lc",`command -v ${c}`],{useCwd:!1,timeout:2000}),i=s.code===0?s.stdout.split(`
`).map((m)=>m.trim()).filter(Boolean).at(-1)??"":"",l=async(m)=>Fe(m,["session","list"]),t=i||c,r=await l(t);if(i&&r.code!==0&&(r.code===127||/ENOENT/i.test(r.error??"")))t=c,r=await l(t);if(r.code!==0)return n(`[isIt2CliAvailable] '${t} session list' failed (code=${r.code}): ${r.stderr||r.error||"no stderr"}. `+(i?"it2 was found on PATH \u2014 check that the iTerm2 Python API is enabled "+"(Preferences > General > Magic > Enable Python API).":"it2 was not found on PATH (including login-shell PATH).")),!1;return e.terminalProbes.recordIt2Command(t),!0}
export{z3,Aft,KB,pFt,fFt,eee,rM,Qcn,ZRe};
