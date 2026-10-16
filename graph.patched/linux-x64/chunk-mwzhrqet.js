// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{$a}from"./chunk-5znx2wc7.js";var zh={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,MOUSE_SGR_PIXELS:1016,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function i1(E){return $a(`?${E}h`)}function oY(E){return $a(`?${E}l`)}var u2t=i1(zh.SYNCHRONIZED_UPDATE),ent=oY(zh.SYNCHRONIZED_UPDATE),P5o=i1(zh.BRACKETED_PASTE),zSn=oY(zh.BRACKETED_PASTE),GSn=i1(zh.FOCUS_EVENTS),cvt=oY(zh.FOCUS_EVENTS),I5o=i1(zh.THEME_NOTIFY),VSn=oY(zh.THEME_NOTIFY),d0=i1(zh.CURSOR_VISIBLE),c0=oY(zh.CURSOR_VISIBLE),uvt=i1(zh.ALT_SCREEN_CLEAR),pvt=oY(zh.ALT_SCREEN_CLEAR),KSn=oY(zh.WIN32_INPUT_MODE),S=i1(zh.MOUSE_NORMAL)+i1(zh.MOUSE_BUTTON)+i1(zh.MOUSE_ANY)+i1(zh.MOUSE_SGR),_=i1(zh.MOUSE_NORMAL)+i1(zh.MOUSE_SGR),$ye=oY(zh.MOUSE_SGR)+oY(zh.MOUSE_ANY)+oY(zh.MOUSE_BUTTON)+oY(zh.MOUSE_NORMAL),O5o=i1(zh.MOUSE_SGR_PIXELS),M5o=oY(zh.MOUSE_SGR_PIXELS)+i1(zh.MOUSE_SGR);function qSn(E){switch(E){case"full":return S;case"scroll":return _;case"off":return""}}
export{zh,i1,oY,u2t,ent,P5o,zSn,GSn,cvt,I5o,VSn,d0,c0,uvt,pvt,KSn,$ye,O5o,M5o,qSn};
