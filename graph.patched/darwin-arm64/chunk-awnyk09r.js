// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{fl}from"./chunk-yn0pfn70.js";var uh={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,MOUSE_SGR_PIXELS:1016,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function HU(E){return fl(`?${E}h`)}function pq(E){return fl(`?${E}l`)}var d$t=HU(uh.SYNCHRONIZED_UPDATE),a7e=pq(uh.SYNCHRONIZED_UPDATE),XNo=HU(uh.BRACKETED_PASTE),lun=pq(uh.BRACKETED_PASTE),cun=HU(uh.FOCUS_EVENTS),rgt=pq(uh.FOCUS_EVENTS),JNo=HU(uh.THEME_NOTIFY),dun=pq(uh.THEME_NOTIFY),XH=HU(uh.CURSOR_VISIBLE),JH=pq(uh.CURSOR_VISIBLE),ogt=HU(uh.ALT_SCREEN_CLEAR),sgt=pq(uh.ALT_SCREEN_CLEAR),uun=pq(uh.WIN32_INPUT_MODE),S=HU(uh.MOUSE_NORMAL)+HU(uh.MOUSE_BUTTON)+HU(uh.MOUSE_ANY)+HU(uh.MOUSE_SGR),_=HU(uh.MOUSE_NORMAL)+HU(uh.MOUSE_SGR),zfe=pq(uh.MOUSE_SGR)+pq(uh.MOUSE_ANY)+pq(uh.MOUSE_BUTTON)+pq(uh.MOUSE_NORMAL),QNo=HU(uh.MOUSE_SGR_PIXELS),ZNo=pq(uh.MOUSE_SGR_PIXELS)+HU(uh.MOUSE_SGR);function pun(E){switch(E){case"full":return S;case"scroll":return _;case"off":return""}}
export{uh,HU,pq,d$t,a7e,XNo,lun,cun,rgt,JNo,dun,XH,JH,ogt,sgt,uun,zfe,QNo,ZNo,pun};
