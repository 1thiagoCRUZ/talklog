import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Note } from "./entities/note.entity";
import { NoteRepository } from "./repositories/note.repository";
import { NoteService } from "./services/note.service";
import { NoteController } from "./controllers/note.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Note])],
    controllers: [NoteController],
    providers: [NoteRepository, NoteService],
    exports: [NoteRepository, NoteService]
})
export class NoteModule { }