// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{_e,vk,WTe}from"./chunk-sgamszzq.js";import{lr}from"./chunk-vx7e38ke.js";import{AsyncLocalStorage as n}from"async_hooks";var e=new n;function GM(t,r){return e.run({cwd:lr(t)},r)}function hZ(t,r){return GM(t??te(),r)}function wFe(){return e.getStore()!==void 0}function zQn(t){let r=e.getStore();if(r)r.cwd=lr(t);else WTe(t)}function GQn(){return e.getStore()?.cwd??vk()}function te(){try{return GQn()}catch{return _e()}}
export{GM,hZ,wFe,zQn,GQn,te};
