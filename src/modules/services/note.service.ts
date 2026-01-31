import { Injectable, NotFoundException } from "@nestjs/common";
import { NoteRepository } from "../repositories/note.repository";
import { Note } from "../entities/note.entity";
import { CreateNoteDto } from "../dtos/notes/create-note.dto";
import { User } from "../entities/user.entity";
import { UpdateNoteDto } from "../dtos/notes/update-note.dto";

@Injectable()
export class NoteService {
    constructor(private readonly noteRepository: NoteRepository) { }

    async create(createNoteDto: CreateNoteDto, user: User): Promise<Note> {
        return this.noteRepository.create(createNoteDto, user);
    }

    async findAll(): Promise<Note[]> {
        return this.noteRepository.findAll();
    }

    async findById(id: number): Promise<Note> {
        const note = await this.noteRepository.findById(id);
        if (!note) {
            throw new NotFoundException('Note not found');
        }
        return note;
    }

    async update(id: number, updateNoteDto: UpdateNoteDto): Promise<void> {
        await this.findById(id);
        return this.noteRepository.update(id, updateNoteDto);
    }

    async delete(id: number): Promise<void> {
        await this.findById(id);
        return this.noteRepository.delete(id);
    }
}