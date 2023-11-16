import Image from "next/image";
import React, { useState } from 'react';

import cx from "./style.module.scss";

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const images = [
		'/images/img.png',
		'/images/img.png',
		'/images/icon.svg',
		'/images/img.png',

		// ... добавьте остальные изображения, если нужно
	];

	const handlePrev = () => {
		setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
	};

	const handleNext = () => {
		setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
	};

	const handleThumbnailClick = (index: number) => {
		setCurrentSlide(index);
	};

	return (
		<div style={{ position: 'relative', paddingLeft:'81px' }}>
			<div style={{width: '511px', height: '372px', position: 'relative'  }}>
				<Image width={100} height={100} className={cx('img_hover')} src={images[currentSlide]}
						 alt="Slider Image" style={{ position: 'relative',
					width: '100%',
					height: '100%',
					objectFit:'cover',
				}} />
				<button
					onClick={handlePrev}
					style={{ position: 'absolute', top: '50%', left: '-40px', transform: 'translateY(-50%)', backgroundColor:'rgba(0,0,0,0)', cursor: 'pointer' }}
				>
					<Image
						alt="finds"
						src="/images/slider/left.svg"
						width={17}
						height={34}

					/>
				</button>
				<button
					onClick={handleNext}
					style={{ position: 'absolute', top: '50%', right: '-40px', transform: 'translateY(-50%)', backgroundColor:'rgba(0,0,0,0)', cursor: 'pointer' }}
				>
					<Image
						alt="finds"
						src="/images/slider/right.svg"
						width={17}
						height={34}
					/>
				</button>
			</div>
			<div style={{ width: '511px', height: '120px', display: 'flex', paddingTop:'30px'}}>
				{images.slice(0, 4).map((image, index) => (
					<div
						key={index}
						onClick={() => { handleThumbnailClick(index); }}
						style={{ width: '117px', height: '120px', marginRight: '17px', cursor: 'pointer',  opacity: currentSlide === index ? 1 : 0.3, }}
					>
						<Image src={image} alt="Thumbnail" width={100} height={100} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Slider;
