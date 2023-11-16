import React from 'react';
import Image from "next/image";

interface LowerSliderProps {
	images: string[]; // Assuming images are URLs, adjust the type accordingly
	upperSliderIndex: number;
}

const LowerSlider: React.FC<LowerSliderProps> = ({ images, upperSliderIndex }) => {
	const displayedImages = images.slice(0, 4);

	return (
		<div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: '60px', paddingTop: '30px' }}>
			<div style={{ width: '511px', height: '120px' }}>
				<div style={{ display: 'flex' }}>
					{displayedImages.map((image, index) => (
						<Image
							width={100}
							height={100}
							key={index}
							src={image}
							alt="fsfds"
							style={{
								width: '117.419px',
								height: '120.968px',
								marginRight: index === displayedImages.length - 1 ? '13px' : 0,
								opacity: upperSliderIndex === index ? 1 : 0.5,
								transition: 'opacity 0.3s ease',
								cursor: 'pointer'
							}}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default LowerSlider;
