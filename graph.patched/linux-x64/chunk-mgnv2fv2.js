// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{iN}from"./chunk-68s9cshv.js";import{BI}from"./chunk-xc1bs4c1.js";import{Tg}from"./chunk-xd6stqvv.js";import{ve}from"./chunk-ye9f1kvm.js";var d=ve(BI()),a=ve(Tg()),m=ve(iN());import{readFileSync as _}from"fs";var l=(e)=>async(t)=>{e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");let{roleArn:o,roleSessionName:r,webIdentityToken:s,providerId:n,policyArns:g,policy:p,durationSeconds:E}=e,{roleAssumerWithWebIdentity:i}=e;if(!i){let{getDefaultRoleAssumerWithWebIdentity:f}=await import("./chunk-jhpgry1w.js").then((m)=>ve(m.default));i=f({...e.clientConfig,credentialProviderLogger:e.logger,parentClientConfig:{...t?.callerClientConfig,...e.parentClientConfig}},e.clientPlugins)}return i({RoleArn:o,RoleSessionName:r??`aws-sdk-js-session-${Date.now()}`,WebIdentityToken:s,ProviderId:n,PolicyArns:g,Policy:p,DurationSeconds:E})};var c="AWS_WEB_IDENTITY_TOKEN_FILE",S="AWS_ROLE_ARN",N="AWS_ROLE_SESSION_NAME",A=(e={})=>async(t)=>{e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");let o=e?.webIdentityTokenFile??process.env[c],r=e?.roleArn??process.env[S],s=e?.roleSessionName??process.env[N];if(!o||!r)throw new a.CredentialsProviderError("Web identity configuration not specified",{logger:e.logger});let n=await l({...e,webIdentityToken:m.externalDataInterceptor?.getTokenRecord?.()[o]??_(o,{encoding:"ascii"}),roleArn:r,roleSessionName:s})(t);if(o===process.env[c])d.setCredentialFeature(n,"CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN","h");return n};export{A as fromTokenFile,l as fromWebToken};
