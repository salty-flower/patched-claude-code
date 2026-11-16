// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{C}from"./chunk-wryttfdq.js";class pwr extends C{}function PBi(t,e){if(!t)throw new pwr("redirectUriOnly is set and the request names no redirectUri.","MCP OAuth refused: redirectUriOnly with no redirectUri");if(e.oauth?.clientId||e.oauth?.xaa)throw new pwr("This server's configuration sets oauth.clientId or oauth.xaa, so sign-in may need a callback on this computer, which redirectUriOnly does not allow.","MCP OAuth refused: redirectUriOnly with a configured client")}
export{pwr,PBi};
