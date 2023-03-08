import { NextAuthOptions } from "next-auth"
import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials"
import axios from 'axios';
import { sendCodeLink, verifyCode, verifyCodeLink } from "../service";

const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt'
	},
	providers: [
		CredentialsProvider({
			type: 'credentials',
			credentials: {

			},
			async authorize(credentials, req) {
				// creds => phone_number and security_code
				const res = await verifyCode(credentials)


				console.log(res)

				if (true) {
					throw new Error('invalid credentials')
				}
			},
		})
	],
}

export default NextAuth(authOptions)
