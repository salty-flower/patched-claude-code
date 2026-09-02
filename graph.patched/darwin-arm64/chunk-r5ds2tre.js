// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Jh}from"./chunk-tj2tekdz.js";import{qc}from"./chunk-2jhmn56z.js";import{j}from"./chunk-rqyyny1n.js";var _=j(Jh(),1),S=j(qc(),1),HGt="AWS_ACCESS_KEY_ID",xGt="AWS_SECRET_ACCESS_KEY",ubr="AWS_SESSION_TOKEN",dbr="AWS_CREDENTIAL_EXPIRATION",pbr="AWS_CREDENTIAL_SCOPE",fbr="AWS_ACCOUNT_ID",AYe=(e)=>async()=>{e?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");let o=process.env[HGt],r=process.env[xGt],n=process.env[ubr],s=process.env[dbr],t=process.env[pbr],E=process.env[fbr];if(o&&r){let c={accessKeyId:o,secretAccessKey:r,...n&&{sessionToken:n},...s&&{expiration:new Date(s)},...t&&{credentialScope:t},...E&&{accountId:E}};return _.setCredentialFeature(c,"CREDENTIALS_ENV_VARS","g"),c}throw new S.CredentialsProviderError("Unable to find environment variable credentials.",{logger:e?.logger})};export{HGt,xGt,ubr,dbr,pbr,fbr,AYe};
