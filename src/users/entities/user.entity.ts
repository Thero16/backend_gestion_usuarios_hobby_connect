import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({nullable: false})
    username: string;

    @Column({nullable: false})
    email: string;

    @Column({nullable: false})
    password: string;

    @Column({nullable: true})
    biography: string;

    @Column({type: Date, nullable: false})
    dateOfBirth: Date;

    @Column({nullable: false})
    country: string;

    @Column("text", { array: true, default: ["user"] })
    roles: string[];

    @Column({default: true})
    isActive: boolean;

}
