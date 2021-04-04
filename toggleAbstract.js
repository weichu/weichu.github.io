function toggleAbstract(link, id) {
	while(link.firstChild) {
		link.removeChild(link.firstChild);
	};
	var div = document.getElementById('abstract-'+id);
	if(div.style.display == 'none') {
		div.style.display = 'block';
		link.appendChild(document.createTextNode('Hide Abstract'));
	} else {
		div.style.display = 'none';
		link.appendChild(document.createTextNode('View Abstract'));
	}
	return false;
}
