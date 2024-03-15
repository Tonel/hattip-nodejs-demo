import { createRouter } from "@hattip/router";
import { json } from "@hattip/response";

// local array to simulate a database
let users = [
  { id: 1, email: "jane.smith@example.com", name: "Jane Smith" },
  { id: 2, email: "alice.jones@example.com", name: "Alice Jones" },
  { id: 3, email: "john.doe@example.com", name: "John Doe" },
  { id: 4, email: "bob.miller@example.com", name: "Bob Miller" },
  { id: 5, email: "sara.white@example.com", name: "Sara White" },
];

// initialize a Hattip router
const router = createRouter();

// register some endpotins...
router.get("/api/v1/greetings/hello-world", () => {
  return new json("Hello, World!");
});

router.get("/api/v1/users", () => {
  return new json({ users: users })
});

// other endpoints

// handle 404 errors
router.use(() => {
  return new json({ error: "Endpoint not found!" }, { status: 404 });
});

// transform the router into a handler and
// return it
export default router.buildHandler();
