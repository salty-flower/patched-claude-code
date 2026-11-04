// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Te}from"./chunk-39j7k06t.js";import{PAr,Va,Hn}from"./chunk-axsjfnwn.js";var r=86400000,n=3*r;function bKn(){if(Te()!=="firstParty"||!Va())return null;let e=Hn();if(!e?.refreshToken||!PAr(e.refreshTokenExpiresAt))return null;let t=e.refreshTokenExpiresAt;if(typeof e.expiresAt==="number"&&e.expiresAt>t+n)return null;return new Date(t)}function djt(){let e=bKn();if(e===null)return null;let t=e.getTime()-Date.now();if(t>n||t<=0)return null;return{daysLeft:Math.ceil(t/r)}}
export{bKn,djt};
