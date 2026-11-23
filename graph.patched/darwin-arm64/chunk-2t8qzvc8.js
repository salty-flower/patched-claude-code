// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{N}from"./chunk-wryttfdq.js";import{a}from"./chunk-mddke2ke.js";import{ye}from"./chunk-e44qnbvj.js";import{LBe}from"./chunk-xxtz06h3.js";import{ezt}from"./chunk-87yfaz1a.js";import{kre}from"./chunk-ztvzn4qc.js";import{TWn}from"./chunk-8a3hs523.js";import{Up}from"./chunk-qvkahcn6.js";function n(){try{return kre()&&TWn()}catch(r){return a(N(r)),!0}}function M1(r){try{let o=ye(),e=o.hookRegistrationEpoch!==r.epoch||o.loadedModules!==r.modules;return r.wasUnknown||n()||e&&LBe()&&TWn()}catch(o){return a(N(o)),!0}}function pht({isRunReached:r}){try{return n()||ye().loadedModules.some((o)=>!Up(o)&&ezt(o.args.pluginStorageId)&&(o.hooks("prompt.submit")||!r&&o.hooks("command.run")))}catch(o){return a(N(o)),!0}}function eB(){let r=ye();return{wasUnknown:n(),epoch:r.hookRegistrationEpoch,modules:r.loadedModules}}
export{M1,pht,eB};
