// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{N}from"./chunk-sktwb66b.js";import{a}from"./chunk-87y2sp93.js";import{Fce}from"./chunk-xmz4hhb6.js";import{yEr}from"./chunk-r038mtsb.js";import{xe}from"./chunk-jr30bz1x.js";import{qQ}from"./chunk-gk4d11h7.js";import{Uxn}from"./chunk-b2fryp7y.js";import{hm}from"./chunk-ga8a8mhv.js";function n(){try{return qQ()&&Uxn()}catch(r){return a(N(r)),!0}}function AF(r){try{let o=xe(),e=o.hookRegistrationEpoch!==r.epoch||o.loadedModules!==r.modules;return r.wasUnknown||n()||e&&Fce()&&Uxn()}catch(o){return a(N(o)),!0}}function Bot({isRunReached:r}){try{return n()||xe().loadedModules.some((o)=>!hm(o)&&yEr(o.args.pluginStorageId)&&(o.hooks("prompt.submit")||!r&&o.hooks("command.run")))}catch(o){return a(N(o)),!0}}function iG(){let r=xe();return{wasUnknown:n(),epoch:r.hookRegistrationEpoch,modules:r.loadedModules}}
export{AF,Bot,iG};
