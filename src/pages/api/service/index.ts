const link = 'http://185.74.6.18:8181/api/agency/agent/send_verification_code/'
const link2 = 'http://185.74.6.18:8181/api/agency/agent/code_verify/'

export const sendCode = async (body: any) => {
	console.log(body);
	const res = await fetch(link, { method: 'POST', body });
	return await res.json();
}

export const verifyCode = async (body: any) => {
	const res = await fetch(link2, { method: 'POST', body });
	return await res.json();
}
