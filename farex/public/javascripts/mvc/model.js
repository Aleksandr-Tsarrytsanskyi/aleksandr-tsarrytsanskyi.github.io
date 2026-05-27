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
        const {sortType, sortPrice} = sortingValue;
        let filterData;


        if(sortType !== "allproducts") {
            filterData = this.data.filter((request) => {
                return request.filtr === sortType
            })
        }

        else {
            filterData = [...this.data]
        }
        
    return filterData.sort((a,b) => {
        switch (sortPrice) {
            case "asc":             
                   return b.price - a.price
                            
                break;

                case "dsc":             
                   return a.price - b.price
                            
                break;
        
           
        }
    })
        

        
    }

    soretingUrlProducts (sortingValue) {
        const {sortType, sortPrice} = sortingValue;
        let checkFiltrData = []
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search'); // Получаем то, что искали
       
            const decodedQuery = decodeURIComponent(searchQuery).toLowerCase();
            let filterData = this.data.filter(el => el.name.toLowerCase().includes(decodedQuery))
            checkFiltrData = filterData
             
       
         
        
        
        
    return checkFiltrData.sort((a,b) => {
        switch (sortPrice) {
            case "asc":             
                   return b.price - a.price
                            
                break;

                case "dsc":             
                   return a.price - b.price
                            
                break;
        
           
        }
    })
        

        
    }
}