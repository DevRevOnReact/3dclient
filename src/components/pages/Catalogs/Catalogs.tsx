import { useState } from "react";

import CatalogItem from "@/pages/Catalogs/CatalogsItem";
import { catalogsData } from "@/pages/Catalogs/config";

import cx from './style.module.scss';
import Link from "next/link";
import { Container } from "../ui/Container/Container";

const Catalogs = () => {
	const [searchResults, setSearchResults] = useState([]);
	const [showAllContent, setShowAllContent] = useState(true);

	return (
		<>
		<Container>
			<main className={cx('catalogs')}>
				<div className={cx('catalogs__container')}>
					<div className={cx('catalogs__text')}>
						<h1>Catalog</h1>
						<h2>Categories</h2>
					</div>
					<div className={cx('catalogs__content')}>
						{searchResults.length > 0 ? (
							searchResults.map((item, index) => (
							<>
								<Link href={"/product"}>
								<CatalogItem key={index} item={item}  />
								</Link>
							</>
							))
						) : showAllContent ? (
							catalogsData.map((item, index) => (
								<>
								<Link href={"/product"}>
								<CatalogItem key={index} item={item}  />
								</Link>
								</>
							))
						) : (
							<p></p>
						)}
					</div>
				</div>
			</main>
			</Container>
		</>
	);
};

export { Catalogs };
