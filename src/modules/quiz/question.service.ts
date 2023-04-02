import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { Question } from './question.entity';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateQuestionDto } from './dto/CreateQuestion.dto';

@Injectable()
export class QuestionService {
  constructor(private dataSource: DataSource) {}

  getAllQuiz() {
    return [1, 2, 3, 'from service'];
  }

  async createNewQuiz(
    question: CreateQuestionDto,
    quiz: CreateQuizDto,
  ): Promise<Question> {
    console.log('daaataa of quiz: ');
    console.log(question);
    return await this.dataSource.getRepository(Question).save(question);
  }
}
