import 'isomorphic-unfetch';

/** @internal */
export const HEADER_JSON = {'Content-Type': 'application/json'};

/**
 * Session model
 */
export class Session {
  /**
   * The unique id of the session
   */
  public id: string;

  /**
   * The current status of the session
   */
  public status: Status;

  /**
   * The score of the session (if status is "completed").
   *
   * This is a confidence score between 0 and 1, where 0 indicates
   * low confidence and 1 indicates high confidence. If there is no score yet,
   * this will be null.
   */
  public score?: number;

  /**
   * Creates a new session instance.
   *
   * @param id The unique id of the session
   * @param status The current status of the session
   * @param score The score of the session (if status is "completed")
   */
  constructor(id: string, status: Status, score?: number) {
    this.id = id;
    this.status = status;
    this.score = score;
  }
}

/**
 * Session info that can be updated
 */
export interface SessionInfo {
  firstName: string
  lastName: string
  companyUrl: string
  email: string
}

/**
 * Session status
 */
enum Status {
  pending = 'pending',
  processing = 'processing',
  completed = 'completed',
  failed = 'failed',
}

/**
 * Base Verify API client that helps make Verify API calls.
 */
export class VerifyApi {
  protected _baseUrl: string = 'https://api.fixture.ai';
  protected _log: boolean = false;

  /**
   * Creates a new instance of the client.
   *
   * @param baseUrl Optional API url (if you're using our mock API tool,
   *        for example)
   * @param enableLogging Whether to enable logging or not
   */
  constructor(baseUrl: string = 'https://api.fixture.ai',
              enableLogging: boolean = false) {
    this._baseUrl = baseUrl || this._baseUrl;
    this._log = !!enableLogging;
  }

  /**
   * Enables or disables logging for API calls.
   *
   * @param enabled Whether to enable or disable logging
   * @returns {VerifyApi}
   */
  enableLogging(enabled: boolean): VerifyApi {
    this._log = enabled;
    return this;
  }

  /**
   * Updates a session with a user's personal info.
   *
   * @param sessionId The unique id of the session
   * @param info The user's personal info for the session
   * @returns {Promise<void>}
   */
  updateSessionInfo(sessionId: string, info: SessionInfo): Promise<void> {
    return fetch(`${this._baseUrl}/session/${sessionId}`, {
      method: 'PUT',
      body: JSON.stringify(info),
      headers: HEADER_JSON
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      this._log && console.debug(`Updated session info ${sessionId}`, info);
    });
  }

  /**
   * Verifies a session with an otp (one-time password).
   *
   * @param sessionId The unique id of the session
   * @param otp The one-time-password that was emailed to the user
   * @returns {Promise<void>}
   */
  verifySessionOtp(sessionId: string, otp: string): Promise<void> {
    return fetch(`${this._baseUrl}/session/${sessionId}/verify`, {
      method: 'PATCH',
      body: JSON.stringify({otp}),
      headers: HEADER_JSON
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      this._log && console.debug(`Verified session ${sessionId} with otp ${otp}`);
    });
  }
}
