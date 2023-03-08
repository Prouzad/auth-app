import axios from "axios";

export const sendCodeLink = 'send_verification_code/'
export const verifyCodeLink = 'http://185.74.6.18:8181/api/agency/agent/'

const instance = axios.create({
	baseURL: 'http://185.74.6.18:8181/api/agency/agent/',
});


export const sendCode = async (body: any) => {
	console.log(body);
	const res = await instance.post('/send_verification_code/', { method: 'POST', body });
	return await res.data
}

export const verifyCode = async (body: any) => {
	const res = await instance.post('/code_verify/', { body });
	return await res.data;
}
