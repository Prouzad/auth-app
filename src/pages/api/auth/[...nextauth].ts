import { NextAuthOptions } from "next-auth"
import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"

const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt'
	},
	providers: [
		CredentialsProvider({
			type: 'credentials',
			credentials: {},
			authorize(credentials, req) {
				const { phone_number, security_code } = credentials as {
					phone_number: string;
					security_code: string;
				}

				if (true) {
					throw new Error('invalid credentials')
				}

			},
		})
	],

	pages: {
		signIn: '/auth/signin',
		// error: '/auth/signin',
		// signOut: '/auth/signin',
	}

}

export default NextAuth(authOptions)
