import { IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateAssignmentDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @IsOptional()
  @IsString()
  priority?: string; // "low" | "medium" | "high" | "urgent"

  @IsOptional()
  @IsString()
  status?: string; // "not_started" | "in_progress" | "completed"

  @IsOptional()
  @IsString()
  courseId?: string;
}

export class UpdateAssignmentDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @IsOptional()
  @IsString()
  priority?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  courseId?: string;
}
