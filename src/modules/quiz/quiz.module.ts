import { QuestionController } from './question.controller';
import { QuizRepository } from './quiz.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './quiz.controller';
import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuestionService } from './question.service';

@Module({
  controllers: [QuizController, QuestionController],
  imports: [TypeOrmModule.forFeature([QuizRepository])],
  providers: [QuizService, QuestionService],
})
export class QuizModule {}
