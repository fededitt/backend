class ServiceManager {  
    constructor() { 
        this.services = [1,2,3,4,5];

    }

    getServices() {
        return this.services;
    }




}

const obj = new ServiceManager();

console.log(obj.getServices());




