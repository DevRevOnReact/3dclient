import PopulateItem from "../ui/Popular/PopularItem";
import { useState } from "react";

import Modal from "../ui/Modal/Modal";
import { HomeData, popularHomeData } from "./config";
import Custom from "../ui/Custom/Custom";
import { Container } from "../ui/Container/Container";
import cx from './style.module.scss'

const HomePage = () => {
	const [isModalOpen, setModalOpen] = useState<boolean>(false);
	const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
	const [searchText, setSearchText] = useState<string>('');
	const [pageBackgroundColor, setPageBackgroundColor] = useState('#242424');
	const [BackgroundColor, setBackgroundColor] = useState('#0D0D0D')

	
	const filteredData = popularHomeData.filter((item) =>
		item.description.toLowerCase().includes(searchText.toLowerCase())
	);

	const handleOpenModal = (index: number) => {
		setSelectedItemIndex(index);
		setModalOpen(true);
	};
	
	return (
		<>
	
<Container>
	<Custom title={'Product on Sale'} />
	<main className={cx('home')}>
		<div  
		 style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            justifyContent: "center",
			
			paddingBottom:'100px'
          }}
		>
  		{filteredData.map((item, index) => (
							 <PopulateItem
							 key={index}
							 item={item}
							 onOpenModal={() => { handleOpenModal(index); }}
							 backgroundColor={pageBackgroundColor}
							
						   />
						))}
		</div>
	</main>
	</Container>
	
	<div style={{ background:'#242424', paddingBottom:'91px'}}>
	<Container>
	<Custom title={'New product'} />
	<main className={cx('home')}>
		<div  
		 style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            justifyContent: "center",	
          }}
		>
  		{filteredData.map((item, index) => (
							 <PopulateItem
							 key={index}
							 item={item}
							 onOpenModal={() => { handleOpenModal(index); }}
							 backgroundColor={BackgroundColor}
						   />
						))}
		</div>
	</main>
	</Container>
	</div>
	<Modal isOpen={isModalOpen} onClose={() => {setModalOpen(false)}} productData={HomeData} displayIndex={selectedItemIndex} />
	
	</>
);

}

export { HomePage };
