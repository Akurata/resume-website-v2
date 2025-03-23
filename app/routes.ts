import {type RouteConfig} from "@react-router/dev/routes";
import {flatRoutes} from "@react-router/fs-routes";

/**
 * Use Flat route convention from
 * remix v2 implementation
 */
export default flatRoutes() satisfies RouteConfig;
