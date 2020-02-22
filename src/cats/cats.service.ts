import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
    
  private cont = 1;
  private readonly cats: Cat[] = [];

  constructor() {
    this.cats.push({
      "name" : "Bixano",
      "age": 4,
      "breed": "breed"
    } as Cat);
  }

  create(createCatDto: CreateCatDto): Promise<Cat> {
    return new Promise((resolve, reject) => {

      const cat: Cat = {} as Cat; // Object.assign(createCatDto);      
      cat.id = this.cont ++;
      cat.date = new Date();
      cat.name = createCatDto.name;
      cat.age = createCatDto.age;
      cat.breed = createCatDto.breed;

      this.cats.push(cat);
      resolve(cat);
    });
  }

  findAll(): Promise<Cat[]> {
    return new Promise((resolve, reject) => {        
        resolve(this.cats);
    });
  }

  findOne(id: number): Promise<Cat> {
    return new Promise((resolve, reject) => {        
        
        const find: Cat = this.cats.find(cat => {
          return cat.id == id;
        });

        resolve(find);
    });
  }  
}
