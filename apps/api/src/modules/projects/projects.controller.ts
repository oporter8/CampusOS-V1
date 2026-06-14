import {
  Body,
  Controller,
  Get,
  Post,
} from '@nestjs/common';

import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller('projects')
export class ProjectsController {
  constructor(
    private readonly projectsService: ProjectsService,
  ) {}

  @Get()
  async getProjects() {
    return {
      message:
        'Authentication not connected yet',
    };
  }

  @Post()
  async createProject(
    @Body() body: CreateProjectDto,
  ) {
    return {
      title: body.title,
      description: body.description,
    };
  }
}
