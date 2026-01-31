import { Injectable, ConflictException } from "@nestjs/common";
import { UserRepository } from "../repositories/user.repository";
import { User } from "../entities/user.entity";
import { CreateUserDto } from "../dtos/users/create-user.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) { }
    async create(createUserDto: CreateUserDto): Promise<User> {
        const userExists = await this.userRepository.findByEmail(createUserDto.email);
        if (userExists) {
            throw new Error('User already exists');
        }
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(createUserDto.password, salt);

        const user = {
            ...createUserDto,
            password: passwordHash,
        };
        return this.userRepository.create(user);
    }

    async findAll(): Promise<User[]> {
        return this.userRepository.findAll();
    }

    async findById(id: number): Promise<User> {
        const user = await this.userRepository.findById(id);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }

    async update(id: number, updateUserDto: Partial<User>): Promise<void> {
        const user = await this.findById(id);
        if (updateUserDto.email && updateUserDto.email !== user.email) {
            const emailExists = await this.userRepository.findByEmail(updateUserDto.email);
            if (emailExists) {
                throw new ConflictException('Email already exists');
            }
        }

        if (updateUserDto.password) {
            const salt = await bcrypt.genSalt();
            const passwordHash = await bcrypt.hash(updateUserDto.password, salt);
            updateUserDto.password = passwordHash;
        }
        return this.userRepository.update(id, updateUserDto);
    }

    async delete(id: number): Promise<void> {
        await this.findById(id);
        return this.userRepository.delete(id);
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.userRepository.findByEmail(email);
    }
}