import axios from 'axios';
import { reauthenticate } from '../store/auth/actions';
import { getCookie } from './cookie';
import redirectTo from './redirectTo';

function checkToken(ctx, auth) {
  if (!auth) {
    if (ctx.pathname !== '/login' && ctx.pathname !== '/') {
      ctx.reduxStore.dispatch(reauthenticate(null));
      redirectTo('/login', { res: ctx.res, status: 301 });
    }

    return;
  }

  if ((!auth.isAuthenticated || auth.isBlocked) && ctx.pathname !== '/login' && ctx.pathname !== '/') {
    ctx.reduxStore.dispatch(reauthenticate(null));
    redirectTo('/login', { res: ctx.res, status: 301 });
  }

  if (auth.isAuthenticated && ctx.pathname === '/login') {
    redirectTo('/', { res: ctx.res, status: 301 });
  }

  if (auth.token && auth.isAuthenticated) {
    if (!auth.passwordChanged && ctx.pathname !== '/reset-password') {
      redirectTo('/reset-password', { res: ctx.res, status: 301 });
    }

    if (!auth.isAdmin && ctx.pathname.startsWith('/admin')) {
      redirectTo('/', { res: ctx.res, status: 301 });
    }

    axios.get(`${process.env.BACKEND}/api/login`, { headers: { Authorization: `Bearer ${auth.token}` } }).then(() => {
      // Intentionally left blank
    }).catch(() => {
      ctx.reduxStore.dispatch(reauthenticate(null));
      redirectTo('/login', { res: ctx.res, status: 301 });
    });
  }
}

// checks if the page is being loaded on the server, and if so, get auth token from the cookie:
export default function (ctx) {
  if (ctx.isServer || !process.browser) {
    if (ctx.req.headers.cookie) {
      const auth = JSON.parse(decodeURIComponent(getCookie('auth', ctx.req)));

      checkToken(ctx, auth);

      ctx.reduxStore.dispatch(reauthenticate(auth));
    }
  } else {
    let { auth } = ctx.reduxStore.getState();

    if (!auth.isAuthenticated) {
      auth = JSON.parse(decodeURIComponent(getCookie('auth')));
    }

    checkToken(ctx, auth);

    ctx.reduxStore.dispatch(reauthenticate(auth));
  }
}
