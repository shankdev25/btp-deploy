const cds = require("@sap/cds");

class CatalogService extends cds.ApplicationService{

    async init(){

        const {trainers} = this.entities;

       

        await super.init();
    }
}

module.exports = CatalogService;