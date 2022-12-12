import{_ as s,c as a,o as e,a as n}from"./app.3914c014.js";const u=JSON.parse('{"title":"Livewire Comments Package","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Prerequisites","slug":"prerequisites","link":"#prerequisites","children":[]},{"level":2,"title":"Install Livewire Comments Package","slug":"install-livewire-comments-package","link":"#install-livewire-comments-package","children":[]}],"relativePath":"livewire-comments/index.md"}'),t={name:"livewire-comments/index.md"},o=n(`<h1 id="livewire-comments-package" tabindex="-1">Livewire Comments Package <a class="header-anchor" href="#livewire-comments-package" aria-hidden="true">#</a></h1><h2 id="introduction" tabindex="-1"><em>Introduction</em> <a class="header-anchor" href="#introduction" aria-hidden="true">#</a></h2><p>Package use Macroable trait to add comments to any model. It uses Livewire and AlpineJs to create a comment system with a lot of features.</p><p>Package support multiple comment systems on the same page.</p><p>Package support multiple auth guards.</p><h2 id="prerequisites" tabindex="-1"><em>Prerequisites</em> <a class="header-anchor" href="#prerequisites" aria-hidden="true">#</a></h2><ul><li><a href="https://getcomposer.org/download/" target="_blank" rel="noreferrer">Composer</a></li><li><a href="https://laravel.com/docs/9.x/installation" target="_blank" rel="noreferrer">Laravel 9.x</a></li><li><a href="https://laravel-livewire.com/docs/2.x/installation" target="_blank" rel="noreferrer">Livewire</a></li><li><a href="https://alpinejs.dev/essentials/installation" target="_blank" rel="noreferrer">AlpineJs</a></li><li><a href="https://laravel.com/docs/9.x/broadcasting#installing-laravel-echo" target="_blank" rel="noreferrer">Laravel Echo</a></li></ul><h2 id="install-livewire-comments-package" tabindex="-1"><em>Install Livewire Comments Package</em> <a class="header-anchor" href="#install-livewire-comments-package" aria-hidden="true">#</a></h2><p>Extract the files from the archive you have downloaded into a <code>packages</code> folder in your project root. <a href="https://i.ibb.co/vLgwXWK/image.png" target="_blank" rel="noreferrer"><img src="https://i.ibb.co/vLgwXWK/image.png" alt="Livewire Comments Package"></a></p><p>Edit your <code>composer.json</code> file and add a local path repository:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">repositories</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">path</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">url</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./packages/*</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><p><strong>In your terminal run:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">composer require vigstudio/livewire-comments </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">@dev</span></span>
<span class="line"></span></code></pre></div><p><strong>Publish the assets files with:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">php artisan vendor:publish --tag=vgcomment-assets-livewire</span></span>
<span class="line"></span></code></pre></div><p><strong>You can publish the config with:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">php artisan vendor:publish --tag=vgcomment-config</span></span>
<span class="line"></span></code></pre></div><p><strong>Run the migrate command to create the necessary tables:</strong> Before running the migrate command, you can edit the <code>config/vgcomment.php</code> file to change the table names.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">php artisan migrate</span></span>
<span class="line"></span></code></pre></div><p><strong>Additionally you may want to clear the config, cache, etc:</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">php artisan optimize:clear</span></span>
<span class="line"></span></code></pre></div>`,21),l=[o];function r(p,i,c,d,h,g){return e(),a("div",null,l)}const y=s(t,[["render",r]]);export{u as __pageData,y as default};