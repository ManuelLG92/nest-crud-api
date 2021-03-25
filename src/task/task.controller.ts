import { Controller, Get, Param } from '@nestjs/common';

@Controller('task')
export class TaskController {

    @Get()
    getTasks(): string{
        return "ok";
    }

    @Get(':id')
    getTask(@Param('id')id: Number){
        return id;
    }
}
