import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Administrador{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nome: string

    @Column()
    idade: number

    @Column()
    conhecimentos: string

    @Column()
    formacao: string

    @Column()
    gitHub: string

    @Column()
    linkedin: string

    @Column()
    sobre: string
}

@Entity()
export class Projeto {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    titulo: string

    @Column()
    tipo: string

    @Column()
    tecnologia: string

    @Column()
    inicio: string

    @Column()
    fim: string

    @Column()
    repo: string

}