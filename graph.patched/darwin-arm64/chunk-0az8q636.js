// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{bj}from"./chunk-kn3en498.js";class Shn{append(e){this._buffer=this._buffer?Buffer.concat([this._buffer,e]):e}readMessage(){if(!this._buffer)return null;let e=this._buffer.indexOf(`
`);if(e===-1)return null;let r=this._buffer.toString("utf8",0,e).replace(/\r$/,"");return this._buffer=this._buffer.subarray(e+1),iBo(r)}clear(){this._buffer=void 0}}function iBo(e){return bj.parse(JSON.parse(e))}function _Yn(e){return JSON.stringify(e)+`
`}
export{Shn,iBo,_Yn};
