import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { TaskStatus, TaskPriority } from "src/utils/enums/task-status.enum";


@Entity('task')
export class Task {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 40 })
    title: string;

    @Column()
    description: string;

    @Column({
        type: 'enum',
        enum: TaskPriority,
        default: TaskPriority.LOW,
    })
    priority: TaskPriority;

    @Column({
        type: 'enum',
        enum: TaskStatus,
        default: TaskStatus.PENDING,
    })
    status: TaskStatus;

    @Column()
    dueDate: Date;

    @Column()
    userId: number;

    @OneToMany(() => Task, (task) => task.user)
    @JoinColumn({ name: 'userId' })
    user: User;

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;
}