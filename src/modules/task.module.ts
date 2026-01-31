import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "./entities/task.entity";
import { TaskRepository } from "./repositories/task.repository";
import { TaskService } from "./services/task.service";
import { TaskController } from "./controllers/task.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Task])],
    controllers: [TaskController],
    providers: [TaskRepository, TaskService],
    exports: [TaskRepository, TaskService]
})
export class TaskModule { }