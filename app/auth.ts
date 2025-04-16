import NextAuth from "next-auth"
import type { NextAuthConfig } from "next-auth"
import type { JWT } from "next-auth/jwt"
import Credentials from "next-auth/providers/credentials"

export const config = {
  providers: [
    Credentials({
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null
          }

          const response = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          })

          const data = await response.json()

          if (!response.ok) {
            return null
          }

          return data.user
        } catch (error) {
          console.error("Auth error:", error)
          return null
        }
      }
    })
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: '/login'
  },
  callbacks: {
    jwt({ token, user }: { token: JWT; user: any }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
      }
      return token
    },
    session({ session, token }: { session: any; token: JWT }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.email = token.email as string
        session.user.name = token.name as string
      }
      return session
    }
  }
} satisfies NextAuthConfig

export const { auth: middleware, signIn, signOut } = NextAuth(config)

// We can export auth if we want to use it in API routes
export const auth = NextAuth(config)
