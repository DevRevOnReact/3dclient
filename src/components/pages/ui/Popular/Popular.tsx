import React, { useState } from 'react';

import { productData } from '@/pages/Product/config';
import Modal from '@/pages/ui/Modal/Modal';
import { popularData } from '@/pages/ui/Popular/config';
import PopulateItem from "@/pages/ui/Popular/PopularItem";

import cx from './style.module.scss';


const Popular = () => {
	const [isModalOpen, setModalOpen] = useState<boolean>(false);
	const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
	const [searchText, setSearchText] = useState<string>('');

	const filteredData = popularData.filter((item) =>
		item.description.toLowerCase().includes(searchText.toLowerCase())
	);

	const handleOpenModal = (index: number) => {
		setSelectedItemIndex(index);
		setModalOpen(true);
	};

	return (
		<>
			<div className={cx('popular')}>
				<h1 className={cx('popular__title')}>Popular</h1>
				<div className={cx('popular__container')}>
					<div className={cx('popular__cards')}>
						{filteredData.map((item, index) => (
							<PopulateItem key={index} item={item} onOpenModal={() => {handleOpenModal(index)}} />
						))}
					</div>
				</div>
			</div>
			<Modal isOpen={isModalOpen} onClose={() => {setModalOpen(false)}} productData={productData} displayIndex={selectedItemIndex} />
		</>
	);
};

export default Popular;
