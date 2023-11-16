import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DEFAULT_LOCALE } from '../constants/locales';

interface GetStaticPropsContextReduced {
  params?: any;
  preview?: boolean;
  previewData?: any;
  locale?: string;
  locales?: string[];
  defaultLocale?: string;
}

interface I18nNamespaces {
	common: [];
}

export const getI18nProps = async (
  ctx: GetStaticPropsContextReduced,
  ns:Array<keyof I18nNamespaces>
) => {
  const locale = ctx?.locale ?? DEFAULT_LOCALE;
  return {
    ...(await serverSideTranslations(locale, ns)),
  };
};

export const makeStaticProps =
  (ns: Array<keyof I18nNamespaces>) => async (ctx: GetStaticPropsContextReduced) => ({
    props: await getI18nProps(ctx, ns),
  });
