import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Note } from "../entities/note.entity";
import { Repository } from "typeorm";
import { CreateNoteDto } from "../dtos/notes/create-note.dto";
import { User } from "../entities/user.entity";

@Injectable()
export class NoteRepository {
    constructor(
        @InjectRepository(Note)
        private readonly noteRepository: Repository<Note>
    ) { }

    async create(createNoteDto: CreateNoteDto, user: User): Promise<Note> {
        const note = this.noteRepository.create({
            ...createNoteDto,
            user: user,
        });
        return this.noteRepository.save(note);
    }

    async findAll(): Promise<Note[]> {
        return this.noteRepository.find();
    }

    async findById(id: number): Promise<Note | null> {
        return this.noteRepository.findOneBy({ id });
    }

    async update(id: number, updateNoteDto: Partial<Note>): Promise<void> {
        await this.noteRepository.update(id, updateNoteDto);
    }

    async delete(id: number): Promise<void> {
        await this.noteRepository.delete(id);
    }

}