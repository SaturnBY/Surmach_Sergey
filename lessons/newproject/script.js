var cards = [
	{
		imgUrl: "img/niche.jpg",
		title: "Niche: Nightshade Snowboard - Women's - 2019/2020",
		correntPrice: "$ 398.93",
		oldPrice: "$ 499.00",
	},
	{
		imgUrl: "img/8.jpg",
		title: "Weston: Backwoods Snowboard - 2020/2021 sdkfjsdk",
		correntPrice: "$ 398.93",
		oldPrice: " 499.00",
	},
	{
		imgUrl: "img/7.jpg",
		title: "Niche: Nightshade Snowboard - Women's - 2019/2020",
		correntPrice: "$ 398.93",
		oldPrice: "$ 499.00",
	},
	{
		imgUrl: "img/6.jpg",
		title: "Niche: Nightshade Snowboard - Women's - 2019/2020",
		correntPrice: "$ 398.93",
		oldPrice: "$ 499.00",
	},
	{
		imgUrl: "img/5.jpg",
		title: "Niche: Nightshade Snowboard - Women's - 2019/2020",
		correntPrice: "$ 398.93",
		oldPrice: "$ 499.00",
	},
	{
		imgUrl: "img/4.jpg",
		title: "Niche: Nightshade Snowboard - Women's - 2019/2020",
		correntPrice: "$ 398.93",
		oldPrice: "$ 499.00",
	},
	{
		imgUrl: "img/3.jpg",
		title: "Niche: Nightshade Snowboard - Women's - 2019/2020",
		correntPrice: "$ 398.93",
		oldPrice: "$ 499.00",
	},
	{
		imgUrl: "img/2.jpg",
		title: "Niche: Nightshade Snowboard - Women's - 2019/2020",
		correntPrice: "$ 398.93",
		oldPrice: "$ 499.00",
	},

	{
		imgUrl: "img/trip.jpg",
		title: "Niche: Nightshade Snowboard - Women's - 2019/2020",
		correntPrice: "$ 398.93",
		oldPrice: "$ 499.00",
	},
]

var div = document.querySelector('.magazin')
var htmlStr = '';

for (var i = 0; i < cards.length; i++) {
	console.log(cards[i])
	htmlStr += `
	<div class="niche">
				<img class="${cards[i].imgUrl}" src="img/niche.jpg" alt="niche">
				<div class="${cards[i].title}"><span class="weigt">Niche:</span> Nightshade Snowboard - Women's -
					2019/2020</div>
				<div class="price">
					<span class="${cards[i].correntPrice}">$ 398.93</span>
					<span class="${cards[i].oldPrice}">$ 499.00</span>
					<img class="star" src="img/star.svg" alt="star">
				</div>
			</div>
	`

}
div.innerHTML = htmlStr