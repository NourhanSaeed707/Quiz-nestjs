import { QuizService } from '../quiz/quiz.service';
import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { HttpCode, UsePipes } from '@nestjs/common/decorators';
import { CreateQuizDto } from './dto/CreateQuiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}
  @Get('/')
  getAllQuiz() {
    return this.quizService.getAllQuiz();
  }

  @Post('/create')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto) {
    return await this.quizService.createNewQuiz(quizData);
  }
}
