import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import cx from './style.module.scss'
import Link from 'next/link';

export const Footer = () => {
	const router = useRouter();
	const { t } = useTranslation(['footer']);

	return (
		<footer className={cx('footer')}>
			<div>
			<Image
				alt="fsfdsf"
				src="/images/LogoFull.png"
				width={260}
				height={56}
				style={{
					objectFit: 'cover',
					pointerEvents: 'none',
				}}
			/>
			</div>

			<div className={cx('footer__lists')}>
				<div className={cx('footer__list1')}>
					<h1>Help:</h1>
					<ul>
						<li>
							<Link href={'#'}>Get help</Link>
						</li>
					</ul>
				</div>

				<div className={cx('footer__list2')}>
					<h1>Discover:</h1>
					<ul>
						<li>
							<Link href={'#'}>New Releases</Link>
						</li>
						<li>
							<Link href={'#'}>On Sale</Link>
						</li>
						<li>
							<Link href={'#'}>Popular</Link>
						</li>
						<li>
							<Link href={'#'}>High Rating</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className={cx('footer__follows')}>
				<div className={cx('footer__follow1')}>
					<h1>Follow&nbsp;the<br />Zamodelim</h1>
					<Image
				alt="fsfdsf"
				src="/images/tube.svg"
				width={75}
				height={75}
				style={{
					objectFit: 'cover',
					pointerEvents: 'none',
				}}
			/>
				</div>
				<div className={cx('footer__follow2')}>
					<h1>Language</h1>
					<div className={cx('follow__buttons')}>
						<button className={cx('button1')}>
							Russian
						</button>
						<button  className={cx('button2')}>
							English
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
};

