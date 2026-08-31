// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{pA}from"./chunk-x14264hw.js";import{Jh}from"./chunk-7fjxb7mj.js";import{Gc}from"./chunk-04t0qmth.js";import{j}from"./chunk-5nnrmmhw.js";var c=j(Jh(),1),d=j(Gc(),1),a=j(pA(),1);import{readFileSync as f}from"fs";var tEt=(e)=>async(t)=>{e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");let{roleArn:o,roleSessionName:r,webIdentityToken:s,providerId:n,policyArns:m,policy:g,durationSeconds:p}=e,{roleAssumerWithWebIdentity:i}=e;if(!i){let{getDefaultRoleAssumerWithWebIdentity:E}=await import("./chunk-8eedb5ek.js").then((m)=>j(m.default,1));i=E({...e.clientConfig,credentialProviderLogger:e.logger,parentClientConfig:{...t?.callerClientConfig,...e.parentClientConfig}},e.clientPlugins)}return i({RoleArn:o,RoleSessionName:r??`aws-sdk-js-session-${Date.now()}`,WebIdentityToken:s,ProviderId:n,PolicyArns:m,Policy:g,DurationSeconds:p})};var l="AWS_WEB_IDENTITY_TOKEN_FILE",_="AWS_ROLE_ARN",S="AWS_ROLE_SESSION_NAME",yvn=(e={})=>async(t)=>{e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");let o=e?.webIdentityTokenFile??process.env[l],r=e?.roleArn??process.env[_],s=e?.roleSessionName??process.env[S];if(!o||!r)throw new d.CredentialsProviderError("Web identity configuration not specified",{logger:e.logger});let n=await tEt({...e,webIdentityToken:a.externalDataInterceptor?.getTokenRecord?.()[o]??f(o,{encoding:"ascii"}),roleArn:r,roleSessionName:s})(t);if(o===process.env[l])c.setCredentialFeature(n,"CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN","h");return n};export{tEt,yvn};
