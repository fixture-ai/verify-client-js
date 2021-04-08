/** @internal */
export declare const HEADER_JSON: {
    'Content-Type': string;
};
/**
 * Session model
 */
export declare class Session {
    id: string;
    status: string;
    score: number;
    constructor(id: string, status: string, score: number);
}
export interface SessionInfo {
}
/**
 * Verify API wrapper that helps make Verify API calls.
 */
export declare class VerifyApi {
    protected _baseUrl: string;
    protected _log: boolean;
    constructor(baseUrl?: string, enableLogging?: boolean);
    /**
     * Enables or disabled logging for API calls.
     * @param enabled
     * @returns {VerifyApi}
     */
    enableLogging(enabled: boolean): VerifyApi;
    /**
     * Updates a session with personal info.
     */
    updateSessionInfo(sessionId: string, info: SessionInfo): Promise<void>;
    /**
     * Verifies a session with an otp (one time password).
     */
    verifySessionOtp(sessionId: string, otp: string): Promise<void>;
}
