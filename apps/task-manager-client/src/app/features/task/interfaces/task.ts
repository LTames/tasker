import { TuiDay } from "@taiga-ui/cdk";
import { CommentResponse } from "./comment";
import { Category } from "../../category/interfaces/category";
import { User } from "../../user/interfaces/user";

export type TaskPriority = "LOW" | "MEDIUM" | "HIGH";

export type TaskStatus = "PENDING" | "IN_PROGRESS" | "DONE";

export type TaskOperationStatus =
  | "PENDING"
  | "LOADING"
  | "DELETING"
  | "CREATING"
  | "UPDATING"
  | "SUCCESS"
  | "ERROR";

export interface Task {
  id: number;
  description: string;
  title: string;
  dueDate: string;
  status: TaskStatus;
  priority: TaskPriority;
  categories: Category[];
  comments: CommentResponse[];
  author: User;
}

export interface CreateTask {
  title: string;
  description: string;
  dueDate: Date | TuiDay | string;
  status: TaskStatus;
  priority: TaskPriority;
  categoryIds: number[];
}

export interface UpdateTask {
  task: CreateTask;
  taskId: number;
}

export interface UpdateTaskStatus {
  status: TaskStatus;
  taskId: number;
}
