// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{i}from"./chunk-428zme0n.js";import{R}from"./chunk-shjgbbk7.js";import{homedir as r}from"os";import{join as o}from"path";function yhs(){if(R()==="windows"&&i.APPDATA)return o(i.APPDATA,"gcloud");return o(r(),".config","gcloud")}function cbr(){return i.CLOUDSDK_CONFIG||yhs()}
export{yhs,cbr};
