import { NextPage } from 'next';
import { useSession } from 'next-auth/react';

const Protected: NextPage = (): JSX.Element => {
	const session = useSession();
	console.log(session);
	return <div>This page is Protected for special people.</div>;
};

export default Protected;

