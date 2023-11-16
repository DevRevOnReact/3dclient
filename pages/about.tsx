import type { GetStaticProps } from 'next';
import { makeStaticProps } from 'src/lib/helpers/getStatic';
import {About} from "@/pages/About";

const AboutPage = () => <About />;

export const getStaticProps: GetStaticProps = makeStaticProps(['about']);

export default AboutPage;
