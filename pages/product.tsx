import type { GetStaticProps } from 'next';
import { makeStaticProps } from 'src/lib/helpers/getStatic';
import {Product} from "@/pages/Product";

const ProductPage = () => <Product />;

export const getStaticProps: GetStaticProps = makeStaticProps(['product']);

export default ProductPage;
