import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateCourseDto, UpdateCourseDto } from './dto';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, createCourseDto: CreateCourseDto) {
    try {
      return await this.prisma.course.create({
        data: {
          ...createCourseDto,
          userId,
        },
      });
    } catch (error) {
      throw new BadRequestException('Failed to create course');
    }
  }

  async findAll(userId: string) {
    return await this.prisma.course.findMany({
      where: { userId },
      include: {
        assignments: true,
      },
    });
  }

  async findOne(id: string, userId: string) {
    const course = await this.prisma.course.findUnique({
      where: { id },
      include: {
        assignments: true,
      },
    });

    if (!course || course.userId !== userId) {
      throw new NotFoundException('Course not found');
    }

    return course;
  }

  async update(id: string, userId: string, updateCourseDto: UpdateCourseDto) {
    const course = await this.findOne(id, userId);

    return await this.prisma.course.update({
      where: { id },
      data: updateCourseDto,
    });
  }

  async remove(id: string, userId: string) {
    await this.findOne(id, userId);

    return await this.prisma.course.delete({
      where: { id },
    });
  }
}
