import type { GetStaticProps } from 'next';
import { makeStaticProps } from 'src/lib/helpers/getStatic';
import {Catalog} from "@/pages/Catalog";

const CatalogPage = () => <Catalog />;

export const getStaticProps: GetStaticProps = makeStaticProps(['common']);

export default CatalogPage;
