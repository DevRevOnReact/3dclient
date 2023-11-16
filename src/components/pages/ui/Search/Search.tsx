import React, {useState} from 'react';
import type {SetStateAction} from 'react';

import cx from './style.module.scss'
import CatalogItem from "@/pages/Catalogs/CatalogsItem";

import {popularData} from "@/pages/ui/Popular/config";
import PopularItem from "@/pages/ui/Popular/PopularItem";
import type {SearchResultType} from "@/pages/ui/Search/types";

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

		const results = [...catalogResults, ...popularResults];

		setSearchResults(results);
		onSearchResults(results); // Вызываем функцию обратного вызова с найденными результатами

		// Генерируем подсказки на основе введенного текста
		const matchingCatalogSuggestions = data
			.filter((item) =>
				item.overlayText.toLowerCase().startsWith(searchTerm.toLowerCase())
			)
			.map((item) => item.overlayText);

		const matchingPopularSuggestions = popularData
			.filter((item) =>
				item.description.toLowerCase().startsWith(searchTerm.toLowerCase())
			)
			.map((item) => item.description);

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

		setSearchResults(results);
		onSearchResults(results); // Вызываем функцию обратного вызова с найденными результатами
	};

	const clearSearchResults = () => {
		setSearchTerm('');
		setSearchResults([]);
		setSuggestions([]);
		onSearchResults([]); // Вызываем функцию обратного вызова с пустым массивом результатов
	};

	return (
		<div>
			<input
				type="text"
				value={searchTerm}
				onChange={handleSearchInputChange}
				placeholder="Search..."
				className={cx('input')}
			/>

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
				<div className={cx('catalogs__content')}>
					{searchResults.map((result, index) => (
						result.overlayText ? (
							<CatalogItem item={result} key={index} />
						) : (
							<PopularItem item={result} key={index} onOpenModal={() => true} />
						)
					))}
				</div>
			) : (
				<p>fd</p>
			)}
		</div>
	);
};

export default Search;
