const bellToggle = document.getElementById('bellToggle');
const bellModal = document.querySelector('.bell-modal');
const pModal = document.querySelector('.profile-modal');
const pToggle = document.getElementById('profileToggle');

bellToggle.addEventListener('click', () => {
	// Close profile modal if it's open
	if (pModal.style.display === 'block') {
		pModal.style.display = 'none';
	}

	// Toggle bell modal
	bellModal.style.display =
		bellModal.style.display === 'none' ? 'block' : 'none';
});

pToggle.addEventListener('click', () => {
	// Close bell modal if it's open
	if (bellModal.style.display === 'block') {
		bellModal.style.display = 'none';
	}

	// Toggle profile modal
	pModal.style.display = pModal.style.display === 'none' ? 'block' : 'none';
});

document.addEventListener('DOMContentLoaded', function () {
	// Get the toggle button, content, open icon, and close icon
	var toggleButton = document.getElementById('toggleButton');
	var content = document.querySelector('.content');
	var openIcon = toggleButton.querySelector('.open-icon');
	var closeIcon = toggleButton.querySelector('.close-icon');

	// Set initial visibility of icons based on the initial state of the content
	if (content.classList.contains('content-visible')) {
		openIcon.style.display = 'none';
		closeIcon.style.display = 'block';
	} else {
		openIcon.style.display = 'block';
		closeIcon.style.display = 'none';
	}

	// Add a click event listener to the toggle button
	toggleButton.addEventListener('click', function () {
		// Toggle the visibility of the content
		content.classList.toggle('content-visible');

		// Toggle the icons
		if (content.classList.contains('content-visible')) {
			openIcon.style.display = 'none';
			closeIcon.style.display = 'block';
		} else {
			openIcon.style.display = 'block';
			closeIcon.style.display = 'none';
		}
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const accordionHeaders = document.querySelectorAll('.accordion-header');

	accordionHeaders.forEach((header) => {
		header.addEventListener('click', function () {
			// Toggle the display of the content when a header is clicked
			const content = this.nextElementSibling;
			content.style.display =
				content.style.display === 'block' ? 'none' : 'block';

			// Toggle the open class for the header
			this.classList.toggle('open');

			// Close other sections
			const otherContents = document.querySelectorAll('.accordion-content');
			otherContents.forEach((otherContent) => {
				if (otherContent !== content) {
					otherContent.style.display = 'none';
				}
			});

			// Close other headers
			const otherHeaders = document.querySelectorAll('.accordion-header');
			otherHeaders.forEach((otherHeader) => {
				if (otherHeader !== this) {
					otherHeader.classList.remove('open');
				}
			});
		});
	});
});

var intervalIds = {};

function updateText(buttonId, buttonText) {
	// Stop the transition if already in progress
	clearInterval(intervalIds[buttonId]);
	intervalIds[buttonId] = null;

	// Update the button text
	var button = document.getElementById(buttonId);
	button.innerHTML = buttonText;
}

function transitionText(button) {
	var words = [
		`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#D9D9D9" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/></svg>`,

		// SVG icon 2
		`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

		// SVG icon 3
		`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9996 2C13.9774 2 15.9108 2.58649 17.5553 3.6853C19.1998 4.78412 20.4816 6.3459 21.2384 8.17316C21.9953 10.0004 22.1933 12.0111 21.8075 13.9509C21.4216 15.8907 20.4692 17.6725 19.0707 19.0711C17.6722 20.4696 15.8903 21.422 13.9505 21.8079C12.0107 22.1937 10.0001 21.9957 8.1728 21.2388C6.34554 20.4819 4.78375 19.2002 3.68494 17.5557C2.58612 15.9112 1.99963 13.9778 1.99963 12" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,

		// SVG icon 4
		`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse opacity="0.6" cx="7.00008" cy="7.00004" rx="7.00008" ry="7.00004" transform="matrix(0.526082 -0.850434 0.850437 0.526077 0.364136 12.2701)" fill="#1C181D" stroke="#1C181D" stroke-width="1.45835" stroke-linecap="round" stroke-linejoin="round"/>
<g opacity="0.6">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.77574 5.89535C10.0109 5.83993 10.2465 5.98566 10.3019 6.22085L11.5318 11.4402C11.5872 11.6754 11.4415 11.9109 11.2063 11.9663L8.59662 12.5813C8.36143 12.6367 8.12585 12.491 8.07043 12.2558C8.01501 12.0206 8.16074 11.785 8.39593 11.7296L10.5798 11.215L9.45024 6.42154C9.39483 6.18635 9.54056 5.95077 9.77574 5.89535Z" fill="white"/>
</g>
</svg>`,

		// SVG icon 5
		`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11.9996" cy="12" r="10" fill="#1C181D" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.8163 8.64149C17.0604 8.88557 17.0604 9.2813 16.8163 9.52538L11.3997 14.942C11.1556 15.1861 10.7599 15.1861 10.5158 14.942L7.80745 12.2337C7.56337 11.9896 7.56337 11.5939 7.80745 11.3498C8.05153 11.1057 8.44725 11.1057 8.69133 11.3498L10.9577 13.6162L15.9324 8.64149C16.1765 8.39742 16.5723 8.39742 16.8163 8.64149Z" fill="white"/>
</svg>
`,
		// SVG icon 6
		`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11.9996" cy="12" r="10" fill="#1C181D" stroke="#1C181D" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.8162 8.64149C17.0603 8.88557 17.0603 9.2813 16.8162 9.52538L11.3995 14.942C11.1555 15.1861 10.7597 15.1861 10.5157 14.942L7.80733 12.2337C7.56325 11.9896 7.56325 11.5939 7.80733 11.3498C8.0514 11.1057 8.44713 11.1057 8.69121 11.3498L10.9576 13.6162L15.9323 8.64149C16.1764 8.39742 16.5721 8.39742 16.8162 8.64149Z" fill="white"/>
</svg>

`,
	];
	var index = 0;

	function updateText() {
		button.innerHTML = words[index];
		index = (index + 1) % words.length;

		// Check if it's the last word and stop the transition
		if (index === words.length - 1) {
			clearInterval(intervalIds[button.id]);
		}
	}

	intervalIds[button.id] = setInterval(updateText, 100);
}

// Define constants for better readability
const totalSteps = 5;
const progressElement = document.querySelector('.com .bar-move');
const countElement = document.querySelector('.com p');

// Initialize count value
let countValue = 0;

document.querySelectorAll('.icon-container').forEach(function (button) {
	button.addEventListener('click', function () {
		// console.log('Clicked button id:', button.id);

		// Toggle between 'Close' and the transitioned text
		if (intervalIds[button.id]) {
			// Stop the transition if already in progress
			clearInterval(intervalIds[button.id]);
			intervalIds[button.id] = null;
			button.innerHTML = generateIconHTML();
			// Update the count and progress bar for the second click
			updateCountAndProgressBar(-1);
		} else {
			// Start the transition animation
			transitionText(button);
			// Update the count and progress bar in .com
			updateCountAndProgressBar();
		}
	});
});

function generateIconHTML() {
	return `<div>
				<div class="icon-default">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 5" />
					</svg>
				</div>
				<!-- show on hover -->
				<!-- Second icon (shown on hover) -->
				<div class="icon-hover">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<circle cx="12" cy="12" r="10" stroke="#8A8A8A" stroke-width="2.08333" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</div>
			</div>`;
}

function updateCountAndProgressBar(valueChange = 1) {
	// Update the count
	countValue = Math.max(0, Math.min(totalSteps, countValue + valueChange));
	countElement.textContent = `${countValue} / ${totalSteps} completed`;

	// Update the progress bar
	const progressWidth = (countValue / totalSteps) * 100;
	progressElement.style.width = `${progressWidth}%`;
}
