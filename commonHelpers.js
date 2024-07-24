import{S as m,i as a}from"./assets/vendor-0fc460d7.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h=document.getElementById("search-form"),u=document.querySelector(".gallery"),f=document.querySelector(".load-more"),d=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:"250",overlayOpacity:.8});h.addEventListener("submit",b);f.addEventListener("click",v);let l=1,c="";function b(o){if(o.preventDefault(),u.innerHTML="",c=o.target.elements.query.value.trim(),!c){a.error({message:"Sorry, you have to type something in the search field. Please try again!",position:"topRight"});return}l=1,p(c,l),h.reset()}async function p(o,i){showLoader();try{const r=await fetchImages(o,i);if(hideLoader(),r.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(r.hits),d?d.refresh():d=new m(".gallery a",{captionsData:"alt",captionDelay:250}),r.hits.length<40?(a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),f.classList.add("hidden")):f.classList.remove("hidden");const{height:s}=u.firstElementChild.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}catch{hideLoader(),a.error()}}function L(o){const i=o.map(({webformatURL:r,largeImageURL:s,tags:e,likes:t,views:n,comments:g,downloads:y})=>`<div class="photo-card">
        <a href="${s}">
            <img src="${r}" alt="${e}" loading="lazy" />
            <div class="info">
              <p class="info-item">
                <b>Likes</b>
                ${t}
              </p>
              <p class="info-item">
                <b>Views</b>
                ${n}
              </p>
              <p class="info-item">
                <b>Comments</b>
                ${g}
              </p>
              <p class="info-item">
                <b>Downloads</b>
                ${y}
              </p>
            </div></a>
          </div>`).join("");u.insertAdjacentHTML("beforeend",i)}function v(){l+=1,p(c,l)}
//# sourceMappingURL=commonHelpers.js.map
