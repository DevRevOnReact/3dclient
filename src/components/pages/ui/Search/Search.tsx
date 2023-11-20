import React, {useState, useEffect} from 'react';
import type {SetStateAction} from 'react';
import Link from "next/link";
import cx from './style.module.scss'
import CatalogItem from "@/pages/Catalogs/CatalogsItem";

import {popularData} from "@/pages/ui/Popular/config";
import PopularItem from "@/pages/ui/Popular/PopularItem";
import type {SearchResultType} from "@/pages/ui/Search/types";
import Image from "next/image";


interface SearchProps {
	data: Array<{
		imageSrc: string;
		imageAlt: string;
		imageWidth: number;
		imageHeight: number;
		overlayText: string;
	}>;
	onSearchResults: (results: SetStateAction<SearchResultType[]>) => void;
	popularData: any[]; // Change 'any' to the actual type of popularData if possible
}

const Search: React.FC<SearchProps> = ({ data, onSearchResults }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState<Array<{
		alt?: string;
		imgSrc?: string;
		imgWidth?: number;
		imgHeight?: number;
		tag?: string;
		description?: string;
		score?: number;
		category?: string;
		price?: string;
		overlayText?: string;
	}>>([]);

	const [suggestions, setSuggestions] = useState<string[]>([]);

	const handleSearchInputChange = (event: { target: { value: any; }; }) => {
		const searchTerm = event.target.value;
		setSearchTerm(searchTerm);

		// Выполняем поиск по данным
		const catalogResults = data.filter((item) => {
			const lowerCaseOverlayText = item.overlayText.toLowerCase();
			const lowerCaseSearchTerm = searchTerm.toLowerCase();
			return (
				lowerCaseOverlayText.includes(lowerCaseSearchTerm) ||
				lowerCaseOverlayText.startsWith(lowerCaseSearchTerm)
			);
		});

		const popularResults = popularData.filter((item) =>
			item.description.toLowerCase().includes(searchTerm.toLowerCase())
		);

		const results = [...catalogResults, ...popularResults].slice(0, 3);

		setSearchResults(results);
		onSearchResults(results); // Вызываем функцию обратного вызова с найденными результатами

		// Генерируем подсказки на основе введенного текста
		const matchingCatalogSuggestions = data
		.filter((item) =>
		item.overlayText.toLowerCase().includes(searchTerm.toLowerCase())
	  )
	  .map((item) => item.overlayText)
	  .slice(0, 3);
	
	const matchingPopularSuggestions = popularData
	  .filter((item) =>
		item.description.toLowerCase().includes(searchTerm.toLowerCase())
	  )
	  .map((item) => item.description)
	  .slice(0, 3);
		const suggestions = [...matchingCatalogSuggestions, ...matchingPopularSuggestions];

		setSuggestions(suggestions);
	};

	const handleSuggestionClick = (suggestion: string) => {
		setSearchTerm(suggestion);
		setSuggestions([]);
		search(suggestion);
	};

	const search = (value: string) => {
		const results = data.filter((item: { overlayText: string; }) =>
		  item.overlayText.toLowerCase().includes(value.toLowerCase())
		);
	  
		const popularResults = popularData.filter((item) =>
		  item.description.toLowerCase().includes(value.toLowerCase())
		);
	  
		const combinedResults = [...results, ...popularResults].slice(0, 3);
	  
		setSearchResults(combinedResults);
		onSearchResults(combinedResults); // Call the callback function with the combined results
	  };

	  const clearSearchResults = () => {
		setSearchTerm('');
		setSearchResults([]);
		setSuggestions([]);
		onSearchResults([]);
	  };

	  const handleLinkClick = () => {
		clearSearchResults();
	  };

	
	return (
		<div>
			
			<div style={{display: 'flex'}}>
				<Link href={'/'}>
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
					</Link>
			<input
				type="text"
				value={searchTerm}
				onChange={handleSearchInputChange}
				placeholder="Search..."
				className={cx('input')}
			/>
			</div>

			{searchTerm && (
				<div className={cx('autocomplete')}>
					{suggestions.map((suggestion) => (
						<div
							key={suggestion}
							className={cx('suggestion')}
							onClick={() => {handleSuggestionClick(suggestion)}}
						>
							{suggestion}
						</div>
					))}
				</div>
			)}

			{searchTerm && searchResults.length > 0 ? (
				<div className={cx('catalogs__contents')}>
				<div className={cx('catalogs__content')}>
					{searchResults.map((result, index) => (
						result.overlayText ? (
							<Link href="/catalogs" key={index} onClick={handleLinkClick}>
								<CatalogItem item={result} key={index} />
							</Link>
						) : (
							<div key={index} style={{
								display:'flex',
								flexDirection:'row',
							}}>
									<Link href="/catalog" key={index} onClick={handleLinkClick}>
										<PopularItem item={result} key={index} onOpenModal={() => true} backgroundColor={''} />
									</Link>
							</div>
						)
					))}
				</div>
				</div>
			) : (
				<p></p>
			)}
		</div>
	);
};

export default Search;
