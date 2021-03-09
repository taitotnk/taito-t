import '../styles/global.css'
import { AppProps } from 'next/app'
import 'highlight.js/styles/tomorrow-night.css';


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}