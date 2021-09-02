import md5 from 'md5';

export function md5Password (username: any, password: any) {
	var prekey = md5('DonT,H4Ck._ThIs');
	var enc_username = md5(username);
	var enc_password = md5(password);
	var subkey = md5('Why-Y0u-Do-Th4t');
	var itransport = md5('ITransport-API');
	
	let newPassword = md5(itransport+prekey+enc_username+enc_password+subkey+username+enc_password+subkey);
	return newPassword;
}