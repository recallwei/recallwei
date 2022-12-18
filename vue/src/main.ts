import { ViteSSG } from "vite-ssg"
import routes from "virtual:generated-pages"

import App from "./App.vue"

import "./assets/main.css"

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {}
)
