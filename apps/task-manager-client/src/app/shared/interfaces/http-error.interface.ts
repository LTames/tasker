import { ApiDefaultResponse } from '../../core/interfaces/api-default-response.interface';
import { ApiValidationResponse } from '../../core/interfaces/api-validation-response.interface';

export interface HttpError {
  error: Partial<ApiDefaultResponse & ApiValidationResponse>;
  message: string;
}
