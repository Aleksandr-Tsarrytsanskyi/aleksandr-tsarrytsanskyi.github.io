document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelectorAll(".profile_acardion");

      btn.forEach(el => {
    el.addEventListener("click", function(e) {
      console.log(e.target);
      el.classList.toggle("btn_active_tabs")
      let content = el.nextElementSibling.nextElementSibling
      console.log(content);
      
      console.log(content.style.maxHeight);
      
      if(content.style.maxHeight) {
        console.log("11111");
        
        document.querySelectorAll(".profile__acadion_content").forEach(el => {
          el.style.maxHeight = null
        })
      }
      else {
        document.querySelectorAll(".profile__acadion_content").forEach(el => {
          el.style.maxHeight = null
          content.style.maxHeight = content.scrollHeight + "px"
        })
      }
    })
  })
})