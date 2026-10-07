// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import"./chunk-h8r0k8e5.js";import"./chunk-29aedz4e.js";import"./chunk-hdvxmrfb.js";import"./chunk-fqsygynq.js";import"./chunk-ws170zqm.js";import"./chunk-5qeme8w3.js";import"./chunk-xbg4a11x.js";import"./chunk-yfyrtrqq.js";import"./chunk-ym46rm1e.js";import"./chunk-j77txbjn.js";import"./chunk-12mdvf4x.js";import"./chunk-8mvda08c.js";import"./chunk-ht3pd6g4.js";import{S,X}from"./chunk-f8eqwxpt.js";import"./chunk-sgznn49v.js";import"./chunk-pey4mmsy.js";import"./chunk-fqzh3zpr.js";import"./chunk-qfs4y3ww.js";import"./chunk-jppak124.js";import"./chunk-egwr9wbg.js";import"./chunk-2cxzjsy9.js";import"./chunk-qbf9wv32.js";import"./chunk-e3gw32ew.js";import"./chunk-ma17m27h.js";import"./chunk-2pfss7d0.js";import"./chunk-nqb0d8cm.js";import"./chunk-wq75sevg.js";import"./chunk-mcq8tx7b.js";import"./chunk-zx2a39z1.js";import"./chunk-k87xjea0.js";import"./chunk-05852gwt.js";import"./chunk-peyxry7r.js";import"./chunk-j4wy5r0f.js";import"./chunk-vrsbmck5.js";import"./chunk-ev2h864q.js";import"./chunk-wd4jmzs1.js";import"./chunk-efx2t2v4.js";import"./chunk-1affnqfa.js";import"./chunk-prs2t84m.js";import"./chunk-ts0309p1.js";import"./chunk-a80m1vff.js";import"./chunk-yt7xs5e7.js";import"./chunk-errb129w.js";import"./chunk-zm2rbh78.js";import"./chunk-1jrtnqew.js";import"./chunk-hd1pzxwr.js";import"./chunk-9s9xt61j.js";import"./chunk-1613xha0.js";import"./chunk-861a7whf.js";import"./chunk-w5vv1884.js";import"./chunk-fpm199ny.js";import"./chunk-sac2pmqn.js";import"./chunk-msjjanss.js";import{qi}from"./chunk-6pw2mkqv.js";import"./chunk-jstrrwpw.js";import"./chunk-s46qgfx7.js";import"./chunk-81x96web.js";import"./chunk-yekbj8yj.js";import"./chunk-3c5rpefa.js";import"./chunk-xwn85bww.js";import"./chunk-j95hbnd3.js";import"./chunk-xcq89ne8.js";import"./chunk-9k1s2d1q.js";import"./chunk-qvy43n2d.js";import"./chunk-6pm26t04.js";import"./chunk-590ye0ab.js";import"./chunk-bfvymavp.js";import"./chunk-napcsc17.js";import"./chunk-rdy2m4vh.js";import"./chunk-vxnbg770.js";import"./chunk-j7hymft9.js";import"./chunk-s7j36v3t.js";import"./chunk-vd0fkmt2.js";import"./chunk-44myv9zp.js";import"./chunk-p7dmh6b6.js";import"./chunk-5bwrderf.js";import"./chunk-e58tctgr.js";import"./chunk-kdpkw3w6.js";import"./chunk-d4ww8xgn.js";import"./chunk-pae0cprg.js";import"./chunk-y5s9hk02.js";import"./chunk-3v5rbztp.js";import"./chunk-vchkvryg.js";import"./chunk-nzb7sm1z.js";import{ZFe}from"./chunk-44mgk088.js";import{ul}from"./chunk-z2hzgcea.js";import"./chunk-xf0v8hrw.js";import"./chunk-aqdr2hzp.js";import"./chunk-zgcypqv5.js";import"./chunk-t0npft1e.js";import"./chunk-xcsctrab.js";import"./chunk-qs7t29dk.js";import"./chunk-dy624h5m.js";import"./chunk-6n9fenms.js";import"./chunk-pxafsfws.js";import"./chunk-0an2wbq6.js";import"./chunk-1d5bwndp.js";import"./chunk-1csct632.js";import"./chunk-pqzrrpbd.js";import"./chunk-at8bm9tq.js";import"./chunk-e3yg5bam.js";import{createPublicKey as l,verify as g}from"crypto";function y(t){let r={header:!1,verify:!0,checkExpiry:!0,help:!1};for(let e=0;e<t.length;e++){let n=t[e];switch(n){case"--help":case"-h":r.help=!0;break;case"--header":r.header=!0;break;case"--verify":r.verify=!0;break;case"--no-verify":r.verify=!1;break;case"--no-check-expiry":r.checkExpiry=!1;break;case"--api-url":{let o=t[++e];if(o===void 0)throw Error("decode-token: --api-url requires a value");r.apiUrl=o;break}default:if(n.startsWith("-"))throw Error(`decode-token: unknown flag ${n}`);if(r.token!==void 0)throw Error("decode-token: at most one positional token argument");r.token=n}}return r}function w(t){let e=t.trim().replace(/^sk-ant-[a-z0-9]+-/i,"").split(".");if(e.length!==3||!e[0]||!e[1]||!e[2])throw Error("decode-token: not a JWT \u2014 expected 3 dot-separated base64url segments "+`(after stripping any sk-ant- prefix), got ${e.length}`);return{headerB64:e[0],payloadB64:e[1],signatureB64:e[2]}}function u(t,r){if(!/^[A-Za-z0-9_-]+$/.test(t))throw Error(`decode-token: ${r} is not valid base64url (unexpected characters)`);let e=Buffer.from(t,"base64url").toString("utf8"),n;try{n=X(e)}catch(o){throw Error(`decode-token: ${r} is not valid JSON: ${o}`)}if(n===null||typeof n!=="object"||Array.isArray(n))throw Error(`decode-token: ${r} is not a JSON object`);return n}var E={ES256:"EC",RS256:"RSA"};function m(t,r=Math.floor(Date.now()/1000),e=60){let{exp:n,nbf:o}=t;if(typeof n!=="number")throw Error("decode-token: token has no numeric `exp` claim");if(r>n+e)throw Error(`decode-token: token EXPIRED at ${new Date(n*1000).toISOString()} (${Math.round(r-n)}s ago)`);if(typeof o==="number"&&r+e<o)throw Error(`decode-token: token not valid until ${new Date(o*1000).toISOString()}`)}async function x(t){let r=t.header.alg,e=t.header.kid;if(typeof r!=="string"||typeof e!=="string")throw Error("decode-token: JWT header is missing `alg` or `kid` \u2014 cannot select a JWKS key");let n=E[r];if(!n)throw Error(`decode-token: unsupported alg=${r} \u2014 only ES256 and RS256 are supported`);let o;try{o=await t.fetchFn(t.jwksUrl,{...qi({url:t.jwksUrl}),signal:AbortSignal.timeout(30000)})}catch(a){throw Error(`decode-token: failed to fetch JWKS from ${t.jwksUrl}: ${a}`)}if(!o.ok)throw Error(`decode-token: JWKS fetch returned ${o.status} ${o.statusText} for ${t.jwksUrl}`);let s=(await o.json()).keys?.find((a)=>a.kid===e);if(!s)throw Error(`decode-token: no JWKS key with kid=${e} at ${t.jwksUrl} \u2014 `+"token may be signed by a different environment (try --api-url).");if(s.kty!==n)throw Error(`decode-token: JWKS key kid=${e} has kty=${s.kty} but alg=${r} needs kty=${n}`);let c="sha256",d=r==="ES256"?{key:l({key:s,format:"jwk"}),dsaEncoding:"ieee-p1363"}:{key:l({key:s,format:"jwk"})},k=Buffer.from(`${t.headerB64}.${t.payloadB64}`,"utf8"),f=Buffer.from(t.signatureB64,"base64url");if(!g(c,k,d,f))throw Error("decode-token: signature verification FAILED");if(t.checkExpiry!==!1)m(t.payload);return{kid:e}}var h=16384,b=5000;async function v(t=process.stdin){if(t.isTTY)return"";let r=[],e=0;for await(let n of t){let o=Buffer.from(n);if(e+=o.length,e>h)throw Error(`decode-token: stdin exceeds ${h/1024} KiB; session-ingress JWTs are ~1 KB. Pass the token as an argument or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.`);r.push(o)}return Buffer.concat(r).toString("utf8")}async function _(t,r,e=process.stdin,n=b){if(t?.trim())return t.trim();let o=r.CLAUDE_CODE_SESSION_ACCESS_TOKEN?.trim();if(o)return o;let i=(await ul(v(e),n,"decode-token: reading token from stdin")).trim();if(i)return i;throw Error("decode-token: no token supplied. Pass it as an argument, pipe it on stdin, or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.")}var O=`Usage: claude self-hosted-runner decode-token [token] [options]

Decode a session-ingress JWT (CLAUDE_CODE_SESSION_ACCESS_TOKEN) and print its
claims as JSON to stdout. Strips any sk-ant-cc- / sk-ant-si- prefix
automatically. Pipe to jq to extract a single claim.

Token source (first non-empty wins):
  1. Positional argument
  2. $CLAUDE_CODE_SESSION_ACCESS_TOKEN
  3. Piped stdin

Signature verification against <api-url>/v1/code/.well-known/jwks.json is ON
by default, as is the exp/nbf check (60s skew). Prints "verified (kid=\u2026,
sig+exp)" to stderr on success; exits 1 on verification failure, expiry, or
JWKS fetch error. Does NOT pin iss/aud/token-type \u2014 compare those from the
decoded claims if your auth model depends on them.

Options:
  --header           Print the JWT header instead of the claims.
  --no-verify        Skip signature verification and the JWKS fetch. For
                     offline inspection only \u2014 do NOT feed the output to an
                     auth decision.
  --no-check-expiry  Skip the exp/nbf check (signature still verified). For
                     forensics ("was this token ever issued by us?").
  --api-url <url>    API base URL for JWKS fetch (default: $ANTHROPIC_BASE_URL
                     or the built-in default).
  --verify           (Deprecated \u2014 verification is the default. Kept so older
                     wrapper scripts don't break.)
  --help, -h         Show this help.

Examples:
  # In an --exec-path wrapper: who created this session? Signature is
  # verified by default, so a tampered token exits non-zero here.
  # Use jq -re (not -r) when the claim gates an auth decision \u2014 jq -r prints
  # the literal string "null" and exits 0 when the claim is missing.
  creator=$(claude self-hosted-runner decode-token | jq -re .act.email) \\
    || { echo "session JWT: no creator identity or verification failed" >&2; exit 1; }

  # Offline inspection (no network, no auth decision)
  claude self-hosted-runner decode-token --no-verify

  # Decode a different token by piping it (unset the env var first)
  echo "$SOME_TOKEN" | env -u CLAUDE_CODE_SESSION_ACCESS_TOKEN \\
    claude self-hosted-runner decode-token --no-verify
`;async function C(t){let r;try{r=y(t)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}if(r.help)process.stdout.write(O),process.exit(0);try{let e=await _(r.token,process.env),{headerB64:n,payloadB64:o,signatureB64:i}=w(e),s=u(n,"header"),c=u(o,"payload");if(r.verify){let f=`${(r.apiUrl??ZFe()).replace(/\/+$/,"")}/v1/code/.well-known/jwks.json`,{kid:p}=await x({headerB64:n,payloadB64:o,signatureB64:i,header:s,payload:c,jwksUrl:f,fetchFn:fetch,checkExpiry:r.checkExpiry}),a=r.checkExpiry?"sig+exp":"sig only, exp SKIPPED";process.stderr.write(`verified (kid=${p}, ${a})
`)}let d=r.header?s:c;process.stdout.write(`${S(d,null,2)}
`),process.exit(0)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}}export{C as selfHostedRunnerDecodeTokenMain};
