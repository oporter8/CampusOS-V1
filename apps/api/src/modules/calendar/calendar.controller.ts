import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Query } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CreateCalendarEventDto, UpdateCalendarEventDto } from './dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('calendar')
@UseGuards(JwtAuthGuard)
export class CalendarController {
  constructor(private calendarService: CalendarService) {}

  @Post()
  create(@Request() req, @Body() createEventDto: CreateCalendarEventDto) {
    return this.calendarService.create(req.user.id, createEventDto);
  }

  @Get()
  findAll(@Request() req) {
    return this.calendarService.findAll(req.user.id);
  }

  @Get('range')
  getEventsInRange(
    @Request() req,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.calendarService.getEventsInRange(
      req.user.id,
      new Date(startDate),
      new Date(endDate),
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.calendarService.findOne(id, req.user.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Request() req, @Body() updateEventDto: UpdateCalendarEventDto) {
    return this.calendarService.update(id, req.user.id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.calendarService.remove(id, req.user.id);
  }
}
