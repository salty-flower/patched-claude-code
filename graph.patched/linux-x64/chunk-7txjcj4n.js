// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{U}from"./chunk-w7m8nded.js";import{l}from"./chunk-9pt2nr7j.js";import{FPs}from"./chunk-t30p3a9r.js";import{Le}from"./chunk-cr3hvp1y.js";import{G7t,LFe}from"./chunk-gjnnxv8e.js";import{nfe}from"./chunk-g2qk7vh6.js";import{xv}from"./chunk-zr9522zy.js";function n(){try{return LFe()&&G7t()}catch(r){return l(U(r)),!0}}function bH(r){try{let o=Le(),e=o.hookRegistrationEpoch!==r.epoch||o.loadedModules!==r.modules;return r.wasUnknown||n()||e&&nfe()&&G7t()}catch(o){return l(U(o)),!0}}function f1(){let r=Le();return{wasUnknown:n(),epoch:r.hookRegistrationEpoch,modules:r.loadedModules}}function eqe({isRunReached:r}){try{return n()||Le().loadedModules.some((o)=>!xv(o)&&FPs(o.args.pluginStorageId)&&(o.hooks("prompt.submit")||!r&&o.hooks("command.run")))}catch(o){return l(U(o)),!0}}
export{bH,eqe,f1};
