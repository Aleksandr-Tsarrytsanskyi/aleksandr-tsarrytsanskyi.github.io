export class Model {
    constructor() {
        this.data = []
    }

    async loadingData() {
       return new Promise((resolve, reject) => {
           fetch("users").then((res) => res.json()).then((data) => {
                this.data = data
                resolve();
           }).catch((err) => {
            console.error("Ощибка загрузки данных", err)
            reject(err)
           })
       })
    }

    soretingProducts (sortingValue) {
        const {sortType} = sortingValue;
        let filterData;

        if(sortType !== "allproducts") {
            filterData = this.data.filter((request) => {
                return request
            })
        }

        else {
            filterData = [...this.data];
        }

        return filterData.filter((product) => {
            switch (sortType) {
                case "new":
                   if(product.filtr == "new") {
                       return product
                        
                   }
                 break;   

                  case "top":
                   if(product.filtr == "top") {
                  return product
                    
                   }
                 break;  
                 
                
            
                default:
                    break;
            }
        })
    }
}