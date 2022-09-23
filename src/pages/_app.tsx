import 'tailwindcss/tailwind.css';
import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

export function reportWebVitals(metric: NextWebVitalsMetric) {
  switch (metric.name) {
    case 'FCP':
      console.log(`FCP: ${Math.round(metric.value * 10) / 10}`);
      break;
    case 'LCP':
      console.log(`LCP: ${Math.round(metric.value * 10) / 10}`);
      break;
    case 'TTFB':
      console.log(`TTFB: ${Math.round(metric.value * 10) / 10}`);
      break;
    case 'Next.js-hydration':
      console.log(
        `Hydration: ${Math.round(metric.startTime * 10) / 10} -> ${
          Math.round((metric.startTime + metric.value) * 10) / 10
        }`,
      );
      break;
    default:
      break;
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: 'light',
          fontFamily: 'Verdana, sans-serif',
        }}
      >
        <NotificationsProvider limit={2}>
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
