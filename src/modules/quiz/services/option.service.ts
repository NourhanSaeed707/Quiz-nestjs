import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class OptionService {
  constructor(private dataSource: DataSource) {}
}
