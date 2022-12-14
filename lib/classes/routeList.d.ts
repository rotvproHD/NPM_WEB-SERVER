import typesInterface from "../interfaces/types";
import page from "../interfaces/page";
import ctr from "../interfaces/ctr";
interface staticOptions {
    /** If true then files will be loaded into RAM */ preload?: boolean;
    /** If true then .html will be removed automatically */ remHTML?: boolean;
    /** If true then some Content Types will be added automatically */ addTypes?: boolean;
}
export default class routeList {
    urls: page[];
    /** List of Routes */
    constructor(
    /** Routes to Import */ routes?: page[]);
    /** Set A Route Manually */
    set(
    /** The Request Type */ type: typesInterface, 
    /** The Path on which this will be available */ path: string, 
    /** The Async Code to run on a Request */ code: (ctr: ctr) => Promise<void>): void;
    /** Serve Static Files */
    static(
    /** The Path to serve the Files on */ path: string, 
    /** The Location of the Folder to load from */ folder: string, 
    /** Additional Options */ options?: staticOptions): void;
    /** Load External Function Files */
    load(
    /** The Location of the Folder to load from */ folder: string): void;
    /** Internal Function */
    list(): page[];
}
export {};
//# sourceMappingURL=routeList.d.ts.map