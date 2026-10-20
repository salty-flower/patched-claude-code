// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Wf}from"./chunk-0cb6x9h5.js";import{a4e,yG,Sx}from"./chunk-67kwemb3.js";import{Cht,p9}from"./chunk-c7ypkxk9.js";async function Wot(t,a,i,s){let e=await Sx(t,a,i,{gatePublicRead:!1,credentials:s});if(e.err!==null){if(e.errorCode==="boot_404")return{ok:!1,reason:a4e(e)?"never_published":"not_found"};if(yG(e))return{ok:!1,reason:"other_org",err:e.err};return{ok:!1,reason:"failed",err:e.err,errorCode:e.errorCode}}if(e.assetToken===void 0)return{ok:!1,reason:"public_outside_org"};let r=typeof e.data.title==="string"?e.data.title:void 0,o=r!==void 0?Wf(r)??void 0:void 0,n=p9({role:Cht(e.data.perm?.role)});return{ok:!0,...o!==void 0&&{title:o},...n!==void 0&&{owned:n}}}var dAn=15000;function cAn(t){switch(t.reason){case"public_outside_org":return"Couldn't open that artifact. It's public and from outside your organization.";case"other_org":return"Couldn't open that artifact. It's in another of your organizations.";case"never_published":return"Couldn't open that artifact. Nothing has been published to it yet.";case"not_found":return"Couldn't open that artifact. It may have been deleted, or it isn't shared with you.";case"failed":return t.errorCode===void 0||t.errorCode==="boot_request_error"?"Couldn't check that artifact, so it wasn't opened. Try again.":"Couldn't check that artifact, so it wasn't opened."}}
export{Wot,dAn,cAn};
