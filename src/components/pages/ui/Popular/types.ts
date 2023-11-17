export interface PopulateItemProps {
	item: {
		alt?: string;
		imgSrc?: string;
		imgWidth?: number;
		imgHeight?: number;
		tag?: string;
		description?: string;
		score?: number;
		category?: string;
		price?: string;
	};
	onOpenModal: () => void;
	backgroundColor:string;
}
