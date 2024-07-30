let $ = document;
let wishListLordIcon = $.querySelectorAll(".wishList-lord-icon");
let searchContainer = $.querySelector(".search-container");
let searchIcone = $.querySelector(".search-icon");
let singleProudctLikeBtn = $.querySelector(".single-proudct-like-btn");



function iconOnMouseOverEvent(e){
  e.target.colors = "primary:#48f70d";
}
function iconOnMouseOutWhiteEvent(e){
  if (!(e.target.className.includes("lord-icon"))) {
    e.target.colors = "primary:#ffffff";
  } 
}
function iconOnMouseOutBlackEvent(e){
  if (e.target.className.includes("lord-icon")) {
    e.target.colors = "primary:#181818";
  } 
}
function iconOnClickEvent(e){
  if (e.target.parentElement.className.includes("heart-fill")) {
    removeFromWishListDatabase(e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.innerHTML)
    e.target.parentElement.classList.remove("heart-fill");
    e.target.parentElement.innerHTML = `  <lord-icon onMouseover="iconOnMouseOverEvent(event)" onMouseout="iconOnMouseOutBlackEvent(event)" onClick="iconOnClickEvent(event)"
    src="https://cdn.lordicon.com/xyboiuok.json"
    trigger="morph"
    state="morph-heart"
    colors="primary:#181818"
    class="lord-icon"
    style="width:24px;height:24px">
    </lord-icon>`;
  } else {
    addToWishListDatabase(e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.innerHTML);   
    (e.target.parentElement).classList.add("heart-fill");
    e.target.parentElement.innerHTML = `  <lord-icon onMouseover="iconOnMouseOverEvent(event)" onMouseout="iconOnMouseOutBlackEvent(event)" onClick="iconOnClickEvent(event)"
    src="https://cdn.lordicon.com/ulnswmkk.json"
    trigger="hover"
    colors="primary:#48f70d"
    style="width:24px;height:24px">
    </lord-icon>`; 
  }
}


wishListLordIcon.forEach((icon) => {
    icon.addEventListener("mouseout", () => {
        icon.colors = "primary:#48f70d";
      });
});

searchContainer.addEventListener("mouseover", () => {
  searchIcone.trigger = "in";
  searchIcone.state = "in-search";
});

singleProudctLikeBtn.addEventListener("click", (e) => {
  if (singleProudctLikeBtn.className.includes("heart-fill")) {
    removeFromWishListDatabase(singleProudctLikeBtn.parentElement.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.innerHTML,"1");
    singleProudctLikeBtn.innerHTML = `<lord-icon
          src="https://cdn.lordicon.com/xyboiuok.json"
          trigger="morph"
          state="morph-heart"
          colors="primary:#48f70d"
          class="lord-icon"
          style="width:32px;height:32px">
          </lord-icon>`;
    singleProudctLikeBtn.classList.remove("heart-fill");
  } else {
    addToWishListDatabase(singleProudctLikeBtn.parentElement.previousElementSibling.previousElementSibling.firstElementChild.nextElementSibling.innerHTML,"2");
    singleProudctLikeBtn.innerHTML = `<lord-icon
          src="https://cdn.lordicon.com/ulnswmkk.json"
          trigger="hover"
          colors="primary:#48f70d"
          style="width:32px;height:32px">
      </lord-icon>`;
      singleProudctLikeBtn.classList.add("heart-fill");
  }
});