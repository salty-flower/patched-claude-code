// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{gg}from"./chunk-mgyve4vr.js";import{mc}from"./chunk-xt3ddvnj.js";import{Z}from"./chunk-t2kfemrk.js";var _=Z(gg(),1),S=Z(mc(),1),Z3t="AWS_ACCESS_KEY_ID",e4t="AWS_SECRET_ACCESS_KEY",Qdr="AWS_SESSION_TOKEN",Zdr="AWS_CREDENTIAL_EXPIRATION",epr="AWS_CREDENTIAL_SCOPE",tpr="AWS_ACCOUNT_ID",KVe=(e)=>async()=>{e?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");let o=process.env[Z3t],r=process.env[e4t],n=process.env[Qdr],s=process.env[Zdr],t=process.env[epr],E=process.env[tpr];if(o&&r){let c={accessKeyId:o,secretAccessKey:r,...n&&{sessionToken:n},...s&&{expiration:new Date(s)},...t&&{credentialScope:t},...E&&{accountId:E}};return _.setCredentialFeature(c,"CREDENTIALS_ENV_VARS","g"),c}throw new S.CredentialsProviderError("Unable to find environment variable credentials.",{logger:e?.logger})};export{Z3t,e4t,Qdr,Zdr,epr,tpr,KVe};
