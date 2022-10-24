import { MariaDBDataSource } from "./data_source";
import {Projeto, Administrador} from "./model";

export class Service{    
    start(){       
            MariaDBDataSource.initialize().then( ()=>{
                console.log("Inicializada a fonte de dados...");
            }).catch((err)=>{
                console.error("Erro de inicialização da fonte de dados!!");
            }) 
    }
    async insertProject(projeto: Projeto){
        await MariaDBDataSource.manager.save(projeto);        
    }
    async insertAdm(administrador: Administrador){
        await MariaDBDataSource.manager.save(administrador);
    }
    async listAll(){
       let list = await MariaDBDataSource.manager.find(Projeto);
       return list;
    }
    async listAdm(){
        let listAdm = await MariaDBDataSource.manager.find(Administrador);
        return listAdm;
    }
}

