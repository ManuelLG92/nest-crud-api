import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
   const data = await this.usersService.create(createUserDto);
   let info: string = ""
   
   data ?  info = "User created" : info = "User not created.";
   return this.response(data, info)
 
  }

  @Get()
  async findAll(){
    const data = await this.usersService.findAll();
    let info: string = "Users found"
   // data ?  info = "Users found" : info = "Users not found";
    return this.response(data, info)
    
  }

  @Get(':id')
  async findOne(@Param('id',ParseIntPipe) id: number) {
    const data = await this.usersService.findOne(id);
  //  data ?  info = "User found" : info = "User not found";
  let info: string = "User updated"
    return this.response(data, "User found")
  }

  @Patch(':id')
 async  update(@Param('id',ParseIntPipe) id: Number, @Body() updateUserDto: UpdateUserDto) {
    let info: string = "User updated"
    const data = await this.usersService.update(+id, updateUserDto);
    return  this.response(data, info)
    //return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
 async remove(@Param('id',ParseIntPipe) id: Number) {
    let info: string = "User Deleted"
    const data = await this.usersService.remove(+id);
    return  this.response(data, info)
  }

  response(data: User|User[], info: string){
   return {
    message : info,
    data : data,
  }
  }
}
