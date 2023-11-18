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


export const Header = () => {
	const {t} = useTranslation(['common']);
	const [searchResults, setSearchResults] = useState<SearchResultType[]>([]); // Specify SearchResultType

	const handleSearchResults = (results: SetStateAction<SearchResultType[]>) => {
		setSearchResults(results);
	};

	return (
		<>
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
				</div>
			</div>
		
		</header>
		</>
	);
};
