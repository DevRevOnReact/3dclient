import React, {useState, useEffect} from 'react';
import Image from "next/image";
import cx from "@/pages/Account/style.module.scss";

interface UpperSliderProps {
	images: string[]; // Assuming images are URLs, adjust the type accordingly
	onSlideChange: (index: number) => void;
}

const UpperSlider: React.FC<UpperSliderProps> = ({ images, onSlideChange }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		onSlideChange(currentIndex);
	}, [currentIndex, onSlideChange]);

	const nextSlide = () => {
		const nextIndex = (currentIndex + 1) % images.length;
		setCurrentIndex(nextIndex);
	};

	const prevSlide = () => {
		const prevIndex = ((currentIndex - 1) + images.length) % images.length;
		setCurrentIndex(prevIndex);
	};

	const handleImageClick = (index: number) => {
		setCurrentIndex(index);
	};

	return (
		<div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '60px' }}>
			<div style={{ width: '511px', height: '372px', position: 'relative' }}>
				<Image
					src={images[currentIndex]}
					onClick={() => { handleImageClick(currentIndex); }} // Pass the correct index to handleImageClick
					alt="fdsfd"
					layout="fill"
					objectFit="cover"
					style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'flex', justifyContent: 'center' }}
				/>
				<button onClick={prevSlide} style={{
					position: 'absolute',
					top: '50%',
					left: '-40px',
					transform: 'translateY(-50%)',
					backgroundColor: 'rgba(0,0,0,0)',
					color: 'white',
					cursor: 'pointer'
				}}>
					<Image
						alt="fsfdsf"
						className={cx('account__image')}
						src="/images/slider/left.svg"
						width={17}
						height={34}
					/>
				</button>
				<button onClick={nextSlide} style={{
					position: 'absolute',
					top: '50%',
					right: '-40px',
					transform: 'translateY(-50%)',
					backgroundColor: 'rgba(0,0,0,0)',
					cursor: 'pointer'
				}}>
					<Image
						alt="fsfdsf"
						className={cx('account__image')}
						src="/images/slider/right.svg"
						width={17}
						height={34}
					/>
				</button>
			</div>
		</div>
	);
};

export default UpperSlider;
