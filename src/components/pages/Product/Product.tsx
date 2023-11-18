import Image from "next/image";

import {productData} from "@/pages/Product/config";
import Slider from "@/pages/ui/Double";

import cx from './style.module.scss';
import Popular from "../ui/Popular/Popular";
import { Container } from "../ui/Container/Container";

const Product = () => (
		<>
		<Container>
			<div className={cx('product')}>
				<div className={cx('product__main')}>
					<Slider/>
				</div>
				<div className={cx('product__sidebar')}>
					<div className={cx('product__sidebar__text')}>
						<span>Автор:</span>
						<p>{productData[0].author}</p>
					</div>
					<h1 className={cx('product__sidebar__title')}>{productData[0].title}</h1>
					<div className={cx('product__sidebar__stars')}>
						<Image src="/images/score.svg" alt="" width={91} height={15}/>
						<p>{productData[0].score}</p>
					</div>
					<h1 className={cx('product__sidebar__title')}>{productData[0].category}</h1>
					<div className={cx('product__sidebar__text2')}>
						<span>Дата публикации:</span>
						<p>{productData[0].publicationDate}</p>
					</div>	
					<button className={cx('product__sidebar__price')}>
						<p>{productData[0].price}</p>
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
			</Container>
			<Popular />
			
		</>
	)

export { Product };
