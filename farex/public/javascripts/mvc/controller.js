import { Model } from "./model.js";
import { View } from "./view.js";

const model = new Model()
const view = new View()

init();
async function init() {
    await model.loadingData();
    addEventListener();
}

function addEventListener() {
    view.elements.sortFilter.addEventListener("change", sortProduct)
}

function sortProduct(e) {
    const sortingValue = view.sortingElementsValue();  
   const soringData =   model.soretingProducts(sortingValue);
   console.log(soringData);
   
}

