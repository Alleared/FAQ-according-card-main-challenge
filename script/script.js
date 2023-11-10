

// Collapse all other Details elements
const allDetails = document.querySelectorAll("details");

allDetails.forEach((D, _, A) => {
	D.ontoggle = () => {
		if (D.open)
			A.forEach((d) => {
				if (d != D) d.open = false;
			});
	};
});

// invert arrow icon and make title bold
const summaryElement = document.querySelectorAll("summary");

summaryElement.forEach((afterRotate) => {
	afterRotate.addEventListener("click", function () {
    if (afterRotate.style.fontWeight === "") {
      // details element
      inactiveArrow();
  
      // Make arrow turn when activated
      afterRotate.style.setProperty("--AFTER-ROTATE", "rotate(180deg)");
  
      // BOLD TITLE ON
      afterRotate.style.fontWeight = "bold";
    } else {
      
      afterRotate.style.removeProperty("--AFTER-ROTATE");
  
      // BOLD TITLE OFF
      afterRotate.style.fontWeight = "";
    }
  });
});

function inactiveArrow() {
	summaryElement.forEach((beforeRotate) => {
		// Deactivates the summary and bold text from other items
		// BOLD TITLE OFF
		beforeRotate.style.fontWeight = "";

		// Make arrow turn when activated
		beforeRotate.style.removeProperty("--AFTER-ROTATE");
	});
}
