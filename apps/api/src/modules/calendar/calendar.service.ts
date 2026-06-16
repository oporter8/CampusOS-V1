import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateCalendarEventDto, UpdateCalendarEventDto } from './dto';

@Injectable()
export class CalendarService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, createEventDto: CreateCalendarEventDto) {
    try {
      return await this.prisma.calendarEvent.create({
        data: {
          ...createEventDto,
          userId,
        },
      });
    } catch (error) {
      throw new BadRequestException('Failed to create event');
    }
  }

  async findAll(userId: string) {
    return await this.prisma.calendarEvent.findMany({
      where: { userId },
      orderBy: {
        startTime: 'asc',
      },
    });
  }

  async findOne(id: string, userId: string) {
    const event = await this.prisma.calendarEvent.findUnique({
      where: { id },
    });

    if (!event || event.userId !== userId) {
      throw new NotFoundException('Event not found');
    }

    return event;
  }

  async update(id: string, userId: string, updateEventDto: UpdateCalendarEventDto) {
    await this.findOne(id, userId);

    return await this.prisma.calendarEvent.update({
      where: { id },
      data: updateEventDto,
    });
  }

  async remove(id: string, userId: string) {
    await this.findOne(id, userId);

    return await this.prisma.calendarEvent.delete({
      where: { id },
    });
  }

  async getEventsInRange(userId: string, startDate: Date, endDate: Date) {
    return await this.prisma.calendarEvent.findMany({
      where: {
        userId,
        startTime: {
          gte: startDate,
          lte: endDate,
        },
      },
      orderBy: {
        startTime: 'asc',
      },
    });
  }
}
