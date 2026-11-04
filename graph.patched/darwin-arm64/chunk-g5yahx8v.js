// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{i}from"./chunk-n1cpnz94.js";import{P}from"./chunk-drmqng8t.js";import{homedir as r}from"os";import{join as o}from"path";function i6o(){if(P()==="windows"&&i.APPDATA)return o(i.APPDATA,"gcloud");return o(r(),".config","gcloud")}function mQn(){return i.CLOUDSDK_CONFIG||i6o()}
export{i6o,mQn};
