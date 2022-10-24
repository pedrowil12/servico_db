import "reflect-metadata"
import { DataSource } from "typeorm"
import { Projeto, Administrador} from "./model"

export const MariaDBDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "web_orm_insert_ts",
    synchronize: true,
    logging: false,
    entities: [Projeto, Administrador],
    migrations: [],
    subscribers: [],
})




