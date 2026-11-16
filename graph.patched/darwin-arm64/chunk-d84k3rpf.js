// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{ke}from"./chunk-tbvds061.js";import{O4r,Fa,Wn}from"./chunk-e44qnbvj.js";var r=86400000,n=3*r;function Bar(){if(ke()!=="firstParty"||!Fa())return null;let e=Wn();if(!e?.refreshToken||!O4r(e.refreshTokenExpiresAt))return null;let t=e.refreshTokenExpiresAt;if(typeof e.expiresAt==="number"&&e.expiresAt>t+n)return null;return new Date(t)}function S7t(){let e=Bar();if(e===null)return null;let t=e.getTime()-Date.now();if(t>n||t<=0)return null;return{daysLeft:Math.ceil(t/r)}}
export{Bar,S7t};
