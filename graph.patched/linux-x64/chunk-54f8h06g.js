// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{CQe}from"./chunk-rsvrdw2d.js";import a from"process";class s{append(e){this._buffer=this._buffer?Buffer.concat([this._buffer,e]):e}readMessage(){if(!this._buffer)return null;let e=this._buffer.indexOf(`
`);if(e===-1)return null;let r=this._buffer.toString("utf8",0,e).replace(/\r$/,"");return this._buffer=this._buffer.subarray(e+1),n(r)}clear(){this._buffer=void 0}}function n(e){return CQe.parse(JSON.parse(e))}function i(e){return JSON.stringify(e)+`
`}class Hao{constructor(e=a.stdin,r=a.stdout){this._stdin=e,this._stdout=r,this._readBuffer=new s,this._started=!1,this._ondata=(t)=>{this._readBuffer.append(t),this.processReadBuffer()},this._onerror=(t)=>{this.onerror?.(t)}}async start(){if(this._started)throw Error("StdioServerTransport already started! If using Server class, note that connect() calls start() automatically.");this._started=!0,this._stdin.on("data",this._ondata),this._stdin.on("error",this._onerror)}processReadBuffer(){while(!0)try{let e=this._readBuffer.readMessage();if(e===null)break;this.onmessage?.(e)}catch(e){this.onerror?.(e)}}async close(){if(this._stdin.off("data",this._ondata),this._stdin.off("error",this._onerror),this._stdin.listenerCount("data")===0)this._stdin.pause();this._readBuffer.clear(),this.onclose?.()}send(e){return new Promise((r)=>{let t=i(e);if(this._stdout.write(t))r();else this._stdout.once("drain",r)})}}
export{Hao};
