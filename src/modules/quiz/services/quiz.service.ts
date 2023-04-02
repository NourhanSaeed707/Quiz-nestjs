import { Quiz } from '../entities/quiz.entity';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';
// import { QuizRepository } from './quiz.repository';
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { QuizRepository } from '../quiz.repository';

@Injectable()
export class QuizService {
  // constructor(
  //   @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
  // ) {}
  constructor(private dataSource: DataSource) {}

  getAllQuiz() {
    return [1, 2, 3, 'from service'];
  }

  async getQuizById(ID: number): Promise<Quiz> {
    return await this.dataSource.getRepository(Quiz).findOne({
      where: {
        id: ID,
      },
    });
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    console.log('daaataa of quiz: ');
    console.log(quiz);
    return await this.dataSource.getRepository(Quiz).save(quiz);
    // return await this.quizRepository.save(quiz);
  }
}
