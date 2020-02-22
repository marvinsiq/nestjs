import { Controller, Get, Param, Post, Body, Query, Put, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';

import { CreateCatDto } from 'src/cats/dto/create-cat.dto';
import { UpdateCatDto } from 'src/cats/dto/update-cat.dto';
import { ListAllEntities } from 'src/cats/dto/list-all-entities.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ParseIntPipe } from 'src/pipes/parse-int.pipe';
import { AuthGuard } from '@nestjs/passport';

@Controller('cats')
export class CatsController {

  constructor(private readonly catsService: CatsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    return this.catsService.create(createCatDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll(@Query() query: ListAllEntities) : Promise<Cat[]> {
    console.log(`This action returns all cats (limit: ${query.limit} items)`);
    return this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id) {
    console.log(`This action returns a #${id} cat`);
    return this.catsService.findOne(id);
  }  

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    console.log(updateCatDto);
    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}