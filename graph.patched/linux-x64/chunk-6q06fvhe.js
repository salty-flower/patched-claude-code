// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{EQ as S,FQ as v}from"./_403.js";import{a0a as E,g0a as b}from"./_442.js";import"./_445.js";import"./_668.js";import"./_669.js";import"./_670.js";import"./_671.js";import"./_672.js";import"./_673.js";import"./_674.js";import"./_675.js";import"./_676.js";import"./_677.js";import"./_678.js";import"./_679.js";import"./_680.js";import"./_681.js";import"./_682.js";import"./_683.js";import"./_684.js";import"./_685.js";import"./_686.js";import"./_687.js";import"./_688.js";import"./_689.js";import"./_690.js";import"./_691.js";import"./_692.js";import"./_693.js";import"./_694.js";import"./_695.js";import"./_696.js";import"./_697.js";import"./_698.js";import"./_699.js";import"./_700.js";import"./_701.js";import"./_702.js";import"./_703.js";import"./_704.js";import"./_705.js";import"./_706.js";import"./_707.js";import"./_708.js";import"./_709.js";import"./_710.js";import"./_711.js";import"./_712.js";import"./_713.js";import"./_714.js";import"./_715.js";import"./_716.js";import"./_717.js";import{QQc as w,WQc as x}from"./_718.js";import"./_719.js";import"./_720.js";import"./_721.js";import"./_722.js";import"./_728.js";import"./_745.js";import"./_746.js";import"./_747.js";import"./_748.js";import"./_749.js";import"./_750.js";import"./_751.js";import"./_752.js";import"./_753.js";import"./_754.js";import"./_755.js";import"./_756.js";import"./_757.js";import"./_758.js";import"./_759.js";import"./_766.js";import"./_767.js";import"./_769.js";import"./_770.js";import"./_771.js";import"./_772.js";import"./_773.js";import"./_774.js";import"./_775.js";import"./_776.js";import"./_777.js";import"./_778.js";import"./_779.js";import"./_780.js";import"./_789.js";import"./_790.js";import"./_791.js";import"./_795.js";import"./_799.js";import"./_804.js";import"./_805.js";import"./_806.js";import"./_807.js";import"./_808.js";import"./_809.js";import"./_810.js";import"./_811.js";import"./_812.js";import"./_813.js";import"./_814.js";import"./_815.js";import"./_816.js";import"./_817.js";import"./_818.js";import"./_819.js";import{mgd as g,qgd as y,ugd as m}from"./_820.js";import"./_821.js";import"./_822.js";import"./_823.js";import"./_824.js";import"./_825.js";import"./_826.js";import"./_827.js";import"./_828.js";import"./_829.js";import"./_830.js";import"./_831.js";import"./_832.js";import"./_833.js";import"./_834.js";import"./_835.js";import"./_836.js";import"./_837.js";b();x();m();v();import{createPublicKey as l,verify as _}from"crypto";function O(t){let r={header:!1,verify:!0,checkExpiry:!0,help:!1};for(let e=0;e<t.length;e++){let n=t[e];switch(n){case"--help":case"-h":r.help=!0;break;case"--header":r.header=!0;break;case"--verify":r.verify=!0;break;case"--no-verify":r.verify=!1;break;case"--no-check-expiry":r.checkExpiry=!1;break;case"--api-url":{let o=t[++e];if(o===void 0)throw Error("decode-token: --api-url requires a value");r.apiUrl=o;break}default:if(n.startsWith("-"))throw Error(`decode-token: unknown flag ${n}`);if(r.token!==void 0)throw Error("decode-token: at most one positional token argument");r.token=n}}return r}function T(t){let e=t.trim().replace(/^sk-ant-[a-z0-9]+-/i,"").split(".");if(e.length!==3||!e[0]||!e[1]||!e[2])throw Error("decode-token: not a JWT \u2014 expected 3 dot-separated base64url segments "+`(after stripping any sk-ant- prefix), got ${e.length}`);return{headerB64:e[0],payloadB64:e[1],signatureB64:e[2]}}function u(t,r){if(!/^[A-Za-z0-9_-]+$/.test(t))throw Error(`decode-token: ${r} is not valid base64url (unexpected characters)`);let e=Buffer.from(t,"base64url").toString("utf8"),n;try{n=y(e)}catch(o){throw Error(`decode-token: ${r} is not valid JSON: ${o}`)}if(n===null||typeof n!=="object"||Array.isArray(n))throw Error(`decode-token: ${r} is not a JSON object`);return n}var A={ES256:"EC",RS256:"RSA"};function D(t,r=Math.floor(Date.now()/1000),e=60){let{exp:n,nbf:o}=t;if(typeof n!=="number")throw Error("decode-token: token has no numeric `exp` claim");if(r>n+e)throw Error(`decode-token: token EXPIRED at ${new Date(n*1000).toISOString()} (${Math.round(r-n)}s ago)`);if(typeof o==="number"&&r+e<o)throw Error(`decode-token: token not valid until ${new Date(o*1000).toISOString()}`)}async function j(t){let r=t.header.alg,e=t.header.kid;if(typeof r!=="string"||typeof e!=="string")throw Error("decode-token: JWT header is missing `alg` or `kid` \u2014 cannot select a JWKS key");let n=A[r];if(!n)throw Error(`decode-token: unsupported alg=${r} \u2014 only ES256 and RS256 are supported`);let o;try{o=await t.fetchFn(t.jwksUrl,{...w({url:t.jwksUrl}),signal:AbortSignal.timeout(30000)})}catch(a){throw Error(`decode-token: failed to fetch JWKS from ${t.jwksUrl}: ${a}`)}if(!o.ok)throw Error(`decode-token: JWKS fetch returned ${o.status} ${o.statusText} for ${t.jwksUrl}`);let s=(await o.json()).keys?.find((a)=>a.kid===e);if(!s)throw Error(`decode-token: no JWKS key with kid=${e} at ${t.jwksUrl} \u2014 `+"token may be signed by a different environment (try --api-url).");if(s.kty!==n)throw Error(`decode-token: JWKS key kid=${e} has kty=${s.kty} but alg=${r} needs kty=${n}`);let c="sha256",d=r==="ES256"?{key:l({key:s,format:"jwk"}),dsaEncoding:"ieee-p1363"}:{key:l({key:s,format:"jwk"})},k=Buffer.from(`${t.headerB64}.${t.payloadB64}`,"utf8"),f=Buffer.from(t.signatureB64,"base64url");if(!_(c,k,d,f))throw Error("decode-token: signature verification FAILED");if(t.checkExpiry!==!1)D(t.payload);return{kid:e}}var h=16384,B=5000;async function C(t=process.stdin){if(t.isTTY)return"";let r=[],e=0;for await(let n of t){let o=Buffer.from(n);if(e+=o.length,e>h)throw Error(`decode-token: stdin exceeds ${h/1024} KiB; session-ingress JWTs are ~1 KB. Pass the token as an argument or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.`);r.push(o)}return Buffer.concat(r).toString("utf8")}async function J(t,r,e=process.stdin,n=B){if(t?.trim())return t.trim();let o=r.CLAUDE_CODE_SESSION_ACCESS_TOKEN?.trim();if(o)return o;let i=(await S(C(e),n,"decode-token: reading token from stdin")).trim();if(i)return i;throw Error("decode-token: no token supplied. Pass it as an argument, pipe it on stdin, or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.")}var K=`Usage: claude self-hosted-runner decode-token [token] [options]

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
`;async function W(t){let r;try{r=O(t)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}if(r.help)process.stdout.write(K),process.exit(0);try{let e=await J(r.token,process.env),{headerB64:n,payloadB64:o,signatureB64:i}=T(e),s=u(n,"header"),c=u(o,"payload");if(r.verify){let f=`${(r.apiUrl??E()).replace(/\/+$/,"")}/v1/code/.well-known/jwks.json`,{kid:p}=await j({headerB64:n,payloadB64:o,signatureB64:i,header:s,payload:c,jwksUrl:f,fetchFn:fetch,checkExpiry:r.checkExpiry}),a=r.checkExpiry?"sig+exp":"sig only, exp SKIPPED";process.stderr.write(`verified (kid=${p}, ${a})
`)}let d=r.header?s:c;process.stdout.write(`${g(d,null,2)}
`),process.exit(0)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}}export{D as checkTokenTime,u as decodeSegment,O as parseDecodeTokenArgs,C as readStdin,J as resolveToken,W as selfHostedRunnerDecodeTokenMain,T as splitJwt,j as verifyAgainstJwks};
