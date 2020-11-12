$(function () {
	$("#calculation").click(calculations);
});

const food = [
	{ name: "White beans (1 cup)", Carbohydrates: 45, Calories: 249 },
	{ name: "Navy beans (1 cup)", Carbohydrates: 48, Calories: 259 },
	{ name: "Pinto beans (1 cup)", Carbohydrates: 44, Calories: 235 },
	{ name: "Banana (1)", Carbohydrates: 21, Calories: 105 },
	{ name: "Dates (dried)(10)", Carbohydrates: 61, Calories: 228 },
	{ name: "Grapes (1 cup)", Carbohydrates: 28, Calories: 114 },
	{ name: "Applesauce (1 cup)", Carbohydrates: 60, Calories: 232 },
	{ name: "Pineapple (1 cup)", Carbohydrates: 19, Calories: 77 },
	{ name: "Prunes (dried)(10)", Carbohydrates: 53, Calories: 201 },
	{ name: "Pudding (any flavor) (1/2 cup)", Carbohydrates: 30, Calories: 161 },
	{ name: "Chocolate milk (1 cup)", Carbohydrates: 26, Calories: 208 },
	{ name: "Strawberries (1 cup)", Carbohydrates: 11, Calories: 45 },
];

const main = $(".main");
for (let i = 0; i < food.length; i++) {
	main.append(
		`<li class="list" calories="${food[i].Calories}" carbs="${food[i].Carbohydrates}"> ${food[i].name}  <span style="display:none"> ${food[i].Carbohydrates} or  ${food[i].Calories}</span> </li>`
	);
}
function calculations() {
	let calories=0,carbs=0;
	$('.add').each(function(){
			calories+=parseInt($(this).attr('calories'));
			carbs+=parseInt($(this).attr('carbs'));		
	});
	alert('Calories = '+calories+' Carbohydrates ='+carbs)
}

var length = document.querySelectorAll(".list").length;
for (var i = 0; i < length; i++) {
	document.querySelectorAll(".list")[i].addEventListener("click", function () {
		$(this).toggleClass('add');
	});
}