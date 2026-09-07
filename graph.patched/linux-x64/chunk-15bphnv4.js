// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{lp}from"./chunk-n17xw1z0.js";var Dp={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function jP(E){return lp(`?${E}h`)}function wW(E){return lp(`?${E}l`)}var WGe=jP(Dp.SYNCHRONIZED_UPDATE),Yye=wW(Dp.SYNCHRONIZED_UPDATE),pFn=jP(Dp.BRACKETED_PASTE),Wst=wW(Dp.BRACKETED_PASTE),zst=jP(Dp.FOCUS_EVENTS),BRe=wW(Dp.FOCUS_EVENTS),mFn=jP(Dp.THEME_NOTIFY),Vst=wW(Dp.THEME_NOTIFY),ok=jP(Dp.CURSOR_VISIBLE),sk=wW(Dp.CURSOR_VISIBLE),URe=jP(Dp.ALT_SCREEN_CLEAR),jRe=wW(Dp.ALT_SCREEN_CLEAR),qst=wW(Dp.WIN32_INPUT_MODE),_=jP(Dp.MOUSE_NORMAL)+jP(Dp.MOUSE_BUTTON)+jP(Dp.MOUSE_ANY)+jP(Dp.MOUSE_SGR),t=jP(Dp.MOUSE_NORMAL)+jP(Dp.MOUSE_SGR),h6=wW(Dp.MOUSE_SGR)+wW(Dp.MOUSE_ANY)+wW(Dp.MOUSE_BUTTON)+wW(Dp.MOUSE_NORMAL);function zGe(E){switch(E){case"full":return _;case"scroll":return t;case"off":return""}}
export{Dp,jP,wW,WGe,Yye,pFn,Wst,zst,BRe,mFn,Vst,ok,sk,URe,jRe,qst,h6,zGe};
