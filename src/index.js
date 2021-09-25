import { handleRequest } from "./request";

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
