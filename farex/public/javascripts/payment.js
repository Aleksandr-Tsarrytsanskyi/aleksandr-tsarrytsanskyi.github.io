document.addEventListener("DOMContentLoaded", function () {
  const inputNumber = document.querySelectorAll(
    ".profile__payment_number input",
  );
  const inputcardAction = document.querySelectorAll(
    ".profile__valid_item input",
  );
  const inputcard = document.querySelectorAll(".payment__payment_checkbox");
  const inputCode = document.querySelector(".profile__payment_code input");
  const paymentCard = document.querySelector(".profile__payment_card");
  const choiceDepartment = document.querySelectorAll(".choice_department");
  const DepartmentMewPosht = document.querySelector(
    ".payment__department_new_posht",
  );

  const terminalNewPosht = document.querySelector(
    ".payment__department_terminal",
  );
  const DepartmentUrkPosht = document.querySelector(
    ".payment__department_urk_terminal",
  );
  const order = document.querySelector(".payment__order");
  const policyOrder = document.querySelector(".payment__real");
  const citiesList = document.querySelector(".payment_search_siti");
  const searchTerminal = document.querySelector(".payment_search_terminal");
  const citiBtn = document.querySelector(".payment__cities");
  const citiList = document.querySelector(".payment_citi_list");
  const citiTerminal = document.querySelector(".payment__department_terminal");
  
  const payCard = document.querySelector(".profile__payment_card");
  const payPoshta = document.querySelector(".payment_poshta .payment__svg_new_posht");
  const payPoshtomat = document.querySelector(".payment_poshta .payment__svg_poshomat");
  const paySvgUrkPosht = document.querySelector(".payment__svg_urk_posht");
  const paySearchUrkPosht = document.querySelector(".payment_search_urk_terminal ");


  let element = order.elements;
  let {
    name,
    firstname,
    surname,
    phone,
    mail,
    policy,
    city,
    region,
    poshta,
    urkposhta,
  } = element;

  
  DepartmentMewPosht.classList.add("payment_new_posht_show");
  payPoshta.classList.add("payment_new_posht_show");
  
  choiceDepartment.forEach((poshta) => {
    poshta.addEventListener("change", function () {
      if (poshta.value == "1") {
        DepartmentMewPosht.classList.add("payment_new_posht_show");
        DepartmentUrkPosht.classList.remove("payment_new_posht_show");
        citiTerminal.classList.remove("payment_new_posht_show");
        paySvgUrkPosht.classList.remove("payment_new_posht_show");
         payPoshta.classList.add("payment_new_posht_show");
         payPoshtomat.classList.remove("payment_new_posht_show");
         searchTerminal.classList.remove("payment__cities_list_show");
         paySearchUrkPosht.classList.remove("payment__cities_list_show");
         citiTerminal.textContent = "Выберите отделение"
         DepartmentUrkPosht.textContent = "Выберите отделение"
      }

      if (poshta.value == "2") {
        DepartmentUrkPosht.classList.add("payment_new_posht_show");
        paySvgUrkPosht.classList.add("payment_new_posht_show");
        DepartmentMewPosht.classList.remove("payment_new_posht_show");
        citiesList.classList.remove("payment__cities_list_show");
        citiTerminal.classList.remove("payment_new_posht_show");
      payPoshta.classList.remove("payment_new_posht_show");
      payPoshtomat.classList.remove("payment_new_posht_show");
      
          citiTerminal.textContent = "Выберите отделение"
         DepartmentMewPosht.textContent = "Выберите отделение"
      }

      if (poshta.value == "3") {
        citiTerminal.classList.add("payment_new_posht_show");
        DepartmentUrkPosht.classList.remove("payment_new_posht_show");
        DepartmentMewPosht.classList.remove("payment_new_posht_show");
        paySvgUrkPosht.classList.remove("payment_new_posht_show");
        payPoshta.classList.remove("payment_new_posht_show");
        paySearchUrkPosht.classList.remove("payment__cities_list_show");
        payPoshtomat.classList.add("payment_new_posht_show");
          DepartmentUrkPosht.textContent = "Выберите отделение"
         DepartmentMewPosht.textContent = "Выберите отделение"
      }
    });
  });

  citiBtn.addEventListener("click", function (e) {
    citiList.classList.toggle("payment_citi_lis_show");
  });

  order.addEventListener("submit", function (event) {
    event.preventDefault();
    console.dir("OK");

    let error = validateFeddBack();
    if (error === 0) {
      console.dir("send");
      order.reset();
    }
  });

  function validateFeddBack() {
    let error = 0;
    let regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    const regExp = new RegExp(regExpEmail);
    let regExpphone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    const regExpPhone = new RegExp(regExpphone);
    if (name.value.length < 3) {
      erorrInput(name, "error_input");
      error++;
    } else {
      validateInput(name, "error_input");
    }

    if (firstname.value.length < 3) {
      erorrInput(firstname, "error_input");
      error++;
    } else {
      validateInput(firstname, "error_input");
    }
    if (surname.value.length < 3) {
      erorrInput(surname, "error_input");
      error++;
    } else {
      validateInput(surname, "error_input");
    }

    if (!regExp.test(mail.value)) {
      console.dir("error");
      erorrInput(mail, "error_input");
      error++;
    } else {
      validateInput(mail, "error_input");
    }

    if (!regExpPhone.test(phone.value)) {
      erorrInput(phone, "error_input");
      error++;
    } else {
      validateInput(phone, "error_input");
    }

    if (!policy.checked) {
      erorrInput(policyOrder, "error_input");
      error++;
    } else {
      validateInput(policyOrder, "error_input");
    }

    choiceDepartment.forEach((poshta) => {
      if (
        poshta.checked &&
        poshta.parentElement.parentElement.lastElementChild.firstElementChild.firstElementChild.firstElementChild
          .textContent === "Выберите отделение"
      ) {
        // console.dir(
        //   poshta.parentElement.nextElementSibling.firstElementChild.textContent,
        // );

      

        erorrInput(
           poshta.parentElement.parentElement.lastElementChild.firstElementChild.firstElementChild.firstElementChild,
          "error_input",
        );
        error++;
      } else {
        validateInput(
           poshta.parentElement.parentElement.lastElementChild.firstElementChild.firstElementChild.firstElementChild,
          "error_input",
        );
      }
    });

    if(payCard.classList.contains("show_payment_card")) {
      console.dir("OK");
      
    }

    // if(paymentNW.checked && DepartmentMewPosht.textContent === "Выберите отделение") {
    //   erorrInput(DepartmentMewPosht, "error_input");
    //   error++;
    // }
    // else {
    //   validateInput(DepartmentMewPosht, "error_input");
    // }

    // if(message.value.length < 10) {
    //    erorrInput(message, "error_input")
    //     error++
    // }

    // else {
    //    validateInput(message, "error_input")
    // }

    // if(!policy.checked) {
    //   erorrInput(inputCheckbox, "error_input")
    //     error++
    // }

    // else {
    //   validateInput(inputCheckbox, "error_input")
    // }
    return error;
  }

  function erorrInput(input, addclass) {
    input.classList.add(addclass);
  }

  function validateInput(input, removeclass) {
    input.classList.remove(removeclass);
  }

  inputcard.forEach((card) => {
    card.addEventListener("change", function () {
      if (card.value == "1") {
        paymentCard.classList.remove("show_payment_card");
      }

      if (card.value == "card") {
        paymentCard.classList.add("show_payment_card");
      }
    });
  });

  inputCode.addEventListener("input", function () {
    this.value = this.value.substr(0, 3);
  });

  inputNumber.forEach((input) => {
    input.addEventListener("input", function (e) {
      this.value = this.value.substr(0, 4);
      if (this.value.length === 4) {
        this.blur();

        e.target.parentElement.nextElementSibling.firstElementChild.focus();
      }
    });
  });

  inputcardAction.forEach((input) => {
    input.addEventListener("input", function (e) {
      this.value = this.value.substr(0, 2);
      if (this.value.length === 2) {
        this.blur();

        e.target.parentElement.nextElementSibling.nextElementSibling.firstElementChild.focus();
      }
    });
  });

  const apiKey = "133bb950a4736171283fd4c30e83df3a";
  const url = "https://api.novaposhta.ua/v2.0/json/";

  async function getNPWarehouses(cityName) {
    const body = {
      apiKey: apiKey,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityName: cityName, // Название города (например, "Киев")
        Language: "ru",
      },
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const result = await response.json();

      if (result.success) {
        // Тут ваш код для отображения отделений, например:
        renderWarehouseList(result.data);
      } else {
        console.error("Ошибка:", result.errors);
      }
    } catch (error) {
      console.error("Ошибка запроса:", error);
    }
  }
 async function getUkrposhtaBranches(city) {
  // Кодируем название города для URL
  const encodedCity = encodeURIComponent(city);
  // Эндпоинт для поиска отделений по городу
  const url = `https://www.ukrposhta.ua/rn-api/v1/branches/list?city=${encodedCity}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Ошибка сети');
    }
    const data = await response.json();
    
    // Вывод списка отделений в консоль
    console.log(`Отделения в ${city}:`, data);
    return data;
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

// Использование

  function renderWarehouseList(cities) {
    const ol = document.querySelector(".payment__cities_list");
    const terminal = document.querySelector(".payment__cities_terminal");
    // const list = document.querySelector(".payment__cities_list");
    // select.innerHTML = '<option value="">Выберите отделение</option>';

    cities.forEach((city) => {
      const li = document.createElement("li");
      // const button = document.createElement("button");
      li.classList.add(city.Ref);
      // Отображаем название на русском (SettlementTypeDescription - тип, CityDescription - название)
      li.textContent = ` ${city.DescriptionRu.toLowerCase()}`;

      if (!city.Description.toLowerCase().includes("поштомат")) {
        ol.appendChild(li);
      }

      if (city.Description.toLowerCase().includes("поштомат")) {
        terminal.appendChild(li);
      }
    });

    const citiesListLi = document.querySelectorAll(".payment__cities_list li");
    const trminalList = document.querySelectorAll(
      ".payment__cities_terminal li",
    );

    citiesListLi.forEach((litext) => {
      litext.addEventListener("click", function (e) {
        let litexts = e.target.textContent;

        citiesList.classList.remove("payment__cities_list_show");

        DepartmentMewPosht.textContent = litexts;
      });
    });

    trminalList.forEach((litext) => {
      litext.addEventListener("click", function (e) {
        let litexts = e.target.textContent;

        searchTerminal.classList.remove("payment__cities_list_show");

        terminalNewPosht.textContent = litexts;
      });
    });

    addsearchBranch(citiesListLi);
    addSearchTerminal(trminalList);
  }

  // function rendercities(cities) {
  //   const ol = document.querySelector(".payment_citi_list");

  //   // select.innerHTML = '<option value="">Выберите отделение</option>';

  //   cities.forEach((city) => {
  //     const li = document.createElement("li");
  //    console.dir(city.DescriptionRu);

  //     li.classList.add(city.Ref);
  //     // Отображаем название на русском (SettlementTypeDescription - тип, CityDescription - название)
  //     li.textContent = ` ${city.DescriptionRu}`;
  //     ol.appendChild(li);

  //   });
  // }

  DepartmentMewPosht.addEventListener("click", function (e) {
    e.target.parentElement.parentElement.parentElement.lastElementChild.classList.toggle("payment__cities_list_show");
  });

  terminalNewPosht.addEventListener("click", function (e) {
    e.target.parentElement.parentElement.parentElement.lastElementChild.classList.toggle("payment__cities_list_show");
  });

  DepartmentUrkPosht.addEventListener("click", function (e) {
    e.target.parentElement.parentElement.parentElement.lastElementChild.classList.toggle("payment__cities_list_show");
  });

  function addsearchBranch(searchListBranch) {
    const search = document.querySelector(".payment_search");

    console.dir(searchListBranch);

    search.addEventListener("input", function () {
      let val = this.value.trim().toLowerCase();
      let text = console.dir(val);

      if (val != "") {
        searchListBranch.forEach((elem) => {
          if (elem.innerText.search(val) == -1) {
            elem.classList.add("payment__cities_li_hide");
            elem.innerHTML = elem.innerText;
          } else {
            elem.classList.remove("payment__cities_li_hide");
            let str = elem.innerText;
            elem.innerHTML = insertMark(
              str,
              elem.innerText.search(val),
              val.length,
            );
          }
        });
      } else {
        searchListBranch.forEach((elem) => {
          elem.classList.remove("payment__cities_li_hide");
          elem.innerHTML = elem.innerText;
        });
      }
    });
  }

  function addSearchTerminal(searchTerminal) {
    const search = document.querySelector(".payment_search_terminal_n_w");

    console.dir(searchTerminal);

    search.addEventListener("input", function () {
      let val = this.value.trim().toLowerCase();
      let text = console.dir(val);

      if (val != "") {
        searchTerminal.forEach((elem) => {
          if (elem.innerText.search(val) == -1) {
            elem.classList.add("payment__cities_li_hide");
            elem.innerHTML = elem.innerText;
          } else {
            elem.classList.remove("payment__cities_li_hide");
            let str = elem.innerText;
            elem.innerHTML = insertMark(
              str,
              elem.innerText.search(val),
              val.length,
            );
          }
        });
      } else {
        searchTerminal.forEach((elem) => {
          elem.classList.remove("payment__cities_li_hide");
          elem.innerHTML = elem.innerText;
        });
      }
    });
  }

  function insertMark(string, pos, len) {
    return (
      string.slice(0, pos) +
      "<mark>" +
      string.slice(pos, pos + len) +
      "</mark>" +
      string.slice(pos + len)
    );
  }

  //   const apiUrl = 'https://api.ukrposhta.ua/v1/addresses/get_settlements_by_region'; // Примерный эндпоинт
  // const apiKeyUrk = 'ВАШ_API_KEY'; // Получите ключ на сайте Укрпочты

  // async function getCities() {
  //     try {
  //         const response = await fetch(`${apiUrl}?regionName=Київська`, {
  //             method: 'GET',
  //             headers: {
  //                 'Authorization': `Bearer ${apiKeyUrk}`,
  //                 'Content-Type': 'application/json'
  //             }
  //         });
  //         const data = await response.json();
  //         console.log(data); // Обработка списка городов
  //         populateSelect(data);
  //     } catch (error) {
  //         console.error('Ошибка:', error);
  //     }
  // }

  // function populateSelect(cities) {
  //     const select = document.getElementById('city-select');
  //     cities.forEach(city => {
  //         let option = document.createElement('option');
  //         option.value = city.postcode;
  //         option.text = city.name;
  //         select.appendChild(option);
  //     });
  // }
  getUkrposhtaBranches("Київ");
  getNPWarehouses("Чернигов");
});
