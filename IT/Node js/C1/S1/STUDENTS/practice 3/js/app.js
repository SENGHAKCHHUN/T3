function afterRequest(response) {
	// TODO create the DOM from the response data
	for (obj of response.data){
		let ul = document.createElement('ul');
		ul.style.border= '1px solid orange'
		let name = document.createElement('li');
		let mail = document.createElement('li');
		let company = document.createElement('li');
		name.textContent = obj.name;
		mail.textContent = obj.email;
		company.textContent =obj.company.name;
		ul.appendChild(name)
		ul.appendChild(mail)
		ul.appendChild(company)
		document.body.appendChild(ul)
	}

}

// Request a GET on this URL : https://jsonplaceholder.typicode.com/users
// then : callback the function afterRequest
let url =  'https://jsonplaceholder.typicode.com/users';
axios.get(url).then(afterRequest)