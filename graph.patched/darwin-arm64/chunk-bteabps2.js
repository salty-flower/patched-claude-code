// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Q$o}from"./chunk-v9w23mqk.js";var VMn=2,i={width:43,height:33},o=1024;function qMn(d,t){if(d!=="kitty"||t===void 0)return;let e=VMn*t.height,n=Math.ceil(i.width*Math.floor(e/i.height)/t.width),h=n*t.width;return e>=i.height&&Math.max(h,e)<=o&&n<=Q$o?{columns:n,width:h,height:e}:void 0}
export{VMn,qMn};
