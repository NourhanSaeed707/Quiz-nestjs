import { Quiz } from '../modules/quiz/entities/quiz.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Question } from '../modules/quiz/entities/question.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'quiz',
  // entities: [__dirname + '/modules/quiz/*.entity{.ts,.js}'],
  entities: [Quiz, Question],
  synchronize: true,
};
