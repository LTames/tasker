import { CategoryResponse } from '../../category/interfaces/category-response.interface';
import { UserResponse } from '../../user/interfaces/user-response.interface';
import { TaskPriority } from '../enums/task-priority.enum';
import { TaskStatus } from '../enums/task-status.enum';
import { CommentResponse } from './comment-response.interface';

export interface TaskResponse {
  id: number;
  description: string;
  title: string;
  dueDate: string;
  status: TaskStatus;
  priority: TaskPriority;
  categories: CategoryResponse[];
  comments: CommentResponse[];
  author: UserResponse;
}
