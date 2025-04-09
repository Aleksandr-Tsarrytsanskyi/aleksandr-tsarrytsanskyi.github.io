document.addEventListener("DOMContentLoaded", init)
function init() {
    const tabsBtn = document.querySelectorAll(".tabs_navs_btn");
    const tabsItems = document.querySelectorAll(".tabs_item");
    const footer_size = document.querySelector("#footer .size");
    const footer_style = document.querySelector("#footer .style");
    const footer = document.querySelector("#footer");
    tabsBtn.forEach(btn => {
        btn.addEventListener("click", function() {
            let currentBtn = btn
            footer_size.classList.remove("footer_size");
            footer_style.classList.remove("footer_style")
            let tabId = currentBtn.getAttribute("data-tab")
            let currentTab = document.querySelector(tabId)
            if(!currentBtn.classList.contains("active")) {
                tabsBtn.forEach(item => {
                    item.classList.remove("active")
                })
                tabsItems.forEach(item => {
                    item.classList.remove("active")
                })
                currentBtn.classList.add("active")
                currentTab.classList.add("active")
            }
        })
        
    })
}

