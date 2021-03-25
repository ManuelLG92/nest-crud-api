import { BadRequestException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  /**
   *
   */
  constructor(
    @InjectRepository(User)
    private readonly UserRepository : Repository<User>)
  {

  }
  
  async create(createUserDto: CreateUserDto) {
    const existingMail = await this.UserRepository.find({
      where:{
        email : createUserDto.email
      }
    })


    if(existingMail.length>0) throw new HttpException("Email already registred", 403)

    const userCreated  = this.UserRepository.save(createUserDto);
    return await userCreated;
  }


  async findAll(): Promise<User[]> {
     return await this.UserRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.UserRepository.findOne(id);
    
    if (!user) throw new NotFoundException("User not found")

    return user;

  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.UserRepository.findOne(id);

    if (!user) throw new NotFoundException("User not found")
     
    const mergeUserParams= Object.assign(user,updateUserDto)

    const userEdited =await this.UserRepository.save(mergeUserParams)
    return userEdited;

    //return user;
   // return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    const user = await this.UserRepository.findOne(id);

    if (!user) throw new NotFoundException("User not found")

    return this.UserRepository.remove(user);
   // return `This action removes a #${id} user`;
  }
}
