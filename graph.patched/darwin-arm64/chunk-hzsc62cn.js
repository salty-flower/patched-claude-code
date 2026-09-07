// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{_e,Aw,lhe}from"./chunk-zhtwayh2.js";import{Wn}from"./chunk-fkz3e4t3.js";import{AsyncLocalStorage as n}from"async_hooks";var e=new n;function Vj(t,r){return e.run({cwd:Wn(t)},r)}function h5(t,r){return Vj(t??Q(),r)}function eke(){return e.getStore()!==void 0}function YHn(t){let r=e.getStore();if(r)r.cwd=Wn(t);else lhe(t)}function JHn(){return e.getStore()?.cwd??Aw()}function Q(){try{return JHn()}catch{return _e()}}
export{Vj,h5,eke,YHn,JHn,Q};
