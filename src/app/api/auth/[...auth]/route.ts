import { auth } from "@/lib/auth";
import { betterAuth } from "better-auth";

const { GET, POST } = betterAuth(auth);

export { GET, POST };
