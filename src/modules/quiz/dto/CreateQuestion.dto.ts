import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty({ message: 'Quiz should has a question' })
  @Length(3, 255)
  question: string;

  quizId: number;
}
