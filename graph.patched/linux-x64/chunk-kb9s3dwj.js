// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import"./chunk-9yqw3cey.js";import"./chunk-mnk1rjxv.js";import"./chunk-3whp6z2x.js";import"./chunk-e1n9j4jc.js";import"./chunk-hpnksvcw.js";import"./chunk-3qjd0g3g.js";import"./chunk-efxr56q3.js";import"./chunk-td8fcebs.js";import"./chunk-bj7g1p32.js";import"./chunk-h9wtyp3p.js";import"./chunk-7s5qs9ea.js";import"./chunk-vx4qhc14.js";import{b,W}from"./chunk-1tk5haqn.js";import"./chunk-mzzfzvay.js";import"./chunk-hvf4zpd9.js";import"./chunk-9g6v0ehs.js";import"./chunk-f2w14jf7.js";import"./chunk-8mc66c3x.js";import"./chunk-9142y21k.js";import"./chunk-skkcgpsw.js";import"./chunk-c3bfg9kw.js";import"./chunk-3e93vkg3.js";import"./chunk-qyjj7h0q.js";import"./chunk-cve7w72k.js";import"./chunk-dbn6fdze.js";import"./chunk-q0tfnkyx.js";import"./chunk-4c106gcs.js";import"./chunk-30dff23n.js";import"./chunk-p2xedy0k.js";import"./chunk-czvna1h1.js";import"./chunk-5k1pty0j.js";import"./chunk-6f5agm7e.js";import"./chunk-n17xw1z0.js";import"./chunk-wcpxyz2e.js";import"./chunk-fpk3t24b.js";import"./chunk-ycpfsm4t.js";import"./chunk-k5nqc3a8.js";import"./chunk-9p6z7v4m.js";import"./chunk-33bqb969.js";import"./chunk-nnhhr1jx.js";import"./chunk-hvd71q4d.js";import"./chunk-qab38xwm.js";import"./chunk-54d75fvc.js";import"./chunk-1ys2azv7.js";import"./chunk-0n31r0pn.js";import"./chunk-fn8vqr8w.js";import{$s}from"./chunk-kaqfcdks.js";import"./chunk-0558tzyr.js";import"./chunk-nfmdzyhb.js";import"./chunk-tqraa7nr.js";import"./chunk-n9r1w949.js";import"./chunk-jtxx7y7p.js";import"./chunk-2benbg1m.js";import"./chunk-0pf46r3n.js";import"./chunk-s6q6qyzp.js";import"./chunk-znja1j7d.js";import"./chunk-2r6jss2t.js";import"./chunk-mzeqwxfp.js";import"./chunk-x5ty8x5x.js";import"./chunk-pp9fwat1.js";import"./chunk-cwves0z5.js";import"./chunk-8ae0db2r.js";import"./chunk-k45y0n34.js";import"./chunk-em2nh00t.js";import"./chunk-f39k86ma.js";import"./chunk-e20rp2e0.js";import"./chunk-d2fvt8sx.js";import"./chunk-gq4w1rkv.js";import"./chunk-cews3k3h.js";import{Lle}from"./chunk-j8g2mrw5.js";import{ou}from"./chunk-mcne7q5e.js";import"./chunk-se3vf90q.js";import"./chunk-5t955j7t.js";import"./chunk-sqdvc1yq.js";import"./chunk-1pyajec6.js";import"./chunk-429awvea.js";import"./chunk-s0y0sg0y.js";import"./chunk-c6hyaq7k.js";import"./chunk-y7bjs1t6.js";import{createPublicKey as l,verify as g}from"crypto";function y(t){let r={header:!1,verify:!0,checkExpiry:!0,help:!1};for(let e=0;e<t.length;e++){let n=t[e];switch(n){case"--help":case"-h":r.help=!0;break;case"--header":r.header=!0;break;case"--verify":r.verify=!0;break;case"--no-verify":r.verify=!1;break;case"--no-check-expiry":r.checkExpiry=!1;break;case"--api-url":{let o=t[++e];if(o===void 0)throw Error("decode-token: --api-url requires a value");r.apiUrl=o;break}default:if(n.startsWith("-"))throw Error(`decode-token: unknown flag ${n}`);if(r.token!==void 0)throw Error("decode-token: at most one positional token argument");r.token=n}}return r}function w(t){let e=t.trim().replace(/^sk-ant-[a-z0-9]+-/i,"").split(".");if(e.length!==3||!e[0]||!e[1]||!e[2])throw Error("decode-token: not a JWT \u2014 expected 3 dot-separated base64url segments "+`(after stripping any sk-ant- prefix), got ${e.length}`);return{headerB64:e[0],payloadB64:e[1],signatureB64:e[2]}}function u(t,r){if(!/^[A-Za-z0-9_-]+$/.test(t))throw Error(`decode-token: ${r} is not valid base64url (unexpected characters)`);let e=Buffer.from(t,"base64url").toString("utf8"),n;try{n=W(e)}catch(o){throw Error(`decode-token: ${r} is not valid JSON: ${o}`)}if(n===null||typeof n!=="object"||Array.isArray(n))throw Error(`decode-token: ${r} is not a JSON object`);return n}var E={ES256:"EC",RS256:"RSA"};function S(t,r=Math.floor(Date.now()/1000),e=60){let{exp:n,nbf:o}=t;if(typeof n!=="number")throw Error("decode-token: token has no numeric `exp` claim");if(r>n+e)throw Error(`decode-token: token EXPIRED at ${new Date(n*1000).toISOString()} (${Math.round(r-n)}s ago)`);if(typeof o==="number"&&r+e<o)throw Error(`decode-token: token not valid until ${new Date(o*1000).toISOString()}`)}async function m(t){let r=t.header.alg,e=t.header.kid;if(typeof r!=="string"||typeof e!=="string")throw Error("decode-token: JWT header is missing `alg` or `kid` \u2014 cannot select a JWKS key");let n=E[r];if(!n)throw Error(`decode-token: unsupported alg=${r} \u2014 only ES256 and RS256 are supported`);let o;try{o=await t.fetchFn(t.jwksUrl,{...$s({url:t.jwksUrl}),signal:AbortSignal.timeout(30000)})}catch(a){throw Error(`decode-token: failed to fetch JWKS from ${t.jwksUrl}: ${a}`)}if(!o.ok)throw Error(`decode-token: JWKS fetch returned ${o.status} ${o.statusText} for ${t.jwksUrl}`);let s=(await o.json()).keys?.find((a)=>a.kid===e);if(!s)throw Error(`decode-token: no JWKS key with kid=${e} at ${t.jwksUrl} \u2014 `+"token may be signed by a different environment (try --api-url).");if(s.kty!==n)throw Error(`decode-token: JWKS key kid=${e} has kty=${s.kty} but alg=${r} needs kty=${n}`);let c="sha256",d=r==="ES256"?{key:l({key:s,format:"jwk"}),dsaEncoding:"ieee-p1363"}:{key:l({key:s,format:"jwk"})},k=Buffer.from(`${t.headerB64}.${t.payloadB64}`,"utf8"),f=Buffer.from(t.signatureB64,"base64url");if(!g(c,k,d,f))throw Error("decode-token: signature verification FAILED");if(t.checkExpiry!==!1)S(t.payload);return{kid:e}}var h=16384,x=5000;async function v(t=process.stdin){if(t.isTTY)return"";let r=[],e=0;for await(let n of t){let o=Buffer.from(n);if(e+=o.length,e>h)throw Error(`decode-token: stdin exceeds ${h/1024} KiB; session-ingress JWTs are ~1 KB. Pass the token as an argument or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.`);r.push(o)}return Buffer.concat(r).toString("utf8")}async function _(t,r,e=process.stdin,n=x){if(t?.trim())return t.trim();let o=r.CLAUDE_CODE_SESSION_ACCESS_TOKEN?.trim();if(o)return o;let i=(await ou(v(e),n,"decode-token: reading token from stdin")).trim();if(i)return i;throw Error("decode-token: no token supplied. Pass it as an argument, pipe it on stdin, or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.")}var O=`Usage: claude self-hosted-runner decode-token [token] [options]

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
`),process.exit(1)}if(r.help)process.stdout.write(O),process.exit(0);try{let e=await _(r.token,process.env),{headerB64:n,payloadB64:o,signatureB64:i}=w(e),s=u(n,"header"),c=u(o,"payload");if(r.verify){let f=`${(r.apiUrl??Lle()).replace(/\/+$/,"")}/v1/code/.well-known/jwks.json`,{kid:p}=await m({headerB64:n,payloadB64:o,signatureB64:i,header:s,payload:c,jwksUrl:f,fetchFn:fetch,checkExpiry:r.checkExpiry}),a=r.checkExpiry?"sig+exp":"sig only, exp SKIPPED";process.stderr.write(`verified (kid=${p}, ${a})
`)}let d=r.header?s:c;process.stdout.write(`${b(d,null,2)}
`),process.exit(0)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}}export{C as selfHostedRunnerDecodeTokenMain};
