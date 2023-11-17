

import {popularData} from "@/pages/ui/Popular/config";
import Popular from "../ui/Popular/Popular";
import PopulateItem from "../ui/Popular/PopularItem";
import { useEffect, useState } from "react";

import Modal from "../ui/Modal/Modal";
import { HomeData, popularHomeData } from "./config";
import Custom from "../ui/Custom/Custom";


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
			<Custom title={'Product on Sale'} />
	<main style={{width:'1 auto', marginLeft:'140px', marginRight:'140px', paddingBottom:'71px'}}>
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
							 backgroundColor={pageBackgroundColor}
							
						   />
						))}
		</div>
	</main>
	<div style={{ background:'#242424', paddingBottom:'91px'}}>
	<Custom title={'New product'} />
	<main style={{width:'1 auto', marginLeft:'140px', marginRight:'140px'}}>
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
	</div>
	<Modal isOpen={isModalOpen} onClose={() => {setModalOpen(false)}} productData={HomeData} displayIndex={selectedItemIndex} />
	</>
);

}

export { HomePage };
