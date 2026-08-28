// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{o$a as S}from"./_483.js";import{olb as a,tlb as v}from"./_518.js";import{YAb as y}from"./_558.js";import{yzc as g}from"./_683.js";import{q9c as s,s9c as w}from"./_772.js";import{Tbd as F}from"./_811.js";import{ncd as c}from"./_812.js";import{Ngd as f,igd as u,jhd as t,ohd as p}from"./_820.js";import{pud as h}from"./_829.js";import{zvd as d}from"./_831.js";import{xxd as m}from"./_837.js";import{homedir as x}from"os";import{dirname as j,join as r,resolve as A}from"path";function C(){let e=c.SHELL||"",i=x(),n=r(i,".claude");if(e.endsWith("/zsh")||e.endsWith("/zsh.exe")){let o=r(n,"completion.zsh");return{name:"zsh",rcFile:r(i,".zshrc"),cacheFile:o,completionLine:`[[ -f "${o}" ]] && source "${o}"`,shellFlag:"zsh"}}if(e.endsWith("/bash")||e.endsWith("/bash.exe")){let o=r(n,"completion.bash");return{name:"bash",rcFile:r(i,".bashrc"),cacheFile:o,completionLine:`[ -f "${o}" ] && source "${o}"`,shellFlag:"bash"}}if(e.endsWith("/fish")||e.endsWith("/fish.exe")){let o=c.XDG_CONFIG_HOME||r(i,".config"),l=r(n,"completion.fish");return{name:"fish",rcFile:r(o,"fish","config.fish"),cacheFile:l,completionLine:`[ -f "${l}" ] && source "${l}"`,shellFlag:"fish"}}return null}async function K(){return}function E(e){let{cmd:i,prefixArgs:n}=a();return s(i,[...n,"completion",e.shellFlag,"--output",e.cacheFile])}var T=m(()=>{g();y();S();p();F();d();w();f();v();u();h()});
export{K as GD,T as HD};
