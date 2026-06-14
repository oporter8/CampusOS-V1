import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';

@Controller('notes')
export class NotesController {
  constructor(
    private readonly notesService: NotesService,
  ) {}

  @Get()
  async getNotes() {
    return {
      message:
        'Authentication not connected yet',
    };
  }

  @Post()
  async createNote(
    @Body() body: CreateNoteDto,
  ) {
    return {
      title: body.title,
      content: body.content,
    };
  }
}
