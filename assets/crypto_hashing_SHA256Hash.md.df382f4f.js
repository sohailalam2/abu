import{_ as s,c as a,o as n,a as e}from"./app.2fa2a0c7.js";const u=JSON.parse('{"title":"SHA256","description":"","frontmatter":{},"headers":[],"relativePath":"crypto/hashing/SHA256Hash.md"}'),l={name:"crypto/hashing/SHA256Hash.md"},o=e(`<h1 id="sha256" tabindex="-1">SHA256 <a class="header-anchor" href="#sha256" aria-hidden="true">#</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p>SHA-256 is a widely used cryptographic hash function that produces a 256-bit hash value. This means that it is capable of generating a unique, fixed-size output for any input data, regardless of its size or complexity. The output, or &quot;hash value,&quot; is a string of characters that is typically represented in hexadecimal format.</p><p>The main advantage of SHA-256 is that it is extremely resistant to collision attacks, which are attempts to find two different inputs that produce the same hash value. This is made possible by the large size of the hash value, which makes it extremely unlikely that two different inputs will produce the same hash. This makes SHA-256 a useful tool for ensuring the integrity and authenticity of digital information, as any changes to the input data will result in a completely different hash value.</p><p>In addition to its collision resistance, SHA-256 is also highly efficient, making it well-suited for use in a wide range of applications. It is commonly used in digital signatures, file integrity checks, and other security-related applications where data integrity is important. SHA-256 is a part of the SHA-2 family of cryptographic hash functions, which are considered to be more secure than the older SHA-1 algorithm.</p><p>In summary, SHA-256 is a cryptographic hash function that is widely used to ensure the integrity and authenticity of digital information. It produces a unique, fixed-size output for any input data, making it resistant to collision attacks. It is efficient, widely used, and considered to be a secure method for verifying the integrity of data.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>The default output of the hash function is in lowercase hexadecimal (Hex)</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">hash</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> </span><span style="color:#569CD6;">new</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">SHA256Hash</span><span style="color:#E6E6E6;">().</span><span style="color:#DCDCAA;">hash</span><span style="color:#E6E6E6;">(</span><span style="color:#CE9178;">&#39;Hello World!&#39;</span><span style="color:#E6E6E6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">expectedHash</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">expect</span><span style="color:#E6E6E6;">(</span><span style="color:#9CDCFE;">hash</span><span style="color:#E6E6E6;">).</span><span style="color:#DCDCAA;">toEqual</span><span style="color:#E6E6E6;">(</span><span style="color:#9CDCFE;">expectedHash</span><span style="color:#E6E6E6;">);</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">hash</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">new</span><span style="color:#002339;"> </span><span style="color:#7EB233;">SHA256Hash</span><span style="color:#002339;">().</span><span style="color:#7EB233;">hash</span><span style="color:#002339;">(</span><span style="color:#A44185;">&#39;Hello World!&#39;</span><span style="color:#002339;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">expectedHash</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EB233;">expect</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">hash</span><span style="color:#002339;">).</span><span style="color:#7EB233;">toEqual</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">expectedHash</span><span style="color:#002339;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>The output encoding of the hash function can be changed to bytes by passing an encoding option. The output will then be formatted to an <code>Uint8Array</code>.</p><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">hash</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> </span><span style="color:#569CD6;">new</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">SHA256Hash</span><span style="color:#E6E6E6;">().</span><span style="color:#DCDCAA;">hash</span><span style="color:#E6E6E6;">(</span><span style="color:#CE9178;">&#39;Hello World!&#39;</span><span style="color:#E6E6E6;">, { </span><span style="color:#9CDCFE;">encoding:</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;bin&#39;</span><span style="color:#E6E6E6;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">expectedHash</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> </span><span style="color:#CE9178;">&#39;7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069&#39;</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#569CD6;">const</span><span style="color:#E6E6E6;"> </span><span style="color:#9CDCFE;">expectedBytes</span><span style="color:#E6E6E6;"> </span><span style="color:#D4D4D4;">=</span><span style="color:#E6E6E6;"> </span><span style="color:#569CD6;">new</span><span style="color:#E6E6E6;"> </span><span style="color:#DCDCAA;">HexToBytes</span><span style="color:#E6E6E6;">().</span><span style="color:#DCDCAA;">convert</span><span style="color:#E6E6E6;">(</span><span style="color:#9CDCFE;">expectedHash</span><span style="color:#E6E6E6;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DCDCAA;">expect</span><span style="color:#E6E6E6;">(</span><span style="color:#9CDCFE;">hash</span><span style="color:#E6E6E6;">).</span><span style="color:#DCDCAA;">toEqual</span><span style="color:#E6E6E6;">(</span><span style="color:#9CDCFE;">expectedBytes</span><span style="color:#E6E6E6;">);</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">hash</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">new</span><span style="color:#002339;"> </span><span style="color:#7EB233;">SHA256Hash</span><span style="color:#002339;">().</span><span style="color:#7EB233;">hash</span><span style="color:#002339;">(</span><span style="color:#A44185;">&#39;Hello World!&#39;</span><span style="color:#002339;">, { encoding: </span><span style="color:#A44185;">&#39;bin&#39;</span><span style="color:#002339;"> });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">expectedHash</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> </span><span style="color:#A44185;">&#39;7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069&#39;</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#0991B6;">const</span><span style="color:#002339;"> </span><span style="color:#2F86D2;">expectedBytes</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">=</span><span style="color:#002339;"> </span><span style="color:#7B30D0;">new</span><span style="color:#002339;"> </span><span style="color:#7EB233;">HexToBytes</span><span style="color:#002339;">().</span><span style="color:#7EB233;">convert</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">expectedHash</span><span style="color:#002339;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7EB233;">expect</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">hash</span><span style="color:#002339;">).</span><span style="color:#7EB233;">toEqual</span><span style="color:#002339;">(</span><span style="color:#2F86D2;">expectedBytes</span><span style="color:#002339;">);</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,11),p=[o];function t(c,r,i,y,d,h){return n(),a("div",null,p)}const f=s(l,[["render",t]]);export{u as __pageData,f as default};