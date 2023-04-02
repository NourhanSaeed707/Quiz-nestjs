import { QuestionController } from './controllers/question.controller';
import { QuizRepository } from './quiz.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './controllers/quiz.controller';
import { Module } from '@nestjs/common';
import { QuizService } from './services/quiz.service';
import { QuestionService } from './services/question.service';

@Module({
  controllers: [QuizController, QuestionController],
  imports: [TypeOrmModule.forFeature([QuizRepository])],
  providers: [QuizService, QuestionService],
})
export class QuizModule {}
