// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{v1b as D,x1b as S,z1b as w}from"./_620.js";import{UZc as v}from"./_763.js";import{o1c as y}from"./_766.js";import{Ied as g,Qed as P,Red as i,Xed as x}from"./_806.js";import{Jid as c,Thd as a,Uhd as T,Vid as h,krd as l}from"./_812.js";import{bsd as u,hsd as f,wsd as k}from"./_814.js";import{Exd as d}from"./_839.js";class m{claudeTempDir=void 0;childProcessTmpDir=void 0;bundledSkillsRoot=void 0;scratchpadDirBySessionId=new Map;resolvedWorkingDirPaths=new Map;compiledPatternsByRules=new WeakMap;trustedSymlinkEquivalences=void 0;userSkillsBaseSpellingsFolded=void 0;resolvedSandboxConfigPaths=new Map;canonicalHomedirByHome=new Map;reset(){this.claudeTempDir=void 0,this.childProcessTmpDir=void 0,this.bundledSkillsRoot=void 0,this.scratchpadDirBySessionId.clear(),this.resolvedWorkingDirPaths.clear(),this.trustedSymlinkEquivalences=void 0,this.userSkillsBaseSpellingsFolded=void 0,this.resolvedSandboxConfigPaths.clear(),this.canonicalHomedirByHome.clear()}}function s(){return C.of(c().host)}var C;var p=d(()=>{l();T();C=new a(()=>new m)});import{join as M,sep as o}from"path";function B(){let e=s();if(e.claudeTempDir!==void 0)return e.claudeTempDir;let r=D(),t=i(),n=r;try{n=t.realpathSync(r)}catch{}return e.claudeTempDir=n+o,e.claudeTempDir}function z(){let e=s();if(e.childProcessTmpDir!==void 0)return e.childProcessTmpDir;let r=S(),t=i(),n=r;try{n=t.realpathSync(r)}catch{}return e.childProcessTmpDir=n+o,e.childProcessTmpDir}function A(){return R(h())}function R(e){return M(B(),y(e))+o}function J(e){if(f(e)||u(e)||g(P,e)!==void 0)return e;let r=i();try{return r.realpathSync(e)}catch{return e}}var F=d(()=>{l();k();x();v();w();p()});
export{s as Pvb,p as Qvb,B as Rvb,z as Svb,A as Tvb,R as Uvb,J as Vvb,F as Wvb};
