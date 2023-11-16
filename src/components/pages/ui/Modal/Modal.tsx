import Image from "next/image";
import React from "react";

import Slider from "@/pages/ui/Double";

import cx from './style.module.scss'

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	productData:any[] | string;
	displayIndex: number | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, productData, displayIndex }) => {
	if (!isOpen || displayIndex === null || typeof productData === "string") {
		return null;
	}

	const productToDisplay = productData[displayIndex];

	return (
		<div className={cx('modal')}>
			<button className={cx('closeButton')} onClick={onClose}>
				<svg
					width="148"
					height="148"
					viewBox="0 0 148 148"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g filter="url(#filter0_d_172_381)">
						<g filter="url(#filter1_d_172_381)">
							<path
								d="M59 59L89 89"
								stroke="#FF2750"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</g>
						<g filter="url(#filter2_d_172_381)">
							<path
								d="M89 59L59 89"
								stroke="#FF2750"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</g>
					</g>
				</svg>
			</button>
			<div className={cx('product__modal')}>
				<div className={cx('product__main')}>
					<Slider />
				</div>
				<div className={cx('product__sidebar')}>
					<div className={cx('product__sidebar__text')}>
						<span>Автор:</span>
						<p>{productToDisplay.author}</p>
					</div>
					<h1 className={cx('product__sidebar__title')}>{productToDisplay.title}</h1>
					<div className={cx('product__sidebar__stars')}>
						<Image src="/images/score.svg" alt="" width={91} height={15} />
						<p>{productToDisplay.score}</p>
					</div>
					<h1 className={cx('product__sidebar__title')}>
						{productToDisplay.category}
					</h1>
					<div className={cx('product__sidebar__text2')}>
						<span>Дата публикации:</span>
						<p>{productToDisplay.publicationDate}</p>
					</div>
					<button className={cx('product__sidebar__price')}>
						<p>{productToDisplay.price}</p>
					</button>
					<div className={cx('product__sidebar__buttons')}>
						<button className={cx('button__left')}>
							<p>Add&nbsp;to&nbsp;cart</p>
						</button>
						<button className={cx('button__right')}>
							<p>Buy&nbsp;now</p>
						</button>
					</div>
					<div className={cx('product__sidebar__text3')}>
						<span>Дата&nbsp;публикации:</span>
						<p>Easy Save. Easy Save. Easy Save.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal
