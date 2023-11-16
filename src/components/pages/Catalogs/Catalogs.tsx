import { useState } from "react";

import CatalogItem from "@/pages/Catalogs/CatalogsItem";
import { catalogsData } from "@/pages/Catalogs/config";

import cx from './style.module.scss';

const Catalogs = () => {
	const [searchResults, setSearchResults] = useState([]);
	const [showAllContent, setShowAllContent] = useState(true);

	return (
		<main className={cx('catalogs')}>
			<div className={cx('catalogs__container')}>
				<div className={cx('catalogs__text')}>
					<h1>Catalog</h1>
					<h2>Categories</h2>
				</div>
				<div className={cx('catalogs__content')}>
					{searchResults.length > 0 ? (
						searchResults.map((item, index) => (
							<CatalogItem key={index} item={item} />
						))
					) : showAllContent ? (
						catalogsData.map((item, index) => (
							<CatalogItem key={index} item={item} />
						))
					) : (
						<p></p>
					)}
				</div>
			</div>
		</main>
	);
};

export { Catalogs };
