// InjectionModule is my quick&dirty way to create a persistent state with vanilla-js
// there is probably a more accepted way of doing this
function InjectionModule() {
	let removedImage;

	function handleMouseEnter(e) {
		const thumbContainer = e.target.querySelector('.list-item-thumb');
		removedImage = thumbContainer.removeChild(
			thumbContainer.querySelector('img')
		);
		addVideo(
			thumbContainer,
			'https://apv-static.minute.ly/videos/v-50bc6db9-a73b-49b1-966838-aa07-4f3bbace5851-s29.92-37.16m.mp4'
		);
	}

	function handleMouseLeave(e) {
		const thumbContainer = e.target.querySelector('.list-item-thumb');
		thumbContainer.removeChild(thumbContainer.querySelector('video'));
		thumbContainer.append(removedImage);
	}

	return {
		handleMouseEnter,
		handleMouseLeave,
	};
}

const injection = InjectionModule();

const addVideo = (target, videoSource) => {
	const temp = document.getElementsByTagName('template')[0];
	const video = temp.content.getElementById('list-item-video');
	video.setAttribute('src', videoSource);
	target.append(video);
};

const removeVideo = target => {};

document
	.querySelector('.list-item-container')
	.addEventListener('mouseenter', injection.handleMouseEnter);
document
	.querySelector('.list-item-container')
	.addEventListener('mouseleave', injection.handleMouseLeave);
