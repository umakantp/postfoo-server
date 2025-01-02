import db from 'src/db'
import { whereId } from 'src/models/core'
import { User, UserStatus } from 'src/types'
import * as errors from 'src/utils/errors'
import * as jwt from 'src/utils/jwt'
import { canonicalMobile } from 'src/utils/utils'

export const get = (entity: string) => {
  return db.user.findUniqueOrThrow(whereId(entity))
}

export const byMobile = (mobile: string) => {
  return db.user.findUnique({ where: { mobile: canonicalMobile(mobile) } })
}

export const verifyUser = async (userId: string) => {
  await db.user.update({ where: { id: userId }, data: { isVerified: true } })
}

export const fromJwt = async (claims?: jwt.Jwt): Promise<User | undefined> => {
  // Don't accept other tokens (like Email) for authentication
  if (claims && claims.sub && claims.aud === jwt.Audience.Session) {
    try {
      const user = await get(claims.sub)
      return user
    } catch (err) {
      // Can also happen when DB is reset and the client sends a JWT for an old user
      throw errors.unauthenticated('The session token is no longer valid')
    }
  }
}

export const isSuperadmin = (user: User) => {
  return user.status === UserStatus.Superadmin
}
