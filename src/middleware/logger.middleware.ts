export function logger(req, res, next) {
    console.log(`Interceptando a Request...
    Body: ${JSON.stringify(req.body)}
    Route Paramns: ${JSON.stringify(req.params)}
    Query Paramns: ${JSON.stringify(req.query)}
    `);
    next();
};

/*
Consider using the simpler functional middleware alternative any time your middleware doesn't need any dependencies.

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {      
    next();
  }
}

--------

If we want to bind middleware to every registered route at once, we can use the use() method that is supplied by the INestApplication instance:

const app = await NestFactory.create(AppModule);
app.use(logger);
await app.listen(3000);

*/