let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

// check if dark mode is enabled
// if it's enabled, turn it off
// if it's disabled, turn it on

const enableDarkMode = () => {
	// 1. add the class darkmode to the body
	document.body.classList.add('darkmode');

	//2. update darmmode in the localStorage
	localStorage.setItem('darkMode','enabled');
}

const disableDarkMode = () => {
	// 1. add the class darkmode to the body
	document.body.classList.remove('darkmode');

	//2. update darmmode in the localStorage
	localStorage.setItem('darkMode', null);
};

// Important
if (darkMode === 'enabled') {
	enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
	darkMode = localStorage.getItem("darkMode");

	if (darkMode !== 'enabled') {
		enableDarkMode();
		console.log(darkMode);
	} else {
		disableDarkMode();
		console.log(darkMode);
	}
});