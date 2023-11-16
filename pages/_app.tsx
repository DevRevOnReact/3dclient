import { MantineProvider} from "@mantine/core";
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

import 'src/styles/main.scss';
import { AppLayout } from '@/layout/AppLayout';

const App = ({ Component, pageProps }: AppProps) => (
	<MantineProvider>
	<AppLayout>
		<Component {...pageProps} />
	</AppLayout>
		</MantineProvider>
);

export default appWithTranslation(App);
