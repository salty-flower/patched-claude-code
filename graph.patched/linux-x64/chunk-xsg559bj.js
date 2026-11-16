// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{i}from"./chunk-5g5ea6r9.js";import{R}from"./chunk-xezjycv8.js";import{homedir as r}from"os";import{join as o}from"path";function zms(){if(R()==="windows"&&i.APPDATA)return o(i.APPDATA,"gcloud");return o(r(),".config","gcloud")}function Bbr(){return i.CLOUDSDK_CONFIG||zms()}
export{zms,Bbr};
