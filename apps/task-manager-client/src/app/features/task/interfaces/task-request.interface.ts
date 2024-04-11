import { TuiDay } from "@taiga-ui/cdk";
import { TaskPriority } from "./task-priority.type";
import { TaskStatus } from "./task-status.type";

export interface TaskRequest {
  title: string;
  description: string;
  dueDate: Date | TuiDay | string;
  status: TaskStatus;
  priority: TaskPriority;
  categoryIds: number[];
}
