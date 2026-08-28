// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import"./chunk-pc3a0ej6.js";import"./chunk-vpkz5m05.js";import"./chunk-j6bwf1es.js";import"./chunk-n5p9w775.js";import"./chunk-s0y4aasp.js";import"./chunk-0ve316az.js";import"./chunk-bn8q5mbz.js";import"./chunk-g4zaymy2.js";import"./chunk-v5t1qnj3.js";import"./chunk-jqgad8sa.js";import"./chunk-e5bq01yj.js";import{S,V}from"./chunk-cmkfpkth.js";import"./chunk-8w8hykva.js";import"./chunk-fnn4jyg7.js";import"./chunk-hp9wjta4.js";import"./chunk-w2hwjymv.js";import"./chunk-s2t7yx8x.js";import"./chunk-xv0afvwf.js";import"./chunk-q9edv607.js";import"./chunk-3jdapt8v.js";import"./chunk-wx0zfkp2.js";import"./chunk-xv4k48am.js";import"./chunk-2694tw3t.js";import"./chunk-4p8hs6c2.js";import"./chunk-9qmdhtt2.js";import"./chunk-7afycn7k.js";import"./chunk-71nbrcp0.js";import"./chunk-xe7kdqs4.js";import"./chunk-d1bcvf2q.js";import"./chunk-w8df9gvd.js";import"./chunk-px49rrp6.js";import"./chunk-5wdhh6zv.js";import"./chunk-j2rn06t5.js";import"./chunk-nw6r1618.js";import"./chunk-71kt42f0.js";import"./chunk-q2p37kwf.js";import"./chunk-3vs63y6b.js";import"./chunk-8jrjg63q.js";import"./chunk-chrc29xz.js";import"./chunk-j7d3ep7z.js";import"./chunk-1m3qd9sr.js";import"./chunk-jz0pchtb.js";import"./chunk-mmj3hbz2.js";import"./chunk-j4jfcs5p.js";import"./chunk-c5jf7pfc.js";import"./chunk-5bqp1swd.js";import"./chunk-206vdfzn.js";import"./chunk-e8zeqvx6.js";import"./chunk-1a6j9rxs.js";import"./chunk-y7nqdky2.js";import"./chunk-d5w7af8n.js";import"./chunk-36jg6szp.js";import"./chunk-2vqmgw20.js";import"./chunk-8fq8jfr5.js";import"./chunk-mnsvtt5d.js";import{fi}from"./chunk-evkw8tw9.js";import"./chunk-ghnc2x4f.js";import"./chunk-2d75qem6.js";import"./chunk-nrtq2k0h.js";import"./chunk-gsnfhe7n.js";import"./chunk-qjvexw1x.js";import"./chunk-j5z57a18.js";import"./chunk-3b4m2p9x.js";import"./chunk-kj4qj8nj.js";import"./chunk-q49t6rqe.js";import"./chunk-7nv8z03d.js";import"./chunk-tacdmpjz.js";import"./chunk-v26jyk82.js";import"./chunk-5ksbz6ym.js";import"./chunk-5frxw1j3.js";import"./chunk-72eb1q9f.js";import"./chunk-t3369g78.js";import"./chunk-z51fvft1.js";import"./chunk-89hmbtyb.js";import"./chunk-q4p2a5sk.js";import"./chunk-w8bzqq59.js";import"./chunk-72tw8dma.js";import"./chunk-pp925av2.js";import"./chunk-m7fp9j7m.js";import"./chunk-j7mzcbtg.js";import"./chunk-ajh54v44.js";import"./chunk-r3k3kcs0.js";import"./chunk-50n50vap.js";import"./chunk-j1j7vbq3.js";import"./chunk-j60z9s5g.js";import{Voe}from"./chunk-32c0xygj.js";import{Lc}from"./chunk-1dhyrhf0.js";import"./chunk-yjcv5hh8.js";import"./chunk-5h9w4q7y.js";import"./chunk-p7kxsn0n.js";import"./chunk-946ge8er.js";import"./chunk-vwmrf92g.js";import"./chunk-xajbcgpa.js";import"./chunk-dpbxybt4.js";import"./chunk-8sfg3638.js";import"./chunk-xhxj67xc.js";import"./chunk-9q51f9rr.js";import{createPublicKey as l,verify as g}from"crypto";function y(t){let r={header:!1,verify:!0,checkExpiry:!0,help:!1};for(let e=0;e<t.length;e++){let n=t[e];switch(n){case"--help":case"-h":r.help=!0;break;case"--header":r.header=!0;break;case"--verify":r.verify=!0;break;case"--no-verify":r.verify=!1;break;case"--no-check-expiry":r.checkExpiry=!1;break;case"--api-url":{let o=t[++e];if(o===void 0)throw Error("decode-token: --api-url requires a value");r.apiUrl=o;break}default:if(n.startsWith("-"))throw Error(`decode-token: unknown flag ${n}`);if(r.token!==void 0)throw Error("decode-token: at most one positional token argument");r.token=n}}return r}function w(t){let e=t.trim().replace(/^sk-ant-[a-z0-9]+-/i,"").split(".");if(e.length!==3||!e[0]||!e[1]||!e[2])throw Error("decode-token: not a JWT \u2014 expected 3 dot-separated base64url segments "+`(after stripping any sk-ant- prefix), got ${e.length}`);return{headerB64:e[0],payloadB64:e[1],signatureB64:e[2]}}function u(t,r){if(!/^[A-Za-z0-9_-]+$/.test(t))throw Error(`decode-token: ${r} is not valid base64url (unexpected characters)`);let e=Buffer.from(t,"base64url").toString("utf8"),n;try{n=V(e)}catch(o){throw Error(`decode-token: ${r} is not valid JSON: ${o}`)}if(n===null||typeof n!=="object"||Array.isArray(n))throw Error(`decode-token: ${r} is not a JSON object`);return n}var E={ES256:"EC",RS256:"RSA"};function m(t,r=Math.floor(Date.now()/1000),e=60){let{exp:n,nbf:o}=t;if(typeof n!=="number")throw Error("decode-token: token has no numeric `exp` claim");if(r>n+e)throw Error(`decode-token: token EXPIRED at ${new Date(n*1000).toISOString()} (${Math.round(r-n)}s ago)`);if(typeof o==="number"&&r+e<o)throw Error(`decode-token: token not valid until ${new Date(o*1000).toISOString()}`)}async function x(t){let r=t.header.alg,e=t.header.kid;if(typeof r!=="string"||typeof e!=="string")throw Error("decode-token: JWT header is missing `alg` or `kid` \u2014 cannot select a JWKS key");let n=E[r];if(!n)throw Error(`decode-token: unsupported alg=${r} \u2014 only ES256 and RS256 are supported`);let o;try{o=await t.fetchFn(t.jwksUrl,{...fi({url:t.jwksUrl}),signal:AbortSignal.timeout(30000)})}catch(a){throw Error(`decode-token: failed to fetch JWKS from ${t.jwksUrl}: ${a}`)}if(!o.ok)throw Error(`decode-token: JWKS fetch returned ${o.status} ${o.statusText} for ${t.jwksUrl}`);let s=(await o.json()).keys?.find((a)=>a.kid===e);if(!s)throw Error(`decode-token: no JWKS key with kid=${e} at ${t.jwksUrl} \u2014 `+"token may be signed by a different environment (try --api-url).");if(s.kty!==n)throw Error(`decode-token: JWKS key kid=${e} has kty=${s.kty} but alg=${r} needs kty=${n}`);let c="sha256",d=r==="ES256"?{key:l({key:s,format:"jwk"}),dsaEncoding:"ieee-p1363"}:{key:l({key:s,format:"jwk"})},k=Buffer.from(`${t.headerB64}.${t.payloadB64}`,"utf8"),f=Buffer.from(t.signatureB64,"base64url");if(!g(c,k,d,f))throw Error("decode-token: signature verification FAILED");if(t.checkExpiry!==!1)m(t.payload);return{kid:e}}var h=16384,b=5000;async function v(t=process.stdin){if(t.isTTY)return"";let r=[],e=0;for await(let n of t){let o=Buffer.from(n);if(e+=o.length,e>h)throw Error(`decode-token: stdin exceeds ${h/1024} KiB; session-ingress JWTs are ~1 KB. Pass the token as an argument or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.`);r.push(o)}return Buffer.concat(r).toString("utf8")}async function _(t,r,e=process.stdin,n=b){if(t?.trim())return t.trim();let o=r.CLAUDE_CODE_SESSION_ACCESS_TOKEN?.trim();if(o)return o;let i=(await Lc(v(e),n,"decode-token: reading token from stdin")).trim();if(i)return i;throw Error("decode-token: no token supplied. Pass it as an argument, pipe it on stdin, or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.")}var O=`Usage: claude self-hosted-runner decode-token [token] [options]

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
`),process.exit(1)}if(r.help)process.stdout.write(O),process.exit(0);try{let e=await _(r.token,process.env),{headerB64:n,payloadB64:o,signatureB64:i}=w(e),s=u(n,"header"),c=u(o,"payload");if(r.verify){let f=`${(r.apiUrl??Voe()).replace(/\/+$/,"")}/v1/code/.well-known/jwks.json`,{kid:p}=await x({headerB64:n,payloadB64:o,signatureB64:i,header:s,payload:c,jwksUrl:f,fetchFn:fetch,checkExpiry:r.checkExpiry}),a=r.checkExpiry?"sig+exp":"sig only, exp SKIPPED";process.stderr.write(`verified (kid=${p}, ${a})
`)}let d=r.header?s:c;process.stdout.write(`${S(d,null,2)}
`),process.exit(0)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}}export{m as checkTokenTime,u as decodeSegment,y as parseDecodeTokenArgs,v as readStdin,_ as resolveToken,C as selfHostedRunnerDecodeTokenMain,w as splitJwt,x as verifyAgainstJwks};
