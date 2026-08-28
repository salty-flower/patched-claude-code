// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{K,z,Se}from"./chunk-2vv5hpw3.js";import{_h,vE,ce}from"./chunk-akz0cj0f.js";import{tw}from"./chunk-6ypvgjr3.js";import{nl,GK}from"./chunk-y5d7q89w.js";import{_i,Fi}from"./chunk-xxprnjcc.js";class s{claudeTempDir=void 0;childProcessTmpDir=void 0;bundledSkillsRoot=void 0;scratchpadDirBySessionId=new Map;resolvedWorkingDirPaths=new Map;compiledPatternsByRules=new WeakMap;trustedSymlinkEquivalences=void 0;userSkillsBaseSpellingsFolded=void 0;resolvedSandboxConfigPaths=new Map;canonicalHomedirByHome=new Map;reset(){this.claudeTempDir=void 0,this.childProcessTmpDir=void 0,this.bundledSkillsRoot=void 0,this.scratchpadDirBySessionId.clear(),this.resolvedWorkingDirPaths.clear(),this.trustedSymlinkEquivalences=void 0,this.userSkillsBaseSpellingsFolded=void 0,this.resolvedSandboxConfigPaths.clear(),this.canonicalHomedirByHome.clear()}}var o=new K(()=>new s);function E1(){return o.of(z().host)}import{join as d,sep as t}from"path";function xp(){let e=E1();if(e.claudeTempDir!==void 0)return e.claudeTempDir;let r=nl(),i=ce(),n=r;try{n=i.realpathSync(r)}catch{}return e.claudeTempDir=n+t,e.claudeTempDir}function OK(){let e=E1();if(e.childProcessTmpDir!==void 0)return e.childProcessTmpDir;let r=GK(),i=ce(),n=r;try{n=i.realpathSync(r)}catch{}return e.childProcessTmpDir=n+t,e.childProcessTmpDir}function lC(){return pVe(Se())}function pVe(e){return d(xp(),tw(e))+t}function Smt(e){if(Fi(e)||_i(e)||_h(vE,e)!==void 0)return e;let r=ce();try{return r.realpathSync(e)}catch{return e}}
export{E1,xp,OK,lC,pVe,Smt};
