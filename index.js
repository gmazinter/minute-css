function VideoIjectionControl() {
	let removedImage;
	const videoSource =
		'https://apv-static.minute.ly/videos/v-50bc6db9-a73b-49b1-966838-aa07-4f3bbace5851-s29.92-37.16m.mp4';

	const createVideo = () => {
		const videoWrapper = document.createElement('div');
		videoWrapper.setAttribute('id', 'list-item-video');
		const videoElement = `
			<video muted autoplay loop>
				<source
					src=${videoSource}
					type="video/mp4"
				/>
			</video>
		`;
		videoWrapper.innerHTML = videoElement;
		return videoWrapper;
	};

	const handleMouseEnter = e => {
		const thumbContainer = e.target.querySelector('.list-item-thumb');
		removedImage = thumbContainer.removeChild(
			thumbContainer.querySelector('img')
		);
		thumbContainer.append(createVideo());
	};

	const handleMouseLeave = e => {
		const thumbContainer = e.target.querySelector('.list-item-thumb');
		thumbContainer.removeChild(
			thumbContainer.querySelector('#list-item-video')
		);
		thumbContainer.append(removedImage);
	};

	return {
		handleMouseEnter,
		handleMouseLeave,
	};
}

const videoInjectionControl = VideoIjectionControl();

document
	.querySelector('.list-item-container')
	.addEventListener('mouseenter', videoInjectionControl.handleMouseEnter);
document
	.querySelector('.list-item-container')
	.addEventListener('mouseleave', videoInjectionControl.handleMouseLeave);
