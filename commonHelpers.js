var y=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var c=(e,t,s)=>(y(e,t,"read from private field"),s?s.call(e):t.get(e)),m=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},i=(e,t,s,n)=>(y(e,t,"write to private field"),n?n.call(e,s):t.set(e,s),s);import{a as $,S as w,i as h}from"./assets/vendor-f144e563.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const I=40,S="44883181-49eb7880702be53042c4f854e",E="https://pixabay.com/api/";var d,a,u;class H{constructor(){m(this,d,void 0);m(this,a,void 0);m(this,u,void 0);i(this,d,""),i(this,a,1),i(this,u,0)}addPage(){i(this,a,c(this,a)+1)}resetPage(){i(this,a,1)}get totalHits(){return c(this,u)}get currentPage(){return c(this,a)}set searchQuery(t){i(this,d,t)}async fetchImage(){const t=await $.get(`${E}?key=${S}&q=${c(this,d)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${I}&page=${c(this,a)}`);return i(this,u,t.data.totalHits),t.data}}d=new WeakMap,a=new WeakMap,u=new WeakMap;const g=document.querySelector(".load-more"),p=document.getElementById("search-form"),b=document.querySelector(".gallery"),l=new H,A=new w(".gallery a");p.addEventListener("submit",O);g.addEventListener("click",M);function O(e){e.preventDefault(),b.innerHTML="",l.searchQuery=p.elements.searchQuery.value,p.reset(),L()}async function L(){try{const e=await l.fetchImage();l.currentPage===1&&l.totalHits!==0&&h.success({message:`Hooray! We found ${l.totalHits} images.`}),q(e.hits),e.hits.length<40?(h.info({message:"We're sorry, but you've reached the end of search results."}),g.classList.add("hidden")):g.classList.remove("hidden")}catch{h.error({message:"Oops! Something went wrong! Try to reload the page!"})}}function q(e){if(!e.length){h.error({message:"Sorry, there are no images matching your search query. Please try again."});return}const t=e.map(({webformatURL:s,largeImageURL:n,tags:r,likes:o,views:f,comments:v,downloads:P})=>`<div class="photo-card">
        <a href="${n}">
            <img src="${s}" alt="${r}" loading="lazy" />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>
                ${o}
              </p>
              <p class="info-item">
                <b>Views</b>
                ${f}
              </p>
              <p class="info-item">
                <b>Comments</b>
                ${v}
              </p>
              <p class="info-item">
                <b>Downloads</b>
                ${P}
              </p>
            </div></a>
          </div>`).join("");b.insertAdjacentHTML("beforeend",t),A.refresh(),l.addPage()}function M(){this.page+=1,L()}
//# sourceMappingURL=commonHelpers.js.map
