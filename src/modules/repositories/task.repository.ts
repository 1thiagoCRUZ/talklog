import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Task } from "../entities/task.entity";
import { Repository } from "typeorm";
import { CreateTaskDto } from "../dtos/tasks/create-task.dto";
import { User } from "../entities/user.entity";

@Injectable()
export class TaskRepository {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>
    ) { }

    async create(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
        const task = this.taskRepository.create({
            ...createTaskDto,
            user: user,
        });
        return this.taskRepository.save(task);
    }

    async findAll(): Promise<Task[]> {
        return this.taskRepository.find();
    }

    async findById(id: number): Promise<Task | null> {
        return this.taskRepository.findOneBy({ id });
    }

    async update(id: number, updateTaskDto: Partial<Task>): Promise<void> {
        await this.taskRepository.update(id, updateTaskDto);
    }

    async delete(id: number): Promise<void> {
        await this.taskRepository.delete(id);
    }
}