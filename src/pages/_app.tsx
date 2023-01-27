import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loader from '@/components/Loader/Loader';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  
  const [isLoading, setIsLoading] = useState(false)
    const router = useRouter();
  
    useEffect(() => {
      const handleStart = () => {
        setIsLoading(true);
      };
      const handleComplete = () => {
        setIsLoading(false);
      };
      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleComplete);
      router.events.on("routeChangeError", handleComplete);
    }, [router]);

    if(isLoading) {
      return <Loader/>
    }
  
  return <Component {...pageProps} />;
}
