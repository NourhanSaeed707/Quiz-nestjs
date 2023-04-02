import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('options')
export class Option extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'quiz is unique identifier',
  })
  id: number;

  @Column({ type: 'varchar' })
  text: string;

  @Column({ type: 'boolean' })
  isCorrect: boolean;
}
