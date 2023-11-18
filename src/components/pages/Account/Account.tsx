import Image from "next/image";

import cx from './style.module.scss';
import { Container } from "../ui/Container/Container";


const Account = () => (
	<>
	<Container>
		<main className={cx('account')}>
			<div className={cx('accountTitle')}>
				<h1>Account Settings</h1>
			</div>
			<div className={cx('account__container')}>
				<div className={cx('account__block1')}>
					<div className={cx('account__buttons')}>
					<button className={cx('account__button')}>
						<p>My&nbsp;product</p>
					</button>
					<button className={cx('account__button')}>
						<p>My&nbsp;sales</p>
					</button>
				</div>
			</div>

			<div className={cx('account__block2')}>
				<Image
					alt="fsfdsf"
					className={cx('account__image')}
					src="/images/face.png"
					width={260}
					height={188}
				/>
					<p>My name</p>
			</div>

			<div className={cx('account__block3')}>
				<div className={cx('account__buttons')}>
					<button className={cx('account__button')}>
						<p>My&nbsp;purchases</p>
					</button>
					<button className={cx('account__button1')}>
						<p>Settings</p>
					</button>
				</div>
			</div>

			</div>
		</main>
		<section className={cx('userData')}>
			<div className={cx('userData__container')}>
				<div className={cx('userData__buttons_state')}>
					<button className={cx('userData__button_public')}>
						<p>Public</p>
					</button>
					<button className={cx('userData__button_private')}>
						<p>Private</p>
					</button>
					<button className={cx('userData__button_payment')}>
						<p>Payment</p>
					</button>
				</div>
				<div className={cx('userData_description')}>
					<div className={cx('line')}></div>
					<p className={cx('userData_text')}>
						This information is visible only to 3dZamStore and you need it to contact you
					</p>
				</div>
				<div className={cx('userData_forms')}>
					<form action="" className={cx('userData_form')}>
						<div className={cx('form__input_left')}>
							<input type="text" placeholder="First name*"/>
							<input type="text" placeholder="Primary email address*"/>
							<input type="text" placeholder="Two factor authentication"/>
						</div>
						<div className={cx('form__input_right')}>
							<input type="text" placeholder="Last name*"/>
							<input type="text" placeholder="Password*"/>
						</div>
					</form>
					<form action="" className={cx('userData_form')}>
						<div className={cx('form__input_left')}>
							<input type="text" placeholder="Country of permanent residence*"/>
							<input type="text" placeholder="Zip/Postal cod"/>
						</div>
						<div className={cx('form__input_right')}>
							<input type="text" placeholder="City"/>
						</div>
					</form>
				</div>
				<div className={cx('userData_description2')}>
					<div className={cx('line')}></div>
					<p className={cx('userData_text')}>
						Your legal rights and obligations as a Seller are detailed in the User argeement, and require acceptance by an adult
						with the authority to complete the agreement
					</p>
				</div>
				<div className={cx('userData_buttons_main')}>
					<button className={cx('userData__button_save')}>
						<p>Save changer</p>
					</button>
					<button className={cx('userData__button_discard')}>
						<p>Discard changer</p>
					</button>
				</div>
			</div>
		</section>
		</Container>
	</>
);

export { Account };
