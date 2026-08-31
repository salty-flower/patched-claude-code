// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import"./chunk-s7r9vssa.js";import"./chunk-7s3c5qqq.js";import"./chunk-rv2kd9jf.js";import"./chunk-sgsf5yd5.js";import"./chunk-jpen6jwm.js";import"./chunk-asme1eq2.js";import"./chunk-w8ppmegc.js";import"./chunk-m9gbfvns.js";import"./chunk-30zk17wm.js";import"./chunk-d7ejrssq.js";import"./chunk-r1b219q3.js";import"./chunk-efckqwp7.js";import{S,q}from"./chunk-d0cr5d2v.js";import"./chunk-bvdq8tnt.js";import"./chunk-764j5mtt.js";import"./chunk-ma4xtxwv.js";import"./chunk-gbq6xyrq.js";import"./chunk-1ttwv9fk.js";import"./chunk-02dpwhns.js";import"./chunk-yqfv1yd3.js";import"./chunk-ykrbqs98.js";import"./chunk-dzd4rkt0.js";import"./chunk-kc505vjh.js";import"./chunk-q2grjtpb.js";import"./chunk-qd43z1g9.js";import"./chunk-jw46j330.js";import"./chunk-vv42w3zb.js";import"./chunk-3qzpxayw.js";import"./chunk-a090dzyj.js";import"./chunk-a2g5xbg4.js";import"./chunk-9cvbc65t.js";import"./chunk-zv6dxs76.js";import"./chunk-0sdpjn9a.js";import"./chunk-j35pah18.js";import"./chunk-j55vqm69.js";import"./chunk-e7r3n0fy.js";import"./chunk-wsjwtx5h.js";import"./chunk-yxr9b4ek.js";import"./chunk-cn7kmt56.js";import"./chunk-a8be273g.js";import"./chunk-0xn3mw8z.js";import"./chunk-30zpf1a7.js";import"./chunk-dkknd74f.js";import"./chunk-1nj7y1sr.js";import"./chunk-s5z7wmv7.js";import"./chunk-hgebmnek.js";import"./chunk-000exgr8.js";import"./chunk-zkwbrkrn.js";import"./chunk-1vhz7b90.js";import"./chunk-jh8hhb0y.js";import"./chunk-jpepp1st.js";import"./chunk-e21g00dm.js";import"./chunk-hvkwrtra.js";import"./chunk-4v7s9wvr.js";import"./chunk-s4gv6c12.js";import{Ti}from"./chunk-bt08ja64.js";import"./chunk-1e5y3pjf.js";import"./chunk-4n7ktjmt.js";import"./chunk-7r196x4z.js";import"./chunk-rv365wnb.js";import"./chunk-7vs7qneb.js";import"./chunk-xmefb9d5.js";import"./chunk-qv5nyd4p.js";import"./chunk-pm1yx9gh.js";import"./chunk-7vzd1b8s.js";import"./chunk-t1dbt8zk.js";import"./chunk-ezy65b9n.js";import"./chunk-xzv9n2q7.js";import"./chunk-0me3rg21.js";import"./chunk-d85w7nxf.js";import"./chunk-nsht0110.js";import"./chunk-9qzqdgp0.js";import"./chunk-dmrj2df2.js";import"./chunk-nceebb9v.js";import"./chunk-azztsfgd.js";import"./chunk-41nyh22r.js";import"./chunk-4kxavepq.js";import"./chunk-kqhtgdqq.js";import"./chunk-m3zmmvh7.js";import"./chunk-1461jpph.js";import"./chunk-p0e7nc2g.js";import"./chunk-bqf28esr.js";import"./chunk-ts4ymrjf.js";import"./chunk-njtgsd8n.js";import{mae}from"./chunk-kj12vmkn.js";import{cu}from"./chunk-7ke8tkzn.js";import"./chunk-esh1xgk6.js";import"./chunk-ds8dremv.js";import"./chunk-2txjr9b6.js";import"./chunk-peh5tvnh.js";import"./chunk-jdkn7yce.js";import"./chunk-qh4ma7bm.js";import"./chunk-zm2aajcr.js";import"./chunk-7ntmrqet.js";import"./chunk-edxkqkcr.js";import"./chunk-6c8t6gsc.js";import"./chunk-er188mb2.js";import{createPublicKey as l,verify as g}from"crypto";function y(t){let r={header:!1,verify:!0,checkExpiry:!0,help:!1};for(let e=0;e<t.length;e++){let n=t[e];switch(n){case"--help":case"-h":r.help=!0;break;case"--header":r.header=!0;break;case"--verify":r.verify=!0;break;case"--no-verify":r.verify=!1;break;case"--no-check-expiry":r.checkExpiry=!1;break;case"--api-url":{let o=t[++e];if(o===void 0)throw Error("decode-token: --api-url requires a value");r.apiUrl=o;break}default:if(n.startsWith("-"))throw Error(`decode-token: unknown flag ${n}`);if(r.token!==void 0)throw Error("decode-token: at most one positional token argument");r.token=n}}return r}function w(t){let e=t.trim().replace(/^sk-ant-[a-z0-9]+-/i,"").split(".");if(e.length!==3||!e[0]||!e[1]||!e[2])throw Error("decode-token: not a JWT \u2014 expected 3 dot-separated base64url segments "+`(after stripping any sk-ant- prefix), got ${e.length}`);return{headerB64:e[0],payloadB64:e[1],signatureB64:e[2]}}function u(t,r){if(!/^[A-Za-z0-9_-]+$/.test(t))throw Error(`decode-token: ${r} is not valid base64url (unexpected characters)`);let e=Buffer.from(t,"base64url").toString("utf8"),n;try{n=q(e)}catch(o){throw Error(`decode-token: ${r} is not valid JSON: ${o}`)}if(n===null||typeof n!=="object"||Array.isArray(n))throw Error(`decode-token: ${r} is not a JSON object`);return n}var E={ES256:"EC",RS256:"RSA"};function m(t,r=Math.floor(Date.now()/1000),e=60){let{exp:n,nbf:o}=t;if(typeof n!=="number")throw Error("decode-token: token has no numeric `exp` claim");if(r>n+e)throw Error(`decode-token: token EXPIRED at ${new Date(n*1000).toISOString()} (${Math.round(r-n)}s ago)`);if(typeof o==="number"&&r+e<o)throw Error(`decode-token: token not valid until ${new Date(o*1000).toISOString()}`)}async function x(t){let r=t.header.alg,e=t.header.kid;if(typeof r!=="string"||typeof e!=="string")throw Error("decode-token: JWT header is missing `alg` or `kid` \u2014 cannot select a JWKS key");let n=E[r];if(!n)throw Error(`decode-token: unsupported alg=${r} \u2014 only ES256 and RS256 are supported`);let o;try{o=await t.fetchFn(t.jwksUrl,{...Ti({url:t.jwksUrl}),signal:AbortSignal.timeout(30000)})}catch(a){throw Error(`decode-token: failed to fetch JWKS from ${t.jwksUrl}: ${a}`)}if(!o.ok)throw Error(`decode-token: JWKS fetch returned ${o.status} ${o.statusText} for ${t.jwksUrl}`);let s=(await o.json()).keys?.find((a)=>a.kid===e);if(!s)throw Error(`decode-token: no JWKS key with kid=${e} at ${t.jwksUrl} \u2014 `+"token may be signed by a different environment (try --api-url).");if(s.kty!==n)throw Error(`decode-token: JWKS key kid=${e} has kty=${s.kty} but alg=${r} needs kty=${n}`);let c="sha256",d=r==="ES256"?{key:l({key:s,format:"jwk"}),dsaEncoding:"ieee-p1363"}:{key:l({key:s,format:"jwk"})},k=Buffer.from(`${t.headerB64}.${t.payloadB64}`,"utf8"),f=Buffer.from(t.signatureB64,"base64url");if(!g(c,k,d,f))throw Error("decode-token: signature verification FAILED");if(t.checkExpiry!==!1)m(t.payload);return{kid:e}}var h=16384,b=5000;async function v(t=process.stdin){if(t.isTTY)return"";let r=[],e=0;for await(let n of t){let o=Buffer.from(n);if(e+=o.length,e>h)throw Error(`decode-token: stdin exceeds ${h/1024} KiB; session-ingress JWTs are ~1 KB. Pass the token as an argument or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.`);r.push(o)}return Buffer.concat(r).toString("utf8")}async function _(t,r,e=process.stdin,n=b){if(t?.trim())return t.trim();let o=r.CLAUDE_CODE_SESSION_ACCESS_TOKEN?.trim();if(o)return o;let i=(await cu(v(e),n,"decode-token: reading token from stdin")).trim();if(i)return i;throw Error("decode-token: no token supplied. Pass it as an argument, pipe it on stdin, or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.")}var O=`Usage: claude self-hosted-runner decode-token [token] [options]

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
`),process.exit(1)}if(r.help)process.stdout.write(O),process.exit(0);try{let e=await _(r.token,process.env),{headerB64:n,payloadB64:o,signatureB64:i}=w(e),s=u(n,"header"),c=u(o,"payload");if(r.verify){let f=`${(r.apiUrl??mae()).replace(/\/+$/,"")}/v1/code/.well-known/jwks.json`,{kid:p}=await x({headerB64:n,payloadB64:o,signatureB64:i,header:s,payload:c,jwksUrl:f,fetchFn:fetch,checkExpiry:r.checkExpiry}),a=r.checkExpiry?"sig+exp":"sig only, exp SKIPPED";process.stderr.write(`verified (kid=${p}, ${a})
`)}let d=r.header?s:c;process.stdout.write(`${S(d,null,2)}
`),process.exit(0)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}}export{m as checkTokenTime,u as decodeSegment,y as parseDecodeTokenArgs,v as readStdin,_ as resolveToken,C as selfHostedRunnerDecodeTokenMain,w as splitJwt,x as verifyAgainstJwks};
