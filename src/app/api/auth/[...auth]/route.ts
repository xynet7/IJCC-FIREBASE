import { auth } from "@/lib/auth";
import { handleAuth } from "better-auth";

const { GET, POST } = handleAuth(auth);

export { GET, POST };
