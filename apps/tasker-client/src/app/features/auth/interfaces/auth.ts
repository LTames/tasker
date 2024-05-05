export type LoginStatus = "PENDING" | "AUTHENTICATING" | "SUCCESS" | "ERROR";

export type RegisterStatus = "PENDING" | "CREATING" | "SUCCESS" | "ERROR";

export interface AuthResponse {
  token: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
}
