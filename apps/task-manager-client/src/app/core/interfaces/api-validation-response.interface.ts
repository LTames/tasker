export interface ApiValidationResponse {
  message: string;
  status: number;
  instance: string;
  fieldErrors: string[];
  timestamp: string;
}
