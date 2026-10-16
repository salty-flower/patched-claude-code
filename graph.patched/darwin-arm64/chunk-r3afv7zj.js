// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{Fa}from"./chunk-fgjmf9pc.js";var zh={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,MOUSE_SGR_PIXELS:1016,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function gB(E){return Fa(`?${E}h`)}function f3(E){return Fa(`?${E}l`)}var bzt=gB(zh.SYNCHRONIZED_UPDATE),snt=f3(zh.SYNCHRONIZED_UPDATE),a9o=gB(zh.BRACKETED_PASTE),swn=f3(zh.BRACKETED_PASTE),iwn=gB(zh.FOCUS_EVENTS),fEt=f3(zh.FOCUS_EVENTS),l9o=gB(zh.THEME_NOTIFY),awn=f3(zh.THEME_NOTIFY),fD=gB(zh.CURSOR_VISIBLE),mD=f3(zh.CURSOR_VISIBLE),mEt=gB(zh.ALT_SCREEN_CLEAR),gEt=f3(zh.ALT_SCREEN_CLEAR),lwn=f3(zh.WIN32_INPUT_MODE),S=gB(zh.MOUSE_NORMAL)+gB(zh.MOUSE_BUTTON)+gB(zh.MOUSE_ANY)+gB(zh.MOUSE_SGR),_=gB(zh.MOUSE_NORMAL)+gB(zh.MOUSE_SGR),jye=f3(zh.MOUSE_SGR)+f3(zh.MOUSE_ANY)+f3(zh.MOUSE_BUTTON)+f3(zh.MOUSE_NORMAL),d9o=gB(zh.MOUSE_SGR_PIXELS),c9o=f3(zh.MOUSE_SGR_PIXELS)+gB(zh.MOUSE_SGR);function dwn(E){switch(E){case"full":return S;case"scroll":return _;case"off":return""}}
export{zh,gB,f3,bzt,snt,a9o,swn,iwn,fEt,l9o,awn,fD,mD,mEt,gEt,lwn,jye,d9o,c9o,dwn};
