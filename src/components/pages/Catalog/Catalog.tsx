import Image from "next/image";
import Link from "next/link";

import {catalogData} from "@/pages/Catalog/config";
import Popular from "@/pages/ui/Popular/Popular";

import cx from './style.module.scss';
import { Container } from "../ui/Container/Container";

const Catalog = () => (
	<>
	<Container>
	<main className={cx('catalog')}>
		<section className={cx('catalog__layout')}>
		<section className={cx('catalog__main')}>
			<div className={cx('catalog__section')}>
				{catalogData.map((item, index) => (
					<div className={cx('catalog__content')} key={index}>
						<div className={cx('catalog__options')}>
							<div className={cx('catalog__item')}>
								<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
									<rect width="32" height="32" rx="4" fill="#0D0D0D"/>
									<path d="M8.8 15.2L15.2 21.2L22.8 10.8" stroke="#FF2750" stroke-width="3" stroke-linecap="round"/>
								</svg>
							</div>
							<div className={cx('catalog__item')}>
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<path d="M19 5H5" stroke="#FF2750" stroke-width="2" stroke-linecap="round"/>
									<path d="M14 4H10" stroke="#FF2750" stroke-width="2" stroke-linecap="round"/>
									<path d="M6 10V21H18C18 20 18 10 18 10" stroke="#FF2750" stroke-width="2" stroke-linecap="round"/>
								</svg>
							</div>
						</div>
						<Image alt="fsfdsf" className={cx('catalog__img')} src={item.src} width={100} height={100}/>
						<div className={cx('catalog__text')}>
							<p className={cx('catalog__text_title')}>{item.title}</p>
							<p className={cx('catalog__text_description')}>{item.description}</p>
							<p className={cx('catalog__text_price')}>{item.price}</p>
						</div>
					</div>
				))}
			</div>
		</section>
		<section className={cx('catalog__sidebar')}>
			<div className={cx('catalog__sidebar_content')}>
				<div className={cx('catalog__sidebar_section')}>
					<p className={cx('catalog__sidebar_title')}>
						Subtotal
						<br />
						(3 items)
					</p>
					<div className={cx('catalog__sidebar_price')}>
						<p>$ 157.38</p>
					</div>
					<button className={cx('catalog__sidebar_button')}>
						<p>Proceed&nbsp;to&nbsp;checkout</p>
					</button>
				</div>
			</div>
			<div className={cx('catalog__sidebar_footer')}>
				<div className={cx('catalog__sidebar_text')}>
					<Link href="#">Need help?</Link>
					<Link href="#">Clear cart</Link>
				</div>
			</div>
		</section>
</section>
		
	</main>
	</Container>
	<Popular />
	</>
);

export { Catalog };
