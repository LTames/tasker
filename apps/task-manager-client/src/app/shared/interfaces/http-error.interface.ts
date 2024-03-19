import { ApiDefaultResponse } from './api-default-response.interface';
import { ApiValidationResponse } from './api-validation-response.interface';

export interface HttpError {
  error: Partial<ApiDefaultResponse & ApiValidationResponse>;
  message: string;
}
