// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{fe}from"./chunk-c63g0fmv.js";var u=["BUN_GC_TIMER_INTERVAL","MIMALLOC_PURGE_HOLES_MIN_INTERVAL","BUN_IDLE_GC_SECONDS","MIMALLOC_PURGE_DELAY","BUN_JSC_useFTLJIT","BUN_JSC_percentCPUPerMBForEdenTimer","BUN_JSC_percentCPUPerMBForFullTimer"],d=new Set(["","0","false","no","off"]),n=fe({isNoted:!1,namesSet:void 0,purgeDelayMs:void 0,isCollectionTimerOff:void 0},(e)=>{e.isNoted=!1,e.namesSet=void 0,e.purgeDelayMs=void 0,e.isCollectionTimerOff=void 0});function a(e){return e!==void 0&&!d.has(e.toLowerCase())}function p7a(){if(n.isNoted)return;n.isNoted=!0;try{let e=process.env,r=0;for(let[s,f]of u.entries())if(e[f])r|=1<<s;let t=e.MIMALLOC_PURGE_DELAY,o=t!==void 0&&/^\d{1,7}$/.test(t)?Number(t):void 0,i=a(e.BUN_GC_TIMER_DISABLE);n.purgeDelayMs=o,n.isCollectionTimerOff=i,n.namesSet=r}catch{}}function i8n(){return n.namesSet}function a8n(){return n.purgeDelayMs}function czr(){return n.isCollectionTimerOff}
export{p7a,i8n,a8n,czr};
