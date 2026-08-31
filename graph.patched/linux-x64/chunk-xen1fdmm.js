// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Jh}from"./chunk-7fjxb7mj.js";import{Gc}from"./chunk-04t0qmth.js";import{j}from"./chunk-5nnrmmhw.js";var _=j(Jh(),1),S=j(Gc(),1),k4t="AWS_ACCESS_KEY_ID",T4t="AWS_SECRET_ACCESS_KEY",rSr="AWS_SESSION_TOKEN",oSr="AWS_CREDENTIAL_EXPIRATION",iSr="AWS_CREDENTIAL_SCOPE",sSr="AWS_ACCOUNT_ID",wJe=(e)=>async()=>{e?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");let o=process.env[k4t],r=process.env[T4t],n=process.env[rSr],s=process.env[oSr],t=process.env[iSr],E=process.env[sSr];if(o&&r){let c={accessKeyId:o,secretAccessKey:r,...n&&{sessionToken:n},...s&&{expiration:new Date(s)},...t&&{credentialScope:t},...E&&{accountId:E}};return _.setCredentialFeature(c,"CREDENTIALS_ENV_VARS","g"),c}throw new S.CredentialsProviderError("Unable to find environment variable credentials.",{logger:e?.logger})};export{k4t,T4t,rSr,oSr,iSr,sSr,wJe};
