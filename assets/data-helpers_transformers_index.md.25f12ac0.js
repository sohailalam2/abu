import{_ as s,c as a,o as n,a as e}from"./app.25f29188.js";const h=JSON.parse('{"title":"Data Transformer","description":"","frontmatter":{},"headers":[],"relativePath":"data-helpers/transformers/index.md"}'),o={name:"data-helpers/transformers/index.md"},t=e(`<h1 id="data-transformer" tabindex="-1">Data Transformer <a class="header-anchor" href="#data-transformer" aria-hidden="true">#</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p>Transformers are as the name suggests, ways to transform or convert one specific data structure/type to another.</p><p>All transformers must implement the TransformerFunction interface with the following signature</p><h2 id="interface-signature" tabindex="-1">Interface Signature <a class="header-anchor" href="#interface-signature" aria-hidden="true">#</a></h2><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#C586C0;">export</span><span style="color:#E6E6E6;"> </span><span style="color:#569CD6;">interface</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">TransformerFunction</span><span style="color:#E6E6E6;">&lt;</span><span style="color:#4EC9B0;">Input</span><span style="color:#E6E6E6;">, </span><span style="color:#4EC9B0;">Output</span><span style="color:#E6E6E6;">&gt; {</span></span>
<span class="line"><span style="color:#E6E6E6;">  </span><span style="color:#DCDCAA;">convert</span><span style="color:#E6E6E6;">(</span><span style="color:#9CDCFE;">input</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">Input</span><span style="color:#E6E6E6;">)</span><span style="color:#D4D4D4;">:</span><span style="color:#E6E6E6;"> </span><span style="color:#4EC9B0;">Output</span><span style="color:#E6E6E6;">;</span></span>
<span class="line"><span style="color:#E6E6E6;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#7B30D0;">export</span><span style="color:#002339;"> </span><span style="color:#0991B6;">interface</span><span style="color:#002339;"> </span><span style="color:#0444AC;">TransformerFunction</span><span style="color:#002339;">&lt;</span><span style="color:#0444AC;">Input</span><span style="color:#002339;">, </span><span style="color:#0444AC;">Output</span><span style="color:#002339;">&gt; {</span></span>
<span class="line"><span style="color:#002339;">  </span><span style="color:#7EB233;">convert</span><span style="color:#002339;">(</span><span style="color:#B1108E;">input</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#0444AC;">Input</span><span style="color:#002339;">)</span><span style="color:#7B30D0;">:</span><span style="color:#002339;"> </span><span style="color:#0444AC;">Output</span><span style="color:#002339;">;</span></span>
<span class="line"><span style="color:#002339;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,6),p=[t];function r(l,c,i,d,y,E){return n(),a("div",null,p)}const f=s(o,[["render",r]]);export{h as __pageData,f as default};
