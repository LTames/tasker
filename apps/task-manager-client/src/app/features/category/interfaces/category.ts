export type CategoryOperationStatus =
  | "PENDING"
  | "LOADING"
  | "DELETING"
  | "CREATING"
  | "UPDATING"
  | "SUCCESS"
  | "ERROR";

export interface Category {
  id: number;
  name: string;
  color: string;
}

export interface CreateCategory {
  name: string;
  color: string;
}

export interface UpdateCategory {
  categoryId: number;
  category: CreateCategory;
}
