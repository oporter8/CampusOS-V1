import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../database/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async getProjects(userId: string) {
    return this.prisma.project.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async createProject(
    userId: string,
    title: string,
    description?: string,
  ) {
    return this.prisma.project.create({
      data: {
        userId,
        title,
        description,
      },
    });
  }
}
