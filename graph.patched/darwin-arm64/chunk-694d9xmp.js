// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import"./chunk-v6wj34h0.js";import"./chunk-9s1z8ttt.js";import"./chunk-kqpf5fh3.js";import"./chunk-ydpbzmt4.js";import"./chunk-36ysyspx.js";import"./chunk-3kevgx4j.js";import"./chunk-gp4v3dbd.js";import"./chunk-3y73jbfr.js";import"./chunk-21mz1tvc.js";import"./chunk-ke15dgmq.js";import"./chunk-nrx8c90j.js";import"./chunk-9a41hw1t.js";import"./chunk-9sbknd2z.js";import"./chunk-ersar6wn.js";import{_,ee}from"./chunk-d7b0m8qy.js";import"./chunk-x6r6k81p.js";import"./chunk-p1qnbfcw.js";import"./chunk-j79dwkaq.js";import"./chunk-thm21ca7.js";import"./chunk-dz0rx1wn.js";import"./chunk-4kxy1036.js";import"./chunk-gx93fya1.js";import"./chunk-qrwzmhww.js";import"./chunk-33ax6j5s.js";import"./chunk-wq923bwc.js";import"./chunk-wn8xtaqg.js";import"./chunk-nyvhtfb3.js";import"./chunk-psq3t7gj.js";import"./chunk-j2d407c1.js";import"./chunk-qnvapa9t.js";import"./chunk-abagh0tt.js";import"./chunk-7pvep8tw.js";import"./chunk-w461d8x8.js";import"./chunk-x0a7sawk.js";import"./chunk-we9anmwe.js";import"./chunk-z6efcye4.js";import"./chunk-8zvzpa8h.js";import"./chunk-gt6dwm1y.js";import"./chunk-xz73gv4f.js";import"./chunk-9vttrktj.js";import"./chunk-ykcv164t.js";import"./chunk-9m893g74.js";import"./chunk-cemwep0x.js";import"./chunk-q8vnfcnf.js";import"./chunk-gzs70jxe.js";import"./chunk-m2fgnje1.js";import"./chunk-tjkwy3jp.js";import"./chunk-yzy35wkw.js";import"./chunk-fmbx25g2.js";import"./chunk-vh7e37w8.js";import"./chunk-m8t7qekn.js";import"./chunk-923em3jx.js";import"./chunk-t1zasa66.js";import"./chunk-c49xtfqf.js";import"./chunk-daaayw23.js";import"./chunk-5xe1amq0.js";import"./chunk-2k4ev690.js";import"./chunk-t4r22my8.js";import"./chunk-s56ftfc1.js";import"./chunk-32v5ghb4.js";import"./chunk-z3m0wxsd.js";import"./chunk-wpfb8m65.js";import"./chunk-7yg0jhh7.js";import"./chunk-zd2z0f00.js";import"./chunk-qq4mp4x7.js";import{rP,oa}from"./chunk-ft7bqgaw.js";import"./chunk-27xjmczp.js";import"./chunk-cg45s1mf.js";import"./chunk-vafwvqk7.js";import"./chunk-tvhr9rka.js";import"./chunk-dx7zad4g.js";import"./chunk-t1gsmm5c.js";import"./chunk-8qsa0b6q.js";import"./chunk-b7t3ypkx.js";import"./chunk-tzqhxyjb.js";import"./chunk-q5g832za.js";import"./chunk-g27dh2fx.js";import"./chunk-fewhvqt5.js";import"./chunk-hdf6qbgr.js";import"./chunk-esvzd004.js";import"./chunk-8c3dyx0k.js";import"./chunk-w9t64bcr.js";import"./chunk-j350yvzv.js";import"./chunk-pbym8nz9.js";import"./chunk-nfgwaxf2.js";import"./chunk-vf2gp3w9.js";import"./chunk-hxm5yqk0.js";import"./chunk-ec42nx0x.js";import"./chunk-exaq0a52.js";import"./chunk-6kf8v7k4.js";import"./chunk-5te1p2af.js";import"./chunk-5x6nmyvf.js";import"./chunk-1144fay8.js";import"./chunk-w13tcac4.js";import"./chunk-9f3mwram.js";import"./chunk-yvwfd832.js";import"./chunk-01k87c6b.js";import{f9e}from"./chunk-kjb4csjz.js";import"./chunk-w33ba9xc.js";import"./chunk-nrbn573b.js";import"./chunk-8h4z2017.js";import"./chunk-nmaeg6kv.js";import"./chunk-y6npzva0.js";import"./chunk-6rkmrewr.js";import"./chunk-411jq2n7.js";import{Tl}from"./chunk-z2znfmtr.js";import"./chunk-kgvs5hwe.js";import"./chunk-cxpsz8be.js";import"./chunk-16f4agxv.js";import"./chunk-kvdtmm6k.js";import"./chunk-wwfwgwca.js";import"./chunk-jyhkt2nk.js";import"./chunk-ztrzej16.js";import"./chunk-zmrs49f3.js";import"./chunk-dpjnt83j.js";import"./chunk-rw6s72vy.js";import"./chunk-0hmeyj8y.js";import"./chunk-s06z5etx.js";import"./chunk-81mpzfkq.js";import"./chunk-sqq64b1h.js";import"./chunk-evq23kfq.js";import"./chunk-bhdett2m.js";import"./chunk-yc0hxjyg.js";import"./chunk-n07cvysj.js";import"./chunk-19a02m7w.js";import"./chunk-t0kv6pst.js";import{createPublicKey as l,verify as g}from"crypto";function y(r){let t={header:!1,verify:!0,checkExpiry:!0,help:!1};for(let e=0;e<r.length;e++){let n=r[e];switch(n){case"--help":case"-h":t.help=!0;break;case"--header":t.header=!0;break;case"--verify":t.verify=!0;break;case"--no-verify":t.verify=!1;break;case"--no-check-expiry":t.checkExpiry=!1;break;case"--api-url":{let o=r[++e];if(o===void 0)throw Error("decode-token: --api-url requires a value");t.apiUrl=o;break}default:if(n.startsWith("-"))throw Error(`decode-token: unknown flag ${n}`);if(t.token!==void 0)throw Error("decode-token: at most one positional token argument");t.token=n}}return t}function w(r){let e=r.trim().replace(/^sk-ant-[a-z0-9]+-/i,"").split(".");if(e.length!==3||!e[0]||!e[1]||!e[2])throw Error("decode-token: not a JWT \u2014 expected 3 dot-separated base64url segments "+`(after stripping any sk-ant- prefix), got ${e.length}`);return{headerB64:e[0],payloadB64:e[1],signatureB64:e[2]}}function u(r,t){if(!/^[A-Za-z0-9_-]+$/.test(r))throw Error(`decode-token: ${t} is not valid base64url (unexpected characters)`);let e=Buffer.from(r,"base64url").toString("utf8"),n;try{n=ee(e)}catch(o){throw Error(`decode-token: ${t} is not valid JSON: ${o}`)}if(n===null||typeof n!=="object"||Array.isArray(n))throw Error(`decode-token: ${t} is not a JSON object`);return n}var E={ES256:"EC",RS256:"RSA"};function S(r,t=Math.floor(Date.now()/1000),e=60){let{exp:n,nbf:o}=r;if(typeof n!=="number")throw Error("decode-token: token has no numeric `exp` claim");if(t>n+e)throw Error(`decode-token: token EXPIRED at ${new Date(n*1000).toISOString()} (${Math.round(t-n)}s ago)`);if(typeof o==="number"&&t+e<o)throw Error(`decode-token: token not valid until ${new Date(o*1000).toISOString()}`)}async function m(r){let t=r.header.alg,e=r.header.kid;if(typeof t!=="string"||typeof e!=="string")throw Error("decode-token: JWT header is missing `alg` or `kid` \u2014 cannot select a JWKS key");let n=E[t];if(!n)throw Error(`decode-token: unsupported alg=${t} \u2014 only ES256 and RS256 are supported`);let o;try{o=await r.fetchFn(r.jwksUrl,{...oa({url:r.jwksUrl}),...rP(void 0),signal:AbortSignal.timeout(30000)})}catch(a){throw Error(`decode-token: failed to fetch JWKS from ${r.jwksUrl}: ${a}`)}if(!o.ok)throw Error(`decode-token: JWKS fetch returned ${o.status} ${o.statusText} for ${r.jwksUrl}`);let i=(await o.json()).keys?.find((a)=>a.kid===e);if(!i)throw Error(`decode-token: no JWKS key with kid=${e} at ${r.jwksUrl} \u2014 `+"token may be signed by a different environment (try --api-url).");if(i.kty!==n)throw Error(`decode-token: JWKS key kid=${e} has kty=${i.kty} but alg=${t} needs kty=${n}`);let c="sha256",d=t==="ES256"?{key:l({key:i,format:"jwk"}),dsaEncoding:"ieee-p1363"}:{key:l({key:i,format:"jwk"})},k=Buffer.from(`${r.headerB64}.${r.payloadB64}`,"utf8"),f=Buffer.from(r.signatureB64,"base64url");if(!g(c,k,d,f))throw Error("decode-token: signature verification FAILED");if(r.checkExpiry!==!1)S(r.payload);return{kid:e}}var h=16384,x=5000;async function b(r=process.stdin){if(r.isTTY)return"";let t=[],e=0;for await(let n of r){let o=Buffer.from(n);if(e+=o.length,e>h)throw Error(`decode-token: stdin exceeds ${h/1024} KiB; session-ingress JWTs are ~1 KB. Pass the token as an argument or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.`);t.push(o)}return Buffer.concat(t).toString("utf8")}async function v(r,t,e=process.stdin,n=x){if(r?.trim())return r.trim();let o=t.CLAUDE_CODE_SESSION_ACCESS_TOKEN?.trim();if(o)return o;let s=(await Tl(b(e),n,"decode-token: reading token from stdin")).trim();if(s)return s;throw Error("decode-token: no token supplied. Pass it as an argument, pipe it on stdin, or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.")}var O=`Usage: claude self-hosted-runner decode-token [token] [options]

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
`;async function K(r){let t;try{t=y(r)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}if(t.help)process.stdout.write(O),process.exit(0);try{let e=await v(t.token,process.env),{headerB64:n,payloadB64:o,signatureB64:s}=w(e),i=u(n,"header"),c=u(o,"payload");if(t.verify){let f=`${(t.apiUrl??f9e()).replace(/\/+$/,"")}/v1/code/.well-known/jwks.json`,{kid:p}=await m({headerB64:n,payloadB64:o,signatureB64:s,header:i,payload:c,jwksUrl:f,fetchFn:fetch,checkExpiry:t.checkExpiry}),a=t.checkExpiry?"sig+exp":"sig only, exp SKIPPED";process.stderr.write(`verified (kid=${p}, ${a})
`)}let d=t.header?i:c;process.stdout.write(`${_(d,null,2)}
`),process.exit(0)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}}export{K as selfHostedRunnerDecodeTokenMain};
