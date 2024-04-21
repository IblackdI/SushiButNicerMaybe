function menuChange(id) {
	//array of buttons
	const buttons = document.getElementsByTagName('button');
	//button clicked
	const activeButton = document.getElementById(id);
	//array of menu sections
	const cards = document.getElementsByClassName('cards');
	//menu section that shoud be visible
	const activeCard = document.getElementsByClassName(id);
	//showing menu section and an active button
	activeCard[0].style.display = 'grid';
	activeButton.style.backgroundImage = 'url(button.png)';
	activeButton.style.backgroundSize = '100% 100%';
	//hiding everything else
	for (const card of cards) {
		if (card !== activeCard[0]) {
			card.style.display = 'none';
		}
	}
	for (const button of buttons) {
		if (button !== activeButton) {
			button.style.backgroundImage = 'none';
		}
	}
}
