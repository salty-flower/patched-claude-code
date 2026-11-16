// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{F}from"./chunk-m8nhymg4.js";import{Z}from"./chunk-b5xhmzas.js";import{Uzi}from"./chunk-wqb2b4v0.js";import{W}from"./chunk-z1a5ffdv.js";var n=4096,r=1024,i=new W(()=>new o);function cL(){return i.of(F().host)}function z_s(e,t){if(!e||!t)return;try{return btoa(`${e}:${t}`)}catch{return}}function s(){return Uzi()!==void 0}class o{seen=new Set;off=!1;incomplete=!1;overflowNotice=null;record(e){if(this.recordingOff())return;if(typeof e!=="string"||e==="")return;let t=Z(e,r);if(this.seen.has(t))return;if(this.seen.size>=n){this.incomplete=!0,this.overflowNotice??=!0;return}this.seen.add(t)}recordingOff(){if(!this.off&&s())this.off=!0,this.seen.clear(),this.incomplete=!1,this.overflowNotice=null;return this.off}takeOverflowNotice(){if(this.overflowNotice===!0)return this.overflowNotice=!1,!0;return!1}snapshot(){return this.recordingOff(),{atoms:[...this.seen],complete:!this.incomplete}}}
export{cL,z_s};
