import { IsString, IsNotEmpty, IsEmail, MinLength, IsOptional, IsUrl, isEnum, IsDate, IsEnum } from 'class-validator';
import { TaskPriority, TaskStatus } from 'src/utils/enums/task-status.enum';

export class CreateTaskDto {
    @IsString({ message: 'Title must be a string' })
    @IsNotEmpty({ message: 'Title is required' })
    title: string;

    @IsString({ message: 'Description must be a string' })
    @IsNotEmpty({ message: 'Description is required' })
    description: string;

    @IsEnum(TaskPriority, {
        message: 'Priority must be: high, medium or low',
    })
    priority: TaskPriority;

    @IsEnum(TaskStatus, {
        message: 'Status must be: pending, in_progress or completed',
    })
    status: TaskStatus;

    @IsDate({ message: 'Due date must be a date' })
    @IsNotEmpty({ message: 'Due date is required' })
    dueDate: Date;
}