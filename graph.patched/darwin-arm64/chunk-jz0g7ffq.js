// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{i}from"./chunk-9a41hw1t.js";import{t}from"./chunk-d7b0m8qy.js";import{st}from"./chunk-c49xtfqf.js";import{Iu}from"./chunk-tcpay5ps.js";import{homedir as s}from"os";import{dirname as v,join as r,resolve as C}from"path";function a(){let e=i.SHELL||"",n=s(),l=r(n,".claude");if(e.endsWith("/zsh")||e.endsWith("/zsh.exe")){let o=r(l,"completion.zsh");return{name:"zsh",rcFile:r(n,".zshrc"),cacheFile:o,completionLine:`[[ -f "${o}" ]] && source "${o}"`,shellFlag:"zsh"}}if(e.endsWith("/bash")||e.endsWith("/bash.exe")){let o=r(l,"completion.bash");return{name:"bash",rcFile:r(n,".bashrc"),cacheFile:o,completionLine:`[ -f "${o}" ] && source "${o}"`,shellFlag:"bash"}}if(e.endsWith("/fish")||e.endsWith("/fish.exe")){let o=i.XDG_CONFIG_HOME||r(n,".config"),c=r(l,"completion.fish");return{name:"fish",rcFile:r(o,"fish","config.fish"),cacheFile:c,completionLine:`[ -f "${c}" ] && source "${c}"`,shellFlag:"fish"}}return null}async function bro(){return}function m(e){let{cmd:n,prefixArgs:l}=Iu();return st(n,[...l,"completion",e.shellFlag,"--output",e.cacheFile])}
export{bro};
