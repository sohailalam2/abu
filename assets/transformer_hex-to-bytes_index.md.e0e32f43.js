import{_ as s,c as n,o as a,a as e}from"./app.3e2cd8e7.js";const d=JSON.parse('{"title":"Hex to Bytes Converter","description":"","frontmatter":{},"headers":[{"level":2,"title":"Class Signature","slug":"class-signature","link":"#class-signature","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Example 1","slug":"example-1","link":"#example-1","children":[]},{"level":3,"title":"Example 2","slug":"example-2","link":"#example-2","children":[]}]}],"relativePath":"transformer/hex-to-bytes/index.md"}'),l={name:"transformer/hex-to-bytes/index.md"},t=e(`<h1 id="hex-to-bytes-converter" tabindex="-1">Hex to Bytes Converter <a class="header-anchor" href="#hex-to-bytes-converter" aria-hidden="true">#</a></h1><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;"></th></tr></thead><tbody><tr><td style="text-align:center;">Class Name</td><td style="text-align:center;"><code>HexToBytes</code></td></tr><tr><td style="text-align:center;">Input Type</td><td style="text-align:center;">string</td></tr><tr><td style="text-align:center;">Output Type</td><td style="text-align:center;"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array" target="_blank" rel="noreferrer">Uint8Array</a></td></tr><tr><td style="text-align:center;">Purpose</td><td style="text-align:center;">This class helps us to convert <code>hexadecimal string</code> to <code>string</code></td></tr></tbody></table><p><em>Bytes are represented as <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array" target="_blank" rel="noreferrer">Uint8Array</a></em></p><h2 id="class-signature" tabindex="-1">Class Signature <a class="header-anchor" href="#class-signature" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">HexToBytes</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TransformerFunction</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Uint8Array</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">//...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="example-1" tabindex="-1">Example 1 <a class="header-anchor" href="#example-1" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> input </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">FF</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HexToBytes</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">convert</span><span style="color:#A6ACCD;">(input)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(result)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toEqual</span><span style="color:#A6ACCD;">(Uint8Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">from</span><span style="color:#A6ACCD;">([</span><span style="color:#F78C6C;">255</span><span style="color:#A6ACCD;">]))</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u2705</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="example-2" tabindex="-1">Example 2 <a class="header-anchor" href="#example-2" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#676E95;">// Hello World! encoded to hex</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> input </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">48656C6C6F20576F726C6421</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">HexToBytes</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">convert</span><span style="color:#A6ACCD;">(input)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Uint8ArrayToString</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">convert</span><span style="color:#A6ACCD;">(result </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Uint8Array</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">expect</span><span style="color:#A6ACCD;">(str)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toEqual</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello World!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u2705</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,10),p=[t];function o(r,c,y,i,A,D){return a(),n("div",null,p)}const C=s(l,[["render",o]]);export{d as __pageData,C as default};