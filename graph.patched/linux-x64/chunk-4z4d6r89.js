// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Ee}from"./chunk-n61dvy9z.js";import{iKr,Fa,Wn}from"./chunk-a5a37ds7.js";var r=86400000,n=3*r;function _ar(){if(Ee()!=="firstParty"||!Fa())return null;let e=Wn();if(!e?.refreshToken||!iKr(e.refreshTokenExpiresAt))return null;let t=e.refreshTokenExpiresAt;if(typeof e.expiresAt==="number"&&e.expiresAt>t+n)return null;return new Date(t)}function lYt(){let e=_ar();if(e===null)return null;let t=e.getTime()-Date.now();if(t>n||t<=0)return null;return{daysLeft:Math.ceil(t/r)}}
export{_ar,lYt};
