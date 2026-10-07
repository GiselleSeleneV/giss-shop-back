import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsIn,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserAdminDto {
  @ApiProperty({ example: 'admin@giss.com' })
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Abc123' })
  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'The password must have a Uppercase, lowercase letter and a number',
  })
  password: string;

  @ApiProperty({ example: 'Ana Pérez' })
  @IsString()
  @MinLength(1)
  fullName: string;

  @ApiProperty({
    example: ['admin'],
    enum: ['admin', 'super-user', 'user'],
    isArray: true,
  })
  @IsArray()
  @IsString({ each: true })
  @IsIn(['admin', 'super-user', 'user'], { each: true })
  roles: string[];

  @ApiProperty({ example: true, required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
