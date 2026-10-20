// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{U}from"./chunk-ekgz6skk.js";import{l}from"./chunk-jkcb7qdd.js";import{_Us}from"./chunk-0nrx1yfa.js";import{Oe}from"./chunk-d4ftdked.js";import{dae}from"./chunk-hkhmg3zz.js";import{oon}from"./chunk-nx7vm5t8.js";import{gme}from"./chunk-a9v6e7dy.js";import{oS}from"./chunk-j0r93f1t.js";function n(){try{return dae()&&oon()}catch(r){return l(U(r)),!0}}function QH(r){try{let o=Oe(),e=o.hookRegistrationEpoch!==r.epoch||o.loadedModules!==r.modules;return r.wasUnknown||n()||e&&gme()&&oon()}catch(o){return l(U(o)),!0}}function EU(){let r=Oe();return{wasUnknown:n(),epoch:r.hookRegistrationEpoch,modules:r.loadedModules}}function q4e({isRunReached:r}){try{return n()||Oe().loadedModules.some((o)=>!oS(o)&&_Us(o.args.pluginStorageId)&&(o.hooks("prompt.submit")||!r&&o.hooks("command.run")))}catch(o){return l(U(o)),!0}}
export{QH,q4e,EU};
