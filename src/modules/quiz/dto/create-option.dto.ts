import { IsNotEmpty, Length } from 'class-validator';

export class CreateOptionDto {
  @IsNotEmpty({ message: 'Option should has a text' })
  @Length(3, 255)
  text: string;

  @IsNotEmpty({ message: 'Option should has a isCorrect value' })
  isCorrect: boolean;

  @IsNotEmpty({ message: 'Option should has a questionId' })
  questionId: number;
}
