// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{K,z}from"./chunk-2vv5hpw3.js";import{Ne}from"./chunk-gqqx2ybk.js";class e{reconnect=null;toggle=null;isDisabled=null;isPolicyBlocked=null;policyColdStartWaiter=null;skippedDynamicServers=[];cliOwnedConfigs=new WeakSet;cliOwnedBearerProviders=new WeakMap;identityEpoch=0;identityBaseline=void 0;identitySeedAttempted=!1;identityChangedThisProcess=!1;identityTrippedHandler=null;identityTripUnowned=!1;headlessMcpTeardown=null;headlessConnectorMountInFlight=void 0;authCacheRead=null;authCacheWriteChain=Promise.resolve();firstPartyDesignConsentAsks=new Map;claudeAiConfigsFetch=null;pendingCrossOrgNotice=void 0;claudeAiConnectedThisSession=new Set;pendingScopeExpansionNotice=void 0;scopeExpansionDisclosed=!1;officialUrls=void 0;vscodeClient=null;toolRefreshSequences=new WeakMap;droppedToolsSeqByConnection=new WeakMap;toolsListErrorByResult=new WeakMap;discoveryFetchErrors=new WeakMap;rawToolsByResult=new WeakMap;rawCommandsByResult=new WeakMap;rawResourcesByResult=new WeakMap;rawFetchedAtByResult=new WeakMap;persistedDiscoveryRounds=new WeakSet;listChangedRefetchHandlers=new WeakMap;skillsFunnelSeen=new Set;skillsFetcher=null;discoveryCacheStore=null;connectionCache=null;cachedFirstDialArmsRan=new WeakSet;supersededDials=new WeakSet;swrRefreshDialsInFlight=new WeakSet;reauthDecisionSinkForTest=void 0;holdStaleReauthEntryForTest=!1;oauthCallbackListeners=new Map;oauthCallbackSubmitters=new Map;activeOAuthFlows=new Map;authLost=Ne();reauthReconnect=Ne();cachedAdopt=Ne();cachedDialFailed=Ne()}var n=new K(()=>new e);function Nt(){return n.of(z().host)}
export{Nt};
