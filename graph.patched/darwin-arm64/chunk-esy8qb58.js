// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{K,W,ve}from"./chunk-g4zaymy2.js";import{bh,TT,ce}from"./chunk-cmkfpkth.js";import{tw}from"./chunk-71nbrcp0.js";import{tl,KK}from"./chunk-61fv27gb.js";import{bi,$i}from"./chunk-g1zprvx2.js";class s{claudeTempDir=void 0;childProcessTmpDir=void 0;bundledSkillsRoot=void 0;scratchpadDirBySessionId=new Map;resolvedWorkingDirPaths=new Map;compiledPatternsByRules=new WeakMap;trustedSymlinkEquivalences=void 0;userSkillsBaseSpellingsFolded=void 0;resolvedSandboxConfigPaths=new Map;canonicalHomedirByHome=new Map;reset(){this.claudeTempDir=void 0,this.childProcessTmpDir=void 0,this.bundledSkillsRoot=void 0,this.scratchpadDirBySessionId.clear(),this.resolvedWorkingDirPaths.clear(),this.trustedSymlinkEquivalences=void 0,this.userSkillsBaseSpellingsFolded=void 0,this.resolvedSandboxConfigPaths.clear(),this.canonicalHomedirByHome.clear()}}var o=new K(()=>new s);function EN(){return o.of(W().host)}import{join as d,sep as t}from"path";function xp(){let e=EN();if(e.claudeTempDir!==void 0)return e.claudeTempDir;let r=tl(),i=ce(),n=r;try{n=i.realpathSync(r)}catch{}return e.claudeTempDir=n+t,e.claudeTempDir}function BK(){let e=EN();if(e.childProcessTmpDir!==void 0)return e.childProcessTmpDir;let r=KK(),i=ce(),n=r;try{n=i.realpathSync(r)}catch{}return e.childProcessTmpDir=n+t,e.childProcessTmpDir}function pR(){return fqe(ve())}function fqe(e){return d(xp(),tw(e))+t}function wmt(e){if($i(e)||bi(e)||bh(TT,e)!==void 0)return e;let r=ce();try{return r.realpathSync(e)}catch{return e}}
export{EN,xp,BK,pR,fqe,wmt};
