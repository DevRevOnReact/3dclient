import Image from "next/image";
import React from "react";

import cx from "@/pages/Catalogs/style.module.scss";
import type {CatalogItemProps} from "@/pages/Catalogs/types";

const CatalogItem: React.FC<CatalogItemProps> = ({ item }) => (
	<div className={cx('container')}>
		<Image
			src={item.imageSrc ?? 'defaultImageSrc'}
			alt={item.imageAlt ?? 'defaultImageSrc'}
			width={item.imageWidth}
			height={item.imageHeight}
		/>
		<div className={cx('overlay')}>
			<p>{item.overlayText}</p>
		</div>
	</div>
);

export default CatalogItem;
