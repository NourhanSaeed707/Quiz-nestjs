import { QuestionController } from './controllers/question.controller';
import { QuizRepository } from './quiz.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './controllers/quiz.controller';
import { Module } from '@nestjs/common';
import { QuizService } from './services/quiz.service';
import { QuestionService } from './services/question.service';
import { OptionController } from './controllers/option.controller';
import { OptionService } from './services/option.service';

@Module({
  controllers: [QuizController, QuestionController, OptionController],
  imports: [TypeOrmModule.forFeature([QuizRepository])],
  providers: [QuizService, QuestionService, OptionService],
})
export class QuizModule {}
