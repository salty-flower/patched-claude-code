// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{a}from"./chunk-h422gpw8.js";import{M}from"./chunk-x352w4g5.js";import{homedir as r}from"os";import{join as o}from"path";function Kso(){if(M()==="windows"&&a.APPDATA)return o(a.APPDATA,"gcloud");return o(r(),".config","gcloud")}function UOn(){return a.CLOUDSDK_CONFIG||Kso()}
export{Kso,UOn};
