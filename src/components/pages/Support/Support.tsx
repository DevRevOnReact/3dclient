import { Container } from '../ui/Container/Container';
import cx from './style.module.scss';

const Support = () => (
	<Container>
	<main className={cx('support')}>
		<div className={cx('support__container')}>
			<div className={cx('support__content')}>
				<h1 className={cx('support__title')}>SUPPORT</h1>
				<p className={cx('support__description')}>
					Unreal Engine is a complete suite of creation tools for
					game development, architectural and automotive visualization,
					linear film and television content creation, broadcast and live event production,
					training and simulation, and other real-time applications.
					<br/>
					<br/>
					Unreal Engine is free to download, and comes fully loaded and production-ready out of the box,
					with every feature and full source code access included.Under the standard EULA, Unreal Engine
					is free to use for learning, and for developing internal projects; it also enables you to distribute
					many commercial projects without paying any fees to Epic Games, including custom projects delivered to clients,
					linear content (such as films and television shows) and any product that earns no revenue or whose revenue
					falls below the royalty threshold. A 5% royalty is due only if you are distributing an off-the-shelf product
					that incorporates Unreal Engine code (such as a game). Provided that you notify us on time using the Release
					Form, you will only owe royalties once the lifetime gross revenue from that product exceeds $1 million USD;
					in other words, the first $1 million will be royalty-exempt.
					There are also options for custom licenses. Contact us for more information.
					<br/>
					<br/>
					Get Unreal Engine here, and access all engine features, the full suite of
					integrated tools, and the C++ source code for the entire engine. You’ll find documentation,
					tutorials, and support resources, plus tons of free content, including templates, samples,
					and complete projects to quickly get you on your way to building anything you want!
					<br/>
					<br/>
					Epic regularly releases new versions which include updates, improved features,
					community contributions, and bug fixes. We also share live changes to source code through GitHub.
				</p>
			</div>
		</div>
	</main>
	</Container>
);

export { Support };
