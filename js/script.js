var href = document.getElementById('rekl-link').href;
var rekl_href ;
elem = document.querySelector('.advertiser_information')

function link(){
	let link = document.getElementById('rekl_href');
	link.textContent = href;
	elem.style.display = 'block';
}