import { Session, VerifyApi as BaseVerifyApi } from './base';
export { Session, SessionInfo } from './base';
/**
 * Verify API wrapper that helps make Verify API calls.
 */
export declare class VerifyApi extends BaseVerifyApi {
    protected _apiKey: string;
    constructor(apiKey: string, baseUrl?: string, enableLogging?: boolean);
    /**
     * Creates a session and returns the id string.
     */
    createSession(): Promise<string>;
    /**
     * Gets a Session object with core info: id, status, and score.
     */
    getSession(sessionId: string): Promise<Session>;
}
