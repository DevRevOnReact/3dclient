import React, { useEffect, useState } from 'react';

import { productData } from '@/pages/Product/config';
import Modal from '@/pages/ui/Modal/Modal';
import { popularData } from '@/pages/ui/Popular/config';
import PopulateItem from "@/pages/ui/Popular/PopularItem";

import cx from './style.module.scss';
import { Container } from '../Container/Container';


const Popular = () => {
	const [isModalOpen, setModalOpen] = useState<boolean>(false);
	const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
	const [searchText, setSearchText] = useState<string>('');
	const [pageBackgroundColor, setPageBackgroundColor] = useState('');

	useEffect(() => {
		// Определите цвет фона страницы и обновите значение state
		const {body} = document;
		const computedStyles = window.getComputedStyle(body);
		const {backgroundColor} = computedStyles;
		setPageBackgroundColor(backgroundColor);
	  }, []); // [] означае;

	const filteredData = popularData.filter((item) =>
		item.description.toLowerCase().includes(searchText.toLowerCase())
	);

	const handleOpenModal = (index: number) => {
		setSelectedItemIndex(index);
		setModalOpen(true);
	};
	

	return (
		<main style={{background:'#242424'}}>
		<Container>
			<div className={cx('popular')}>
				
				<h1 className={cx('popular__title')}>Popular</h1>
				<div className={cx('popular__container')}>
					<div className={cx('popular__cards')}>
						{filteredData.map((item, index) => (
							 <PopulateItem
							 key={index}
							 item={item}
							 onOpenModal={() => { handleOpenModal(index); }}
							 backgroundColor={pageBackgroundColor === '#0D0D0D' ? '#0D0D0D' : '#0D0D0D'}
						   />
						))}
					</div>
				</div>
				
			</div>
			</Container>
			<Modal isOpen={isModalOpen} onClose={() => {setModalOpen(false)}} productData={productData} displayIndex={selectedItemIndex} />
		</main>
	);
};

export default Popular;
