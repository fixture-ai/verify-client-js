/**
 * The backend client is suitable for backend/Node.js apps where your API key
 * can be kept secret. It allows you to make all Verify API calls, including
 * everything available in the {@link frontend.VerifyApi | frontend client}.
 *
 * @module
 */

import { Session, VerifyApi as BaseVerifyApi } from './base';
export { OtpResult, Session, SessionInfo } from './base';

/** @internal */
const HEADER_NAME_API_KEY = 'X-Api-Key';

/**
 * Backend Verify API client for using the Verify API.
 *
 * This client is suitable for backend/Node.js apps where your API key can be
 * kept secret. It allows you to make all Verify API calls, including everything
 * available in the {@link frontend.VerifyApi | frontend client}.
 */
export class VerifyApi extends BaseVerifyApi {
  protected _apiKey: string;

  /**
   * Creates a new instance of the client.
   *
   * @param apiKey Your secret api key
   * @param baseUrl Optional API url (if you're using our mock API tool,
   *        for example)
   * @param enableLogging Whether to enable logging or not
   */
  constructor(apiKey: string,
              baseUrl: string = 'https://api.fixture.ai',
              enableLogging: boolean = false) {
    super(baseUrl, enableLogging);
    if (typeof window !== 'undefined' && window.document) {
      throw new Error('The backend VerifyApi should not be run in browsers.')
    }
    if (!apiKey) {
      throw new Error('The backend VerifyApi requires an apiKey.');
    }
    this._apiKey = apiKey;
  }

  /**
   * Creates a session and returns the id.
   *
   * This uses your API key, which must be kept secret.
   *
   * @returns {Promise<string>}
   */
  createSession(): Promise<string> {
    return fetch(`${this._baseUrl}/session`, {
      method: 'POST',
      headers: {[HEADER_NAME_API_KEY]: this._apiKey}
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json().then(json => {
        this._log && console.debug(`Created session ${json.id}`);
        return json.id;
      });
    });
  }

  /**
   * Gets a session with info about the score and status.
   *
   * This uses your API key, which must be kept secret.
   *
   * @param sessionId The unique id of the session
   * @returns {Promise<Session>}
   */
  getSession(sessionId: string): Promise<Session> {
    return fetch(`${this._baseUrl}/session/${sessionId}`, {
      headers: {[HEADER_NAME_API_KEY]: this._apiKey}
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json().then(json => {
        const session = new Session(json.id, json.status, json.score);
        this._log && console.debug(`Fetched session ${session.id}`, session);
        return session;
      });
    })
  }
}
