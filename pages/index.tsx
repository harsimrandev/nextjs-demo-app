import { Inter } from 'next/font/google'
import NavBar from '@/components/modules/Navbar'
import TabSection from '@/components/modules/TabSection'
import CartSection from '@/components/modules/CartSection'
import ProductsImages from '@/components/modules/ProductsImages'
import Footer from '@/components/modules/Footer'
import MobileProductsSlider from '@/components/modules/MobileProductsSlider'
// import Test from '@/components/test'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <NavBar />
    <main
      className={`mx-auto flex max-w-7xl p-4 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-4 ${inter.className}`}
    >
      <TabSection />
      <ProductsImages />
      <MobileProductsSlider />
      <CartSection />
    </main>
    <Footer />

    </>
  )
}
