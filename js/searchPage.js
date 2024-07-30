let allProductArray=[]
let searchInputArray=$.querySelectorAll(".search-input")
let searchResultUl=$.querySelectorAll(".search-result-ul")
let searchResult=$.querySelector(".search-result")
let responsiveSearchPage=$.querySelector(".responsive-search-page")
let responsiveSearchResult=$.querySelector(".responsive-search-result")
let searchIcon=$.querySelector(".search-icon")
let searchExitBtn=$.querySelector(".search-exit-btn")
let searchInputValue=null
window.addEventListener("load",()=>{
    allProductArray=[]
    fetch(
        "https://api.backendless.com/E00D2420-4B94-448F-91C9-CD735A45C196/2360764B-B7DE-46FA-B8FB-8DEEF590B988/data/products?pagesize=100"
      )
        .then((res) => {
          return res.json();
        })
        .then(data=>{
            data.forEach(product => {
                allProductArray.push({name:product.name,category:product.category,price:product.price,imgUrl:product.imgUrl[0],isAvail:product.isAvail})
            });
        })
    })

    searchInputArray.forEach(searchInput=>{
        searchInput.addEventListener("input",(e)=>{
            searchInputArray.forEach(searchInput2=>{
                searchInput2.value=searchInput.value
            })
            searchInputValue=(e.target.value).trim()
            searchResultUl[0].innerHTML=""
            searchResultUl[1].innerHTML=""
            if(searchInputValue){
                searchResult.style.display="unset"
                allProductArray.forEach(product=>{
                    if((product.name).toLowerCase().includes(searchInputValue.toLowerCase()) || (product.category).includes(searchInputValue)){
                        if(!product.isAvail){
                            searchResultMakerNotAvail(searchResultUl[0],product.name,product.category,product.imgUrl)
                            searchPageMakerNotAvail(searchResultUl[1],product.name,product.category,product.imgUrl)
                        }else if(product.price[1]){
                            searchResultMakerWithOff(searchResultUl[0],product.name,product.category,enNumToPerNum(product.price[0]),enNumToPerNum(product.price[1]),product.imgUrl)
                            searchPageMakerWithOff(searchResultUl[1],product.name,product.category,enNumToPerNum(product.price[0]),enNumToPerNum(product.price[1]),product.imgUrl)
                        }else{
                            searchResultMaker(searchResultUl[0],product.name,product.category,enNumToPerNum(product.price[0]),product.imgUrl)
                            searchPageMaker(searchResultUl[1],product.name,product.category,enNumToPerNum(product.price[0]),product.imgUrl)
                        }
                    }
                })
                if(searchResultUl[0].innerHTML==''){
                    searchResultUl[0].insertAdjacentHTML("beforeEnd",`<div class="not-found-search-container"><span class="not-found-search">محصول مورد نظر پیدا نشد</span></div>`)
                    searchResultUl[1].insertAdjacentHTML("beforeEnd",`<div class="not-found-search-container"><span class="not-found-search">محصول مورد نظر پیدا نشد</span></div>`)
                }
            }else{
                searchResult.style.display="none"
            }
        })
    })
  

    window.addEventListener("resize",()=>{
        if(searchResult.style.display=="unset" && screen.width<1025){
            responsiveSearchPage.style.top="0"
        }
        if(screen.width>1025){
            responsiveSearchPage.style.top="-100000px"
        }
       
    })
    searchIcon.addEventListener("click",()=>{
        if(screen.width<1025){
            responsiveSearchPage.style.top="0"
            searchResult.style.display="unset"
        }
    })
    searchExitBtn.addEventListener("click",()=>{
        searchResult.style.display="none"
        responsiveSearchPage.style.top="-100000px"
    })
 