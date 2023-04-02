import { QuestionService } from './../services/question.service';
import { OptionService } from './../services/option.service';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateOptionDto } from '../dto/create-option.dto';

@Controller('question/option')
export class OptionController {
  constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
  ) {}

  @Post('/')
  @UsePipes(ValidationPipe)
  async saveOptionToQuestion(@Body() createOption: CreateOptionDto) {
    return createOption;
  }
}
