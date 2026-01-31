import { Injectable } from "@nestjs/common";
import { TaskRepository } from "../repositories/task.repository";
import { CreateTaskDto } from "../dtos/tasks/create-task.dto";
import { User } from "../entities/user.entity";
import { Task } from "../entities/task.entity";
import { UpdateTaskDto } from "../dtos/tasks/update-task.dto";

@Injectable()
export class TaskService {
    constructor(private readonly taskRepository: TaskRepository) { }
    async create(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
        return this.taskRepository.create(createTaskDto, user);
    }

    async findAll(): Promise<Task[]> {
        return this.taskRepository.findAll();
    }

    async findById(id: number): Promise<Task | null> {
        const task = await this.taskRepository.findById(id);
        if (!task) {
            throw new Error('Task not found');
        }
        return task;
    }

    async update(id: number, updateTaskDto: UpdateTaskDto): Promise<void> {
        await this.findById(id);
        return this.taskRepository.update(id, updateTaskDto);
    }

    async delete(id: number): Promise<void> {
        await this.findById(id);
        return this.taskRepository.delete(id);
    }
}