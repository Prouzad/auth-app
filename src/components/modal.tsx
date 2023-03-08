import { sendCode, verifyCode } from '@/pages/api/service';
import { signIn } from 'next-auth/react';
import { FormEventHandler, useState } from 'react';

const ModalAuth = () => {
	const [phoneNumber, setPhoneNumber] = useState<number>();
	const [verificationCode, setVerificationCode] = useState<number>();
	const [showCodeVerificationInput, setShowCodeVerificationInput] =
		useState<boolean>(false);

	const handleSubmit = (e: any) => {
		// showCodeVerificationInput
		// ? sendCode(phoneNumber)
		// : signIn({phone_number: phoneNumber})
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='number'
				value={phoneNumber}
				disabled={showCodeVerificationInput}
			/>
			{showCodeVerificationInput && (
				<input type='text' value={verificationCode} />
			)}
			<input type='submit' value={'login'} />
		</form>
	);
};

export default ModalAuth;
