//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
	// console.log(question);
	const btn = question.querySelector(".question-btn");
	// console.log(btn);
	btn.addEventListener("click", function () {
		questions.forEach(function (item) {
			if (item !== question) {
				item.classList.remove("show-text");
			}
		});

		question.classList.toggle("show-text");
	});
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");
// const question = document.querySelector(".question");

// btns.forEach((button) => {
// 	button.addEventListener("click", function (e) {
// 		const question = e.currentTarget.parentElement.parentElement;
// 		question.classList.toggle("show-text");
// 	});
// });
