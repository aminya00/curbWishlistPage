let productBasketContainer = $.querySelector(".product-basket-container");
let mainBoxesTitleFa = $.querySelector(".main-boxes-title-fa");

let wishListResultDB=null

let myWishListDB=indexedDB.open("wishListDB",1)
      
myWishListDB.addEventListener("success",(e)=>{
  wishListResultDB=e.target.result
  wishListFetch()
  preLoaderDisappear()  
})
myWishListDB.addEventListener("upgradeneeded",(e)=>{
  wishListResultDB=e.target.result
  if (!wishListResultDB.objectStoreNames.contains("wishList")){
    wishListResultDB.createObjectStore("wishList",{
      keyPath:"name"
    })
  }
})

function wishListFetch(){


let wishListTransaction=wishListResultDB.transaction("wishList","readwrite")
let wishListStore=wishListTransaction.objectStore("wishList")
let wishListRequest=wishListStore.getAll()
wishListRequest.addEventListener("success",(e)=>{
  let wishListArr=e.target.result
  productBasketContainer.innerHTML=""
  if(wishListArr[0]){
    wishListArr.forEach((product) => {
      if(!product.isAvail){
        wishListItemMakerNotAvail(productBasketContainer,product.imgUrl,product.name,product.category,product.color,(product.size).join(" ").toUpperCase())
      }else{
        wishListItemMaker(productBasketContainer,product.imgUrl,product.name,product.category,enNumToPerNum(product.price),product.color,(product.size).join(" ").toUpperCase())
      }
    });
  }else{
    mainBoxesTitleFa.innerHTML="لیست علاقه‌مندی ها خالی است"
  }
})
}

function deleteFromWishListEvent(e){
removeFromWishListDatabase(e.target.parentElement.parentElement.previousElementSibling.firstElementChild.innerHTML)
wishListFetch()
}