
import Image from "next/image";
import React, { useEffect, useState } from "react";

import type {PopulateItemProps} from "@/pages/ui/Popular/types";

import cx from './style.module.scss';

const PopulateItem: React.FC<PopulateItemProps> = ({ item, onOpenModal, backgroundColor }) => (
	
	<div className={cx('popular__card')} style={{background: backgroundColor}}>
		<Image
			alt={item.alt ?? 'defaultImageSrc'}
			className={cx('catalog__img')}
			src={item.imgSrc ?? 'defaultImageSrc'}
			width={item.imgWidth}
			height={item.imgHeight}
			onClick={onOpenModal}
			style={{ cursor: 'pointer' }}
		/>
		<div className={cx('like__container')}>
			<div className={cx('like')}>
				<Image src="/images/like.svg" alt="" width={40} height={40} />
			</div>
		</div>
		<div className={cx('popular__content')}>
			<p className={cx('popular__tag')}>{item.tag}</p>
			<p className={cx('popular__description')}>{item.description}</p>
		</div>
		<div className={cx('popular__score')}>
			<Image src="/images/score.svg" alt="" width={91} height={15} />
			<p className={cx('populate__score_label')}>{item.score}</p>
		</div>
		<p className={cx('populate__category')}>{item.category}</p>
		<div className={cx('popular__card_prices')}>
			<p className={cx('popular__card_price')}>{item.price}</p>
			<button className={cx('popular__card_button')}>
				<p>+&nbsp;add&nbsp;to&nbsp;cart</p>
			</button>
		</div>
</div>
);


export default PopulateItem
