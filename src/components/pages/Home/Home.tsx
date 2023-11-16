

import {popularData} from "@/pages/ui/Popular/config";
import PopulateItem from "@/pages/ui/Popular/PopularItem";


const HomePage = () => (
	<main>
  		<PopulateItem item={popularData[0]} onOpenModal={() => false}/>
	</main>
);

export { HomePage };
