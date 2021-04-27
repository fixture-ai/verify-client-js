/**
 * The backend client is suitable for backend/Node.js apps where your API key
 * can be kept secret. It allows you to make all Verify API calls, including
 * everything available in the {@link frontend.VerifyApi | frontend client}.
 *
 * @module
 */
import { Session, VerifyApi as BaseVerifyApi } from './base';
export { OtpResult, Session, SessionInfo } from './base';
/**
 * Backend Verify API client for using the Verify API.
 *
 * This client is suitable for backend/Node.js apps where your API key can be
 * kept secret. It allows you to make all Verify API calls, including everything
 * available in the {@link frontend.VerifyApi | frontend client}.
 */
export declare class VerifyApi extends BaseVerifyApi {
    protected _apiKey: string;
    /**
     * Creates a new instance of the client.
     *
     * @param apiKey Your secret api key
     * @param baseUrl Optional API url (if you're using our mock API tool,
     *        for example)
     * @param enableLogging Whether to enable logging or not
     */
    constructor(apiKey: string, baseUrl?: string, enableLogging?: boolean);
    /**
     * Creates a session and returns the id.
     *
     * This uses your API key, which must be kept secret.
     *
     * @returns {Promise<string>}
     */
    createSession(): Promise<string>;
    /**
     * Gets a session with info about the score and status.
     *
     * This uses your API key, which must be kept secret.
     *
     * @param sessionId The unique id of the session
     * @returns {Promise<Session>}
     */
    getSession(sessionId: string): Promise<Session>;
}
