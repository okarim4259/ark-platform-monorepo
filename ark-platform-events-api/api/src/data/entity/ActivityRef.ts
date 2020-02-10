import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ActivityType } from "../domain/ActivityTypes";

@Entity()
export class ActivityRef {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar")
    activity_type: ActivityType;
}
