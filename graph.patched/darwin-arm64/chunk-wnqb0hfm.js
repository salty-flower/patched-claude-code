// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{U}from"./chunk-wkh5syvr.js";import{l}from"./chunk-e666gr8q.js";import{kIs}from"./chunk-2pjfzhxh.js";import{Ne}from"./chunk-tbc65dc4.js";import{iZt,z$e}from"./chunk-pz01jznv.js";import{lfe}from"./chunk-k3mbgdfp.js";import{PE}from"./chunk-wsf8fmk0.js";function n(){try{return z$e()&&iZt()}catch(r){return l(U(r)),!0}}function EH(r){try{let o=Ne(),e=o.hookRegistrationEpoch!==r.epoch||o.loadedModules!==r.modules;return r.wasUnknown||n()||e&&lfe()&&iZt()}catch(o){return l(U(o)),!0}}function vB(){let r=Ne();return{wasUnknown:n(),epoch:r.hookRegistrationEpoch,modules:r.loadedModules}}function dqe({isRunReached:r}){try{return n()||Ne().loadedModules.some((o)=>!PE(o)&&kIs(o.args.pluginStorageId)&&(o.hooks("prompt.submit")||!r&&o.hooks("command.run")))}catch(o){return l(U(o)),!0}}
export{EH,dqe,vB};
