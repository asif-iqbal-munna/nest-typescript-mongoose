/* eslint-disable prettier/prettier */
import { BaseTodoDto } from './base-todo.dto';

export class updateTodoDto extends BaseTodoDto {
    completedAt: Date;
}
