import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateAssignmentDto, UpdateAssignmentDto } from './dto';

@Injectable()
export class AssignmentsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, createAssignmentDto: CreateAssignmentDto) {
    try {
      return await this.prisma.assignment.create({
        data: {
          ...createAssignmentDto,
          userId,
        },
      });
    } catch (error) {
      throw new BadRequestException('Failed to create assignment');
    }
  }

  async findAll(userId: string) {
    return await this.prisma.assignment.findMany({
      where: { userId },
      include: {
        course: true,
      },
      orderBy: {
        dueDate: 'asc',
      },
    });
  }

  async findOne(id: string, userId: string) {
    const assignment = await this.prisma.assignment.findUnique({
      where: { id },
      include: {
        course: true,
      },
    });

    if (!assignment || assignment.userId !== userId) {
      throw new NotFoundException('Assignment not found');
    }

    return assignment;
  }

  async update(id: string, userId: string, updateAssignmentDto: UpdateAssignmentDto) {
    const assignment = await this.findOne(id, userId);

    return await this.prisma.assignment.update({
      where: { id },
      data: updateAssignmentDto,
    });
  }

  async remove(id: string, userId: string) {
    await this.findOne(id, userId);

    return await this.prisma.assignment.delete({
      where: { id },
    });
  }

  async getUpcoming(userId: string, days: number = 7) {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + days);

    return await this.prisma.assignment.findMany({
      where: {
        userId,
        dueDate: {
          lte: futureDate,
          gte: new Date(),
        },
        status: {
          not: 'completed',
        },
      },
      include: {
        course: true,
      },
      orderBy: {
        dueDate: 'asc',
      },
      take: 5,
    });
  }
}
