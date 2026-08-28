// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{gg}from"./chunk-540t9k9z.js";import{mc}from"./chunk-zr8jrgqx.js";import{Z}from"./chunk-by569dsf.js";var _=Z(gg(),1),S=Z(mc(),1),Xzt="AWS_ACCESS_KEY_ID",Jzt="AWS_SECRET_ACCESS_KEY",Wdr="AWS_SESSION_TOKEN",qdr="AWS_CREDENTIAL_EXPIRATION",Vdr="AWS_CREDENTIAL_SCOPE",Kdr="AWS_ACCOUNT_ID",V9e=(e)=>async()=>{e?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");let o=process.env[Xzt],r=process.env[Jzt],n=process.env[Wdr],s=process.env[qdr],t=process.env[Vdr],E=process.env[Kdr];if(o&&r){let c={accessKeyId:o,secretAccessKey:r,...n&&{sessionToken:n},...s&&{expiration:new Date(s)},...t&&{credentialScope:t},...E&&{accountId:E}};return _.setCredentialFeature(c,"CREDENTIALS_ENV_VARS","g"),c}throw new S.CredentialsProviderError("Unable to find environment variable credentials.",{logger:e?.logger})};export{Xzt,Jzt,Wdr,qdr,Vdr,Kdr,V9e};
