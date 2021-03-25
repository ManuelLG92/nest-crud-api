
import { IsOptional } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 60 })
    name: string;

    @Column("varchar", { length: 60 })
    surname: string;

    @Column({ type: "int", width: 15, nullable: true })
    phone: Number;

    @Column("varchar", { length: 160 , unique: true})
    email: string;

    @Column("varchar", { length: 255 })
    password: string;
    
    @CreateDateColumn({type:'timestamp'})
    createdAt: Date

}
