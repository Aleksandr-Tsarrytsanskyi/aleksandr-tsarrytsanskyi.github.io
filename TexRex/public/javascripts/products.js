document.addEventListener("DOMContentLoaded", function() {
    const producthit = document.querySelectorAll(".products_cart")
    function addLocalStorage(producthit) {
        producthit.forEach(product => {
    product.addEventListener("click", function(event) {
        let reviews = product.children[2].innerHTML;
        let hit = product.children[0].children[0].firstElementChild.innerHTML;
    let title = product.children[3].textContent
    let subtitle = product.children[4].textContent
    let price = product.children[5].children[0].firstElementChild.children[0].textContent;
    let diskount = product.children[5].children[1].firstElementChild.textContent;
    let procent = product.children[5].children[2].firstElementChild.textContent;
      console.log(title);
      
      let storageTitle =  localStorage.setItem("title", title)
      let storageSubTitle =  localStorage.setItem("subtitle", subtitle)
      let storageReviews =  localStorage.setItem("reviews", reviews)
      let storagHit =  localStorage.setItem("hit", hit)
      let storagPrice =  localStorage.setItem("price", price)
      let storagDiskount =  localStorage.setItem("diskount", diskount)
      let storagDiskountProcent =  localStorage.setItem("procent", procent)
      
    })
  })
}
addLocalStorage(producthit);
})