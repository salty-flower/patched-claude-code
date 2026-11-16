// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{EQ}from"./chunk-fny0ax5k.js";import{gY}from"./chunk-b5f8d9j2.js";var SDn="ListConnectors",Mms="List the MCP connectors installed for the user's claude.ai org, optionally filtered by keyword.",Dms=`List the MCP connectors installed for the user's claude.ai org. Call this when the user asks what connectors they have. Pass keywords to filter to a topic; omit to list all.

Returns name, description, whether each connector is connected at org level (connected may be null when the status check was unavailable \u2014 treat that as unknown, not disconnected), and enabledInChat (whether its tools are loaded in this session). enabledInChat: false means the connector's tools are not loaded in this session; the field does not say why. The user can check a connector, and its tool permissions, in their claude.ai connector settings. Do not name a setting for this chat alone; there may be none. To recommend connectors the user does NOT have yet, use ${gY} \u2192 ${EQ} instead; this tool does not itself connect anything.`;
export{SDn,Mms,Dms};
