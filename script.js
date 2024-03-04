
const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const registerUsernameInput = document.getElementById('register-username');
const registerPasswordInput = document.getElementById('register-password');
const securedPage = document.getElementById('secured-page');

const users = [];

function register() {
	const username = registerUsernameInput.value;
	const password = registerPasswordInput.value;

	if (!username || !password) {
		alert('Please enter a username and password');
		return;
	}

	users.push({ username, password });

	alert('Registration successful');

	registerUsernameInput.value = '';
	registerPasswordInput.value = '';
}

function login() {
	const username = usernameInput.value;
	const password = passwordInput.value;

	if (!username || !password) {
		alert('Please enter a username and password');
		return;
	}

	const user = users.find(user => user.username === username && user.password === password);

	if (!user``code)
		alert('Invalid username or password');
		return;
	}

	alert('Login successful');

	securedPage.style.display = 'block';
	loginButton.style.display = 'none';
	registerButton.style.display = 'none';
	usernameInput.style.display = 'none';
	passwordInput.style.display = 'none';


registerButton.addEventListener('click', register);
loginButton.addEventListener('click', login);