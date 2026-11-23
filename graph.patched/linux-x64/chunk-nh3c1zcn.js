// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{N}from"./chunk-5p3mkpyy.js";import{a}from"./chunk-8c4ttmk8.js";import{ye}from"./chunk-a5a37ds7.js";import{OBe}from"./chunk-4pcdq5we.js";import{zzt}from"./chunk-46nysa3j.js";import{hre}from"./chunk-w6hecz3q.js";import{r2n}from"./chunk-eqg36tk2.js";import{Up}from"./chunk-qvkahcn6.js";function n(){try{return hre()&&r2n()}catch(r){return a(N(r)),!0}}function I$(r){try{let o=ye(),e=o.hookRegistrationEpoch!==r.epoch||o.loadedModules!==r.modules;return r.wasUnknown||n()||e&&OBe()&&r2n()}catch(o){return a(N(o)),!0}}function aht({isRunReached:r}){try{return n()||ye().loadedModules.some((o)=>!Up(o)&&zzt(o.args.pluginStorageId)&&(o.hooks("prompt.submit")||!r&&o.hooks("command.run")))}catch(o){return a(N(o)),!0}}function J1(){let r=ye();return{wasUnknown:n(),epoch:r.hookRegistrationEpoch,modules:r.loadedModules}}
export{I$,aht,J1};
