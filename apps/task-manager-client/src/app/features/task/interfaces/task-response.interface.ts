import { CategoryResponse } from "../../category/interfaces/category-response.interface";
import { UserResponse } from "../../user/interfaces/user-response.interface";
import { CommentResponse } from "./comment-response.interface";
import { TaskPriority } from "./task-priority.type";
import { TaskStatus } from "./task-status.type";

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
