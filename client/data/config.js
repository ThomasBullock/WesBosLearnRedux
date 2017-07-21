import Raven from 'raven-js';

export const sentry_url = 'https://af95318d003e458798cac7fba6757f9c@sentry.io/154983';

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
