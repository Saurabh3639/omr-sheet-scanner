import { getServerSession } from "next-auth"
import { config as authOptions } from "@/app/auth"

export function getSession() {
  return getServerSession(authOptions)
}
