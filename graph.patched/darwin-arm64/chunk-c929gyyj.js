// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{f}from"./chunk-v8gz5b0e.js";import{d}from"./chunk-wryttfdq.js";import{Me}from"./chunk-e44qnbvj.js";import{t}from"./chunk-bdfv2ky4.js";import{Nr}from"./chunk-f8g4f3e3.js";async function Vft(o,r,n){try{await Promise.all([Me((e)=>e.managedSettingsNoticeSeenOrg===o?e:{...e,managedSettingsNoticeSeenOrg:o},n),Nr("remote_managed_settings_login_notice",{surface:f(r)})])}catch(e){t(`managed settings notice: not recorded as shown: ${d(e)}`,{level:"error"})}}
export{Vft};
