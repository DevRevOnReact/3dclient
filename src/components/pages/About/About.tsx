import { Container } from '../ui/Container/Container';
import cx from './style.module.scss';
import Image from "next/image";


const About = () => (
	<Container>
	<main className={cx('about')}>
		<div className={cx('about__container')}>
			<h1 className={cx('about__title')}>ABOUT</h1>
		</div>
			<div className={cx('about__content')}>
				<div className={cx('about__content__container')}>
					<div className={cx('about__images')}>
						<Image src="/images/icon2.svg" alt="fdsfds" width={528} height={340}/>
						<Image src="/images/icon.svg" alt="fdsfds" width={324} height={289}/>
					</div>
					<p className={cx('about__text')}>
						We are a team of creators behind this website, talented 3D artists who aspire to not only bring their
						creative ideas to life but also earn a living without any restrictions or limitations
						<br />
						<br />
						Our main objective is to provide artists from around the world with the opportunity to unleash
						their potential and astonish the globe with their virtual 3D models. We firmly believe in the power
						of creativity and art, which is why we invite artists from different countries to join our
						platform and share their unique creations with a global audience
						<br />
						<br />
						One of our main advantages is our collaboration with CIS countries. We offer convenient
						and transparent conditions for obtaining commissions and partnering with clients from this
						region. We understand the significance of working together and strive to make the interaction
						process between artists and clients on our platform as seamless and efficient as possible
						<br />
						<br />
						Join us to discover a world of inspiring possibilities, projects, and new creative connections.
						Share your uniqueness with others and receive well-deserved recognition and rewards for your work.
						Together, we are shaping a future where 3D art becomes a universal treasure and a magnificent expression of our world.
					</p>
				</div>
			</div>
	</main>
	</Container>
);

export { About };
