import { CanActivateFn } from '@angular/router';
import { environment } from '../../../environments/environment';

export const canActivateChatGuard: CanActivateFn = (route, state) => {
  return Boolean(environment.aiEnableChat);
};
