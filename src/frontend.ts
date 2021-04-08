/**
 * The frontend client is primarily for frontend/browser apps and allows you to
 * make all the API calls that can be made without an API key. Specifically, you
 * cannot make calls to create or retrieve a session with this client because
 * that must be done from a backend app where your API key can be kept secret
 * (see {@link backend.VerifyApi | backend client}).
 *
 * You can use this client for backend/Node.js apps if you only need to make
 * calls that don't require an API key.
 *
 * @module
 */

import {VerifyApi as BaseVerifyApi} from './base';

export { Session, SessionInfo } from './base';

/**
 * Frontend Verify API client for using the Verify API.
 *
 * This client is primarily for frontend/browser apps and allows you to make all
 * the API calls that can be made without an API key. Specifically, you cannot
 * make calls to create or retrieve a session with this client because that must
 * be done from a backend app where your API key can be kept secret
 * (see {@link backend.VerifyApi | backend client}).
 *
 * You can use this client for backend/Node.js apps if you only need to make
 * calls that don't require an API key.
 */
export class VerifyApi extends BaseVerifyApi {}
