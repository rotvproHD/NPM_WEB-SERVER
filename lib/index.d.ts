import ctr from "./interfaces/ctr";
import routeList from "./classes/routeList";
import rateLimitRule from "./interfaces/ratelimitRule";
import typesInterface from "./interfaces/types";
import page from "./interfaces/page";
interface startOptions {
    pages?: {
        /** When a Route is not found */ notFound?: (ctr: ctr) => Promise<void>;
        /** When an Error occurs in a Route */ reqError?: (ctr: ctr) => Promise<void>;
    };
    events?: {
        /** On Every Request */ request?: (ctr: ctr) => Promise<void>;
    };
    urls?: {
        list: () => page[];
    };
    rateLimits?: {
        /** If true Ratelimits are enabled */ enabled: boolean;
        /** The Message that gets sent when a ratelimit maxes out */ message?: any;
        /** The List of Ratelimit Rules */ list: rateLimitRule[];
        /** The RateLimit Functions */ functions: {
            set: (key: string, value: any) => Promise<any>;
            get: (key: string) => Promise<any>;
        } | Map<any, any>;
    };
    /** Where the Server should bind to */ bind?: string;
    /** If true x-forwarded-for will be shown as hostIp */ proxy?: boolean;
    /** If true all cors headers are set */ cors?: boolean;
    /** Where the Server should start at */ port?: number;
    /** The Maximum Body Size in MB */ body?: number;
}
declare const _default: {
    routeList: typeof routeList;
    types: typeof typesInterface;
    start(options: startOptions): Promise<{
        success: boolean;
        port: number;
        message: string;
    }>;
};
export = _default;
//# sourceMappingURL=index.d.ts.map