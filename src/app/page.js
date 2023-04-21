import { Inter } from 'next/font/google'

import Header from './components/header';
import Intro from './components/intro';


// Style Files
import './scss/color.scss';
import './scss/global.scss';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
    </>
  )
}
