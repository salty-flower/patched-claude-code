// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{U}from"./chunk-nre716m4.js";import{l}from"./chunk-277zhca1.js";import{o1s}from"./chunk-53cx5fek.js";import{Oe}from"./chunk-m0prcny9.js";import{hae}from"./chunk-9wbary72.js";import{_on}from"./chunk-08v0682h.js";import{bme}from"./chunk-a5y31q5f.js";import{sb}from"./chunk-p5ebdgw7.js";function n(){try{return hae()&&_on()}catch(r){return l(U(r)),!0}}function tH(r){try{let o=Oe(),e=o.hookRegistrationEpoch!==r.epoch||o.loadedModules!==r.modules;return r.wasUnknown||n()||e&&bme()&&_on()}catch(o){return l(U(o)),!0}}function xU(){let r=Oe();return{wasUnknown:n(),epoch:r.hookRegistrationEpoch,modules:r.loadedModules}}function t3e({isRunReached:r}){try{return n()||Oe().loadedModules.some((o)=>!sb(o)&&o1s(o.args.pluginStorageId)&&(o.hooks("prompt.submit")||!r&&o.hooks("command.run")))}catch(o){return l(U(o)),!0}}
export{tH,t3e,xU};
