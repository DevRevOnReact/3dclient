import type { GetStaticProps } from 'next';
import { makeStaticProps } from 'src/lib/helpers/getStatic';
import {Support} from "@/pages/Support";

const SupportPage = () => <Support />;

export const getStaticProps: GetStaticProps = makeStaticProps(['common']);

export default SupportPage;
