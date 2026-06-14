import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class NotesService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async getNotes(userId: string) {
    return this.prisma.note.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async createNote(
    userId: string,
    title: string,
    content: string,
  ) {
    return this.prisma.note.create({
      data: {
        userId,
        title,
        content,
      },
    });
  }
}
