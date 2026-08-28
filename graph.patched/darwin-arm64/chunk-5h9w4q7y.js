// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{a}from"./chunk-bn8q5mbz.js";import{on}from"./chunk-hbdvbe8s.js";var MI="computer-use",Ghn="com.anthropic.claude-code.cli-no-window",t={"iTerm.app":"com.googlecode.iterm2",Apple_Terminal:"com.apple.Terminal",ghostty:"com.mitchellh.ghostty",kitty:"net.kovidgoyal.kitty",WarpTerminal:"dev.warp.Warp-Stable",vscode:"com.microsoft.VSCode"};function EYn(){let e=a.__CFBundleIdentifier;if(e)return e;return t[a.terminal??""]??null}var tyt={screenshotFiltering:"native",platform:"darwin",adaptiveResolution:!1,saveToDisk:!1};function nF(e){return on(e)===MI}var CYn=["request_access","screenshot","zoom","left_click","double_click","triple_click","right_click","middle_click","type","key","scroll","left_click_drag","mouse_move","open_application","switch_display","list_granted_applications","read_clipboard","write_clipboard","wait","cursor_position","hold_key","left_mouse_down","left_mouse_up","computer_batch","request_teach_access","teach_step","teach_batch","app_ax_find","app_batch","app_bring_to_current_space","app_click","app_drag","app_key","app_list_windows","app_menu","app_release","app_screenshot","app_scroll","app_type","list_apps","release_full_control","request_full_control"];
export{MI,Ghn,EYn,tyt,nF,CYn};
