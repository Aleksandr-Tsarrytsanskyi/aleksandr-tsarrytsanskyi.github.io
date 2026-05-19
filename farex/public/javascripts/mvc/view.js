export class View {
    constructor() {
        
    }

    elements = {
        sortFilter: document.querySelector(".list_products")
    }

    sortingElementsValue() {
        return {
            sortType: this.elements.sortFilter.value
        }
    }

    renderArrProducts() {
        
    }
}