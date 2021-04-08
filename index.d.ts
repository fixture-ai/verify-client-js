/**
 * Session model
 */
export declare class Session {
    id: any;
    status: any;
    score: any;
    constructor(id: any, status: any, score: any);
}
/**
 * Verify API wrapper that helps make Verify API calls.
 */
export default class VerifyApi {
    baseUrl: string;
    log: boolean;
    constructor(baseUrl: any, enableLogging: any);
    /**
     * Enables or disabled logging for API calls.
     * @param enabled
     * @returns {VerifyApi}
     */
    enableLogging(enabled: any): this;
    /**
     * Creates a session and returns the id string.
     */
    createSession(): Promise<any>;
    /**
     * Updates a session with personal info.
     */
    updateSessionInfo(sessionId: any, info: any): Promise<any>;
    /**
     * Verifies a session with an otp (one time password).
     */
    verifySessionOtp(sessionId: any, otp: any): Promise<any>;
    /**
     * Gets a Session object with core info: id, status, and score.
     */
    getSession(sessionId: any): Promise<Session>;
}
/**
 * Verify API wrapper that helps make Verify API calls.
 */
export declare class SecureVerifyApi extends VerifyApi {
    private apiKey;
    constructor(apiKey: any, baseUrl: any, enableLogging: any);
    /**
     * Creates a session and returns the id string.
     */
    createSession(): Promise<any>;
    /**
     * Gets a Session object with core info: id, status, and score.
     */
    getSession(sessionId: any): Promise<Session>;
}
