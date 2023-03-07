import { NextPage } from 'next';
import { FormEventHandler, useState } from 'react';
import { signIn } from 'next-auth/react';
import { sendCode, verifyCode } from '../api/service/index';
import axios from 'axios';

const signin: NextPage = (props): JSX.Element => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [userInfo, setUserInfo] = useState({
		phone_number: '',
		security_code: '',
	});
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [status, setStatus] = useState({
		phone_number: null,
	});
	const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
		e.preventDefault();
		const res = await signIn('credentials', {
			phone_number: userInfo.phone_number,
			security_code: userInfo.security_code,
			redirect: false,
		});

		console.log(res);
	};
	return (
		<div>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					setStatus(
						await axios.post(
							'http://185.74.6.18:8181/api/agency/agent/send_verification_code/',
							{ phone_number: userInfo.phone_number }
						)
					);
				}}
			>
				<input
					type='text'
					placeholder='+998777777777'
					value={userInfo.phone_number}
					onChange={({ target }) => {
						setUserInfo({ ...userInfo, phone_number: target.value });
					}}
				/>
				<button type='submit'> login </button>
			</form>

			<form
				onSubmit={async (e) => {
					e.preventDefault();
					setStatus(
						await axios.post(
							'http://185.74.6.18:8181/api/agency/agent/code_verify/',
							{
								phone_number: userInfo.phone_number,
								security_code: userInfo.security_code,
							}
						)
					);
				}}
			>
				<input
					type='text'
					placeholder='code...'
					value={userInfo.security_code}
					onChange={({ target }) => {
						setUserInfo({ ...userInfo, security_code: target.value });
					}}
				/>
				<button type='submit'> verify </button>
			</form>
		</div>
	);
};

export default signin;
