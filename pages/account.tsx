import type { GetStaticProps } from 'next';
import { makeStaticProps } from 'src/lib/helpers/getStatic';
import {Account} from "@/pages/Account";

const AccountPage = () => <Account />;

export const getStaticProps: GetStaticProps = makeStaticProps(['common']);

export default AccountPage;
