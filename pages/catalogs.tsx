import type { GetStaticProps } from 'next';
import { makeStaticProps } from 'src/lib/helpers/getStatic';
import {Catalogs} from "@/pages/Catalogs";

const CatalogsPage = () => <Catalogs />;

export const getStaticProps: GetStaticProps = makeStaticProps(['common']);

export default CatalogsPage;
