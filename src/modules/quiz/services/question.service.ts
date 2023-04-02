import { QuizRepository } from '../quiz.repository';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { Question } from '../entities/question.entity';
import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateQuestionDto } from '../dto/create-question.dto';
import { Quiz } from '../entities/quiz.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuestionService {
  constructor(private dataSource: DataSource) {}

  // constructor(
  //   @InjectRepository(QuestionR)
  //   private quizRepository: QuizRepository,
  // ) {}

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

  async createQuestion(
    question: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const newQuestion = await this.dataSource.getRepository(Question).save({
      question: question.question,
    });
    //because quiz.questions are array so we have to keep the old one and edit it by the new one.
    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();
    return newQuestion;
  }
}
