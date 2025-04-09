document.addEventListener("DOMContentLoaded", init)
function init() {
    const tabsBtn = document.querySelectorAll(".tabs_navs_btn");
    const tabsItems = document.querySelectorAll(".tabs_item");

    tabsBtn.forEach(btn => {
        btn.addEventListener("click", function() {
            let currentBtn = btn
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
        document.querySelector(".click_item1").click();
    })
}

