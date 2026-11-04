// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{p}from"./chunk-h58p4vvs.js";import{d}from"./chunk-sktwb66b.js";import{Le}from"./chunk-axsjfnwn.js";import{t}from"./chunk-5nh49npx.js";import{Ir}from"./chunk-ad5ya8vz.js";async function Int(o,r,n){try{await Promise.all([Le((e)=>e.managedSettingsNoticeSeenOrg===o?e:{...e,managedSettingsNoticeSeenOrg:o},n),Ir("remote_managed_settings_login_notice",{surface:p(r)})])}catch(e){t(`managed settings notice: not recorded as shown: ${d(e)}`,{level:"error"})}}
export{Int};
