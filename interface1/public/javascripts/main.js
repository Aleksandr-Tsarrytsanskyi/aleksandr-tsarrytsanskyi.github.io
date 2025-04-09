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
    const datele = document.querySelector(".monument1 .datele");
    const hide_material = document.querySelector(".hide_material");
    const materials = document.querySelector(".materials");
    const text = document.querySelectorAll(".monument1 .text");
    const materials1 = document.querySelectorAll(".monument1 .active_materials");
    const rotateImage = document.querySelector(".modal_show img");
    const footer = document.querySelector("#footer");
    const lonks = document.querySelectorAll("#footer .style ul li a");
    const sizes = document.querySelectorAll("#footer .size ul li a");
    const footer_size = document.querySelector("#footer .size");
    const footer_style = document.querySelector("#footer .style");
    changeBottomMenu();
   function changeBottomMenu() {
    footer_size.classList.add("footer_size");
    footer_style.classList.add("footer_style")
   }
   
    text.forEach(item => {
        item.addEventListener("click", function(e) {
            if(!item.classList.contains("active_manu_item")) {
                console.log(item);
                
                // item.innerHTML = "<span>" + item +"</span>"
                
                text.forEach(item => {
                    item.classList.remove("active_manu_item")
                    item.parentElement.previousElementSibling.firstElementChild.classList.remove("border_img")
                })
                
                item.classList.add("active_manu_item")
                item.parentElement.previousElementSibling.firstElementChild.classList.add("border_img")
                
            } 
        })
    })

   
   
    datele.addEventListener("click", function() {
        hide_material.classList.toggle("hide_material_show")
        datele.classList.toggle("details_color")
    })
   
    
    // baseLink.forEach(item => {
    //     item.addEventListener("click", function(event) {
    //         console.log(item);
            
    //         event.target.classList.toggle("base")
    //        if(item.classList.contains("base")) {
    //            item.classList.remove("base");
    //        }

    //     })
    // })
    // materials.addEventListener("click", function() {
    //     hide_material.classList.add("materials_show")
    //     hide_material.classList.remove("materials_hide")
    //     materials.classList.add("item3_active")
    // })
    // datele.addEventListener("click", function() {
    //     hide_material.classList.add("materials_hide")
    //     hide_material.classList.remove("materials_show")
    //     datele.classList.add("item3_active")
    // })

    item3.addEventListener("click", function() {
        item3.classList.toggle("item3_active")
        if(!item3.classList.contains("item3_active")) {
            tab5.style.opacity = "0"
            lonks.forEach(elem => {
                
                elem.parentElement.classList.remove("footer_color")
            })
            sizes.forEach(elem => {
                
                elem.parentElement.classList.remove("footer_color")
            })
        }
        else {
            tab5.style.opacity = "1"
            lonks.forEach(elem => {
                elem.parentElement.classList.add("footer_color")
            })
            sizes.forEach(elem => {
                console.log( elem.parentElement );
               elem.parentElement.classList.add("footer_color")
           })
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
            event.target.classList.remove("man_anime");
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
        rotateImage.classList.toggle("modal_show_img_rotate")
    })

})