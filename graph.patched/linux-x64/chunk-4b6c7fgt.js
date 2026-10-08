// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Pn}from"./chunk-699w2z4t.js";var Ya="claude-in-chrome",yNn="javascript_tool";function cE(e){return Pn(e)===Ya}var t="--claude-in-chrome-mcp";function efo(e){if(e.type!==void 0&&e.type!=="stdio")return!1;return(e.command?.includes(t)??!1)||(e.args?.some((o)=>o.includes(t))??!1)}var Nhs=["file_upload","browser_batch"],_Nn=[yNn,"read_page","find","form_input","computer","browser_batch","navigate","resize_window","gif_creator","upload_image","get_page_text","tabs_context_mcp","tabs_create_mcp","tabs_close_mcp","read_console_messages","read_network_requests","shortcuts_list","shortcuts_execute","file_upload","switch_browser","list_connected_browsers","select_browser"],bNn="file_upload is not available in this session, alone or inside browser_batch, and nothing in this call ran. Ask the user to choose the file in their browser themselves.";function a_e(){return{type:"stdio",command:process.execPath,args:[t],scope:"dynamic"}}
export{Ya,yNn,cE,efo,Nhs,_Nn,bNn,a_e};
