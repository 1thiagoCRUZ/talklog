import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { TaskService } from "../services/task.service";
import { AuthGuard } from "@nestjs/passport";
import { CreateTaskDto } from "../dtos/tasks/create-task.dto";
import { UpdateTaskDto } from "../dtos/tasks/update-task.dto";

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) { }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    create(@Body() createTaskDto: CreateTaskDto, @Req() req) {
        return this.taskService.create(createTaskDto, req.user);
    }

    @Get()
    findAll() {
        return this.taskService.findAll();
    }

    @Get(':id')
    @UseGuards(AuthGuard('jwt'))
    findById(@Param('id', ParseIntPipe) id: number) {
        return this.taskService.findById(id);
    }

    @Patch(':id')
    @UseGuards(AuthGuard('jwt'))
    update(@Param('id', ParseIntPipe) id: number, @Body() updateTaskDto: UpdateTaskDto, @Req() req) {
        return this.taskService.update(id, updateTaskDto);
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    delete(@Param('id', ParseIntPipe) id: number, @Req() req) {
        return this.taskService.delete(id);
    }
}