// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{a}from"./chunk-yvnhkg35.js";import{O}from"./chunk-xaes9ysz.js";import{homedir as r}from"os";import{join as o}from"path";function zVr(){if(O()==="windows"&&a.APPDATA)return o(a.APPDATA,"gcloud");return o(r(),".config","gcloud")}function fwn(){return a.CLOUDSDK_CONFIG||zVr()}
export{zVr,fwn};
