import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

import {DEFAULT_LOCALE} from '../constants/locales';

interface GetStaticPropsContextReduced {
	params?: any;
	preview?: boolean;
	previewData?: any;
	locale?: string;
	locales?: string[];
	defaultLocale?: string;
}

export const getI18nProps = async (
	ctx: GetStaticPropsContextReduced,
	ns: string[]
) => {
	const locale = ctx?.locale ?? DEFAULT_LOCALE;
	return {
		...(await serverSideTranslations(locale, ns)),
	};
};

export const makeStaticProps =
	(ns: string[]) => async (ctx: GetStaticPropsContextReduced) => ({
		props: await getI18nProps(ctx, ns),
	});
