document.addEventListener("DOMContentLoaded" ,function() {
    const links = document.querySelectorAll(".active_font_tabs");
    const img = document.querySelectorAll(".change_image_existante .change_img");
    const fond = document.querySelector("#fond");
    const closeFond = document.querySelector("#fond_position .close");
    const existantClose = document.querySelector("#existant .close");
    const existant = document.querySelector("#existant");
    const formPriviem = document.querySelector("#formPreviem img");
    const priviem = document.querySelector("#formPreviem");
    const addImg = document.querySelector(".file_input");
    const tabsLink = document.querySelector(".tabs_texte a");
    const tabsShow = document.querySelector(".tabs_texte_show");
    const removeInputValue = document.querySelector(".tabs_texte_show .right img");
    const removeItem = document.querySelector("#existant .remove_img");
    const inputValue = document.querySelector(".mon_txt");
    const contentWrapper = document.querySelector("#existant .wrapper");
    const file_button = document.querySelector(".file_item .file_input");
    const noneLink = document.querySelectorAll(".file_item .file_input");
    const images = document.querySelector("#imagesWindow_poistion .close");
    const imagesWindow = document.querySelector("#imagesWindow");
    const itemsImage = document.querySelectorAll(".tabsl_item_border");
    
    // file_button.addEventListener("click", function(event) {
    //     priviem.classList.add("formPreviem_show")
    // })

    
    

    
//    if(!formPriviem.getAttribute("src")) {
    
//     existant.classList.remove("existant_show")
    
//    }
    addImg.addEventListener("change", function() {
            uploadFile(addImg.files[0]);
    })
    // priviem.style.display = "none"
    // if(existant.innerHTML = "") {
    //    img.forEach(link => {
    //     link.removeEventListener("click", false)
    //    })
    // }
    function showFond() {
        links.forEach(links => {
            links.addEventListener("click", function(event) {
                event.preventDefault();;
                fond.classList.remove("hide_fond")
                fond.classList.add("show_fond")
            })
        })
        img.forEach(links => {
            links.addEventListener("click", function(event) {
                event.preventDefault();;
                existant.classList.remove("existant_hide")
                existant.classList.add("existant_show")
            })
        })

        itemsImage.forEach(links => {
            links.addEventListener("click", function(event) {
                event.preventDefault();;
                imagesWindow.classList.remove("imagesWindow_hide");
                imagesWindow.classList.add("imagesWindow_show");
            })
        })
       
        images.addEventListener("click", function(event) {
                imagesWindow.classList.add("imagesWindow_hide");
                imagesWindow.classList.remove("imagesWindow_show");
            })
        
        tabsLink.addEventListener("click", function() {
            tabsShow.classList.toggle("tabs_texte_show_active")
        })
        removeInputValue.addEventListener("click", function() {
            inputValue.value = ""
        })
    }
    function hideFond() {
        closeFond.addEventListener("click", function() {
            fond.classList.remove("show_fond");
            fond.classList.add("hide_fond")
        })
        existantClose.addEventListener("click", function() {
            existant.classList.remove("existant_show");
            existant.classList.add("existant_hide")
        })
    }
    function addImage() {
        const existante = `<div id="formPreviem" class="file_priviem">
          <div class="cell">
            <img  alt />
            <a class="add_img" href="#">Ajouter</a>
            <a class="remove_img" href="#">Supprimer</a>
          </div>
        </div>`
        contentWrapper.insertAdjacentHTML("beforeend", existante)
    }
    function uploadFile(file) {
        if(!["image/jpeg", "image/png", "image/gif"].includes(file.type)) {
            alert("Разрешены только изображения");
            addImg.value = "";
            return
        }
        if(file.size > 10 * 1024 * 1024) {
            alert("файл должен быть меньше 10 МБ");
            return;
        }
       
        let reader = new FileReader();
        
        reader.onload = function(e) {
            formPriviem.src = `${e.target.result}`; 
        }
        
        reader.onerror = function(e) {
            alert("Error")
            console.log("error");
            
        }
        reader.readAsDataURL(file);
        console.log(reader);
    
    }
    showFond()
    hideFond()
})