function decodeEmailFnc(encodeEmail)
{
	var email = encodeEmail;
	if (email.indexOf("~") > -1)
		email = email.replace(/~/gi, '@');
	if(email.indexOf("!") > -1)
		email = email.replace(/!/gi, '.');

	// otocka
	var newEmail = [email.length];
	for (i = 0; i < email.length; i++) {
		newEmail[i] = email.charAt(email.length - i - 1);
	}
	email = newEmail.join("");
	return email;
}

function decodeEmail(encodeEmail) {
	window.location.href="mailto:"+decodeEmailFnc(encodeEmail);
}

function writeEmailToPage(encodeEmail) {
	document.write(decodeEmailFnc(encodeEmail));
}
