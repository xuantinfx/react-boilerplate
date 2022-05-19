import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { getConfig } from '../env-config';

export const init = () => {
  Sentry.init({
    dsn: getConfig('REACT_APP_SENTRY_DSN'),
    environment: getConfig('REACT_APP_ENV'),
    integrations: [new Integrations.BrowserTracing()],
  });
};
