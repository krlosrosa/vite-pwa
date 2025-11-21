import { type RouteConfig, index } from "@react-router/dev/routes";
import { route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("nova", "routes/nova.tsx"),
  route("welcome", "routes/welcome.tsx"),
] satisfies RouteConfig;
