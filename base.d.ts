import 'isomorphic-unfetch';
/** @internal */
export declare const HEADER_JSON: {
    'Content-Type': string;
};
/**
 * Session model
 */
export declare class Session {
    /**
     * The unique id of the session
     */
    id: string;
    /**
     * The current status of the session
     */
    status: Status;
    /**
     * The score of the session (if status is "completed").
     *
     * This is a confidence score between 0 and 1, where 0 indicates
     * low confidence and 1 indicates high confidence. If there is no score yet,
     * this will be null.
     */
    score?: number;
    /**
     * Creates a new session instance.
     *
     * @param id The unique id of the session
     * @param status The current status of the session
     * @param score The score of the session (if status is "completed")
     */
    constructor(id: string, status: Status, score?: number);
}
/**
 * Session info that can be updated
 */
export interface SessionInfo {
    firstName: string;
    lastName: string;
    companyUrl: string;
    email: string;
}
/**
 * Session status
 */
declare enum Status {
    pending = "pending",
    processing = "processing",
    completed = "completed",
    failed = "failed"
}
/**
 * Base Verify API client that helps make Verify API calls.
 */
export declare class VerifyApi {
    protected _baseUrl: string;
    protected _log: boolean;
    /**
     * Creates a new instance of the client.
     *
     * @param baseUrl Optional API url (if you're using our mock API tool,
     *        for example)
     * @param enableLogging Whether to enable logging or not
     */
    constructor(baseUrl?: string, enableLogging?: boolean);
    /**
     * Enables or disables logging for API calls.
     *
     * @param enabled Whether to enable or disable logging
     * @returns {VerifyApi}
     */
    enableLogging(enabled: boolean): VerifyApi;
    /**
     * Updates a session with a user's personal info.
     *
     * @param sessionId The unique id of the session
     * @param info The user's personal info for the session
     * @returns {Promise<void>}
     */
    updateSessionInfo(sessionId: string, info: SessionInfo): Promise<void>;
    /**
     * Verifies a session with an otp (one-time password).
     *
     * @param sessionId The unique id of the session
     * @param otp The one-time-password that was emailed to the user
     * @returns {Promise<void>}
     */
    verifySessionOtp(sessionId: string, otp: string): Promise<void>;
}
export {};
