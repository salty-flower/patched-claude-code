// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{A}from"./chunk-5p3mkpyy.js";class Awr extends A{}function vBi(t,e){if(!t)throw new Awr("redirectUriOnly is set and the request names no redirectUri.","MCP OAuth refused: redirectUriOnly with no redirectUri");if(e.oauth?.clientId||e.oauth?.xaa)throw new Awr("This server's configuration sets oauth.clientId or oauth.xaa, so sign-in may need a callback on this computer, which redirectUriOnly does not allow.","MCP OAuth refused: redirectUriOnly with a configured client")}
export{Awr,vBi};
