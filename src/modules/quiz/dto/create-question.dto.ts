import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty({ message: 'Question should has a question' })
  @Length(3, 255)
  question: string;

  @IsNotEmpty({ message: 'Question should has quizId' })
  quizId: number;
}
