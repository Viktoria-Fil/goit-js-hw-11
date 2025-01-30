import{S as f,i as l}from"./assets/vendor-TVMjIRjt.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();async function g(s){const r="https://pixabay.com/api",o=new URLSearchParams({key:"48530484-8b1e6b3578d96dabcf99a211e",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),a=`${r}/?${o}`;return fetch(a).then(e=>e.json())}function h(s){return s.map(r=>{const{largeImageURL:o,webformatURL:a,tags:e,likes:t,views:n,comments:p,downloads:d}=r;return`<li class="gallery-item" >
    <a class="gallery-link" href="${o}">
      <img
        class="gallery-image"
        src="${a}"
        alt="${e}"
      />
    </a>
    <div class="item-text">
    <p class="numbers"><span class="top-item-text">Likes:</span> ${t}</p>
    <p class="numbers"><span class="top-item-text">Views:</span> ${n}</p>
    <p class="numbers"><span class="top-item-text">Comments:</span> ${p}</p>
    <p class="numbers"><span class="top-item-text">Downloads:</span> ${d}</p>
    </div>
  </li>`}).join("")}const y=new f(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250,widthRatio:.8,scaleImageToRatio:!0}),b=document.querySelector(".form"),u=document.querySelector(".gallery"),m=document.querySelector(".loader");b.addEventListener("submit",s=>{s.preventDefault(),i();const r=s.target.elements.query.value.trim();if(!r){i(),c(),l.warning({title:"Caution",message:"Please add request",messageSize:"16px",position:"center",color:"black"});return}g(r).then(o=>{i(),c(),o.hits.length?(u.innerHTML="",L(o.hits)):(l.info({title:"!",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",position:"center",backgroundColor:"red"}),c())}).catch(o=>{i(),l.error({title:"Error",message:"Please add request",messageSize:"16px",position:"center",backgroundColor:"#EF4040"}),c(),u.innerHTML=""}).finally(()=>{s.target.reset()})});function L(s){const r=h(s);u.insertAdjacentHTML("beforeend",r),y.refresh()}const i=()=>{m.classList.remove("hidden")},c=()=>{m.classList.add("hidden")};
//# sourceMappingURL=index.js.map
