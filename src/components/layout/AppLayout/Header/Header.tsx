import { useTranslation } from 'next-i18next';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { SetStateAction } from "react";

import {catalogsData} from "@/pages/Catalogs/config";
import {popularData} from "@/pages/ui/Popular/config";
import Search from "@/pages/ui/Search/Search";

import cx from './../index.module.scss';
import type {SearchResultType} from "@/pages/ui/Search/types";
import Navbar from '@/pages/ui/Navigation/Navbar';
import { pagesConfig } from '@/pages/ui/Navigation/config';


export const Header = () => {
	const {t} = useTranslation(['common']);
	const [searchResults, setSearchResults] = useState<SearchResultType[]>([]); // Specify SearchResultType

	const handleSearchResults = (results: SetStateAction<SearchResultType[]>) => {
		setSearchResults(results);
	};

	  
	const [isNavbarVisible, setNavbarVisibility] = useState(true);

	const toggleNavbar = () => {
	  setNavbarVisibility(!isNavbarVisible);
	};
	

	return (
		<>
			 <Navbar pages={pagesConfig} isVisible={isNavbarVisible} onToggleVisibility={toggleNavbar} />
			 
		<header className={cx('header__container')}>
			<div className={cx('header__main')}>
				<div className={cx('header__left')}>
					<Search data={catalogsData} onSearchResults={handleSearchResults}
									popularData={popularData}/>
				</div>
				<div className={cx('header__right')}>
				</div>
			</div>
			<div className={cx('header')}>
				<div className={cx('nav_links')}>
					<Link href="/catalog">Animals</Link>
					<Link href="#">Enviroment</Link>
					<Link href="#">Plant</Link>
					<Link href="#">Characters</Link>
					<Link href="#">Car</Link>
					<Link href="#">Industrial</Link>
					<Link href="#">Weapons</Link>
					<Link href="#">Furniture</Link>
					<div className={cx('nav__btn')}>
					<button  onClick={toggleNavbar} style={{border:'none', backgroundColor:'rgba(0,0,0,0)'}} > 
					<svg
							xmlns="http://www.w3.org/2000/svg" 
							viewBox="0 0 24 24" width="24" height="24"
							fill="white" stroke="currentColor" 
							stroke-width="2" stroke-linecap="round"
							stroke-linejoin="round" 
							style={{
								backgroundColor: '#FF2750',
								color:'white',
								marginTop:'9px', 
								cursor:'pointer'
							}}>
								<path d="M3 12h18M3 6h18M3 18h18"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
		
		</header>
		</>
	);
};
