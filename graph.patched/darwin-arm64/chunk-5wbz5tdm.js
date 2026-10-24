// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{rl}from"./chunk-daaayw23.js";var Jy={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,MOUSE_SGR_PIXELS:1016,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function zW(E){return rl(`?${E}h`)}function t9(E){return rl(`?${E}l`)}var pYt=zW(Jy.SYNCHRONIZED_UPDATE),tdt=t9(Jy.SYNCHRONIZED_UPDATE),Gps=zW(Jy.BRACKETED_PASTE),QIn=t9(Jy.BRACKETED_PASTE),ZIn=zW(Jy.FOCUS_EVENTS),EPt=t9(Jy.FOCUS_EVENTS),zps=zW(Jy.THEME_NOTIFY),eOn=t9(Jy.THEME_NOTIFY),gN=zW(Jy.CURSOR_VISIBLE),hN=t9(Jy.CURSOR_VISIBLE),vPt=zW(Jy.ALT_SCREEN_CLEAR),kPt=t9(Jy.ALT_SCREEN_CLEAR),tOn=t9(Jy.WIN32_INPUT_MODE),S=zW(Jy.MOUSE_NORMAL)+zW(Jy.MOUSE_BUTTON)+zW(Jy.MOUSE_ANY)+zW(Jy.MOUSE_SGR),_=zW(Jy.MOUSE_NORMAL)+zW(Jy.MOUSE_SGR),Wwe=t9(Jy.MOUSE_SGR)+t9(Jy.MOUSE_ANY)+t9(Jy.MOUSE_BUTTON)+t9(Jy.MOUSE_NORMAL),Vps=zW(Jy.MOUSE_SGR_PIXELS),Kps=t9(Jy.MOUSE_SGR_PIXELS)+zW(Jy.MOUSE_SGR);function nOn(E){switch(E){case"full":return S;case"scroll":return _;case"off":return""}}
export{Jy,zW,t9,pYt,tdt,Gps,QIn,ZIn,EPt,zps,eOn,gN,hN,vPt,kPt,tOn,Wwe,Vps,Kps,nOn};
