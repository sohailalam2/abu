import{_ as s,c as a,o as e,a as n}from"./app.3e625c88.js";const D=JSON.parse('{"title":"Data","description":"","frontmatter":{},"headers":[{"level":2,"title":"Exception Class","slug":"exception-class","link":"#exception-class","children":[{"level":3,"title":"Class Signature","slug":"class-signature","link":"#class-signature","children":[]},{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":3,"title":"Message Formatting","slug":"message-formatting","link":"#message-formatting","children":[]}]}],"relativePath":"data/index.md"}'),l={name:"data/index.md"},t=n(`<h1 id="data" tabindex="-1">Data <a class="header-anchor" href="#data" aria-hidden="true">#</a></h1><h2 id="exception-class" tabindex="-1">Exception Class <a class="header-anchor" href="#exception-class" aria-hidden="true">#</a></h2><p>This is an abstract class that can be used to create some quick and simple exceptions with some default message structure.</p><h3 id="class-signature" tabindex="-1">Class Signature <a class="header-anchor" href="#class-signature" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">abstract</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Exception</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Error</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">//</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre><code><span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ValueObjectCanNotBeEmptyException</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Exception</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">value</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="message-formatting" tabindex="-1">Message Formatting <a class="header-anchor" href="#message-formatting" aria-hidden="true">#</a></h3><p>It simply takes the name of the class (in PascalCase), removes the word Exception from it and space separates the words. For example, the above class <code>ValueObjectCanNotBeEmptyException</code> will show a message <code>Value Object Can Not Be Empty</code> If a custom message value is passed then it will be appended to the class name message.</p>`,9),p=[t];function o(c,r,i,d,y,C){return e(),a("div",null,p)}const u=s(l,[["render",o]]);export{D as __pageData,u as default};
