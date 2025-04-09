document.addEventListener("DOMContentLoaded" ,function() {
    const baseLink = document.querySelectorAll("#tab_1 a")
    const tileLink = document.querySelectorAll("#tab_2 a")
    const MonumentLink = document.querySelectorAll("#tab_4 .stl")
    const tileContent = document.querySelectorAll("#tab_2 .content");
    const stella = document.querySelectorAll(".monument1 .stella");
    const monument = document.querySelectorAll("#tab_4 .Monument");
    const item2 = document.querySelector("#footer .item2");
    const styleShow = document.querySelector("#footer .style");
    const monument1 = document.querySelector(".monument1 .position");
    const modal = document.querySelector(".modal");
    const size = document.querySelector("#footer .size");
    const item1 = document.querySelector("#footer .item1 ");
    const plitkaActive = document.querySelector("#tab_2 figure");
    const item3 = document.querySelector(".item3");
    const tab5 = document.querySelector("#tab_5");

    
    

    
    // baseLink.forEach(item => {
    //     item.addEventListener("click", function(event) {
    //         console.log(item);
            
    //         event.target.classList.toggle("base")
    //        if(item.classList.contains("base")) {
    //            item.classList.remove("base");
    //        }

    //     })
    // })

    item3.addEventListener("click", function() {
        item3.classList.toggle("item3_active")
        if(!item3.classList.contains("item3_active")) {
            tab5.style.opacity = "0"
        }
        else {
             tab5.style.opacity = "1"
        }
    })

    item1.addEventListener("click", function() {
        size.classList.toggle("size_show")
        item1.classList.toggle("item3_active")
    })

    tileLink.forEach(item => {
        item.addEventListener("click", function(event) {
            event.target.classList.toggle("stl")
            event.target.classList.toggle("link_up")
            
            item.nextElementSibling.classList.toggle("content")
           
        })
    })

    MonumentLink.forEach(item => {
        item.addEventListener("click", function(event) {
            event.target.classList.toggle("stl");
            event.target.classList.toggle("monument_up");
            item.nextElementSibling.classList.toggle("Monument")
            
        })
    })

    stella.forEach(item => {
        item.addEventListener("click", function(event) {
            event.target.classList.toggle("hide");
            event.target.classList.toggle("monument_up");
            item.nextElementSibling.classList.toggle("content")
            
        })
    })

    item2.addEventListener("click",function() {
        styleShow.classList.toggle("style_show");
        item2.classList.toggle("item3_active")
    })

    modal.addEventListener("click", function() {
        monument1.classList.toggle("show_monument1")
    })

})