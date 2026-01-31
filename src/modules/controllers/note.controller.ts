import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { NoteService } from "../services/note.service";
import { AuthGuard } from "@nestjs/passport";
import { CreateNoteDto } from "../dtos/notes/create-note.dto";
import { UpdateNoteDto } from "../dtos/notes/update-note.dto";

@Controller('notes')
export class NoteController {
    constructor(private readonly noteService: NoteService) { }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    create(@Body() createNoteDto: CreateNoteDto, @Req() req) {
        return this.noteService.create(createNoteDto, req.user);
    }

    @Get()
    findAll() {
        return this.noteService.findAll();
    }

    @Get(':id')
    @UseGuards(AuthGuard('jwt'))
    findById(@Param('id', ParseIntPipe) id: number) {
        return this.noteService.findById(id);
    }

    @Patch(':id')
    @UseGuards(AuthGuard('jwt'))
    update(@Param('id', ParseIntPipe) id: number, @Body() updateNoteDto: UpdateNoteDto, @Req() req) {
        return this.noteService.update(id, updateNoteDto);
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    delete(@Param('id', ParseIntPipe) id: number, @Req() req) {
        return this.noteService.delete(id);
    }
}