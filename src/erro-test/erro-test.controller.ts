import { Controller, Get, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';

@Controller('erro-test')
export class ErroTestController {

    @Get("500")
    erro500() {
        throw new Error('Simulando erro 500');
    }  

    @Get("403")
    forbidden() {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    } 

    @Get("400")
    async badRequest() {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'This is a custom message',
      }, 400);
    } 
    
    @Get("404")
    badRequestException() {
        throw new NotFoundException();
    }

    

}
