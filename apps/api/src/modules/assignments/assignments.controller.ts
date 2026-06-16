import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request, Query } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { CreateAssignmentDto, UpdateAssignmentDto } from './dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('assignments')
@UseGuards(JwtAuthGuard)
export class AssignmentsController {
  constructor(private assignmentsService: AssignmentsService) {}

  @Post()
  create(@Request() req, @Body() createAssignmentDto: CreateAssignmentDto) {
    return this.assignmentsService.create(req.user.id, createAssignmentDto);
  }

  @Get()
  findAll(@Request() req) {
    return this.assignmentsService.findAll(req.user.id);
  }

  @Get('upcoming')
  getUpcoming(@Request() req, @Query('days') days: string = '7') {
    return this.assignmentsService.getUpcoming(req.user.id, parseInt(days));
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.assignmentsService.findOne(id, req.user.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Request() req, @Body() updateAssignmentDto: UpdateAssignmentDto) {
    return this.assignmentsService.update(id, req.user.id, updateAssignmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.assignmentsService.remove(id, req.user.id);
  }
}
