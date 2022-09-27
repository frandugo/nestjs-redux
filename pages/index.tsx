import type { NextPage } from 'next'

import { ProductsInterface } from '@/interfaces/productInterface'

import { MainLayout } from '@/components/Layouts/MainLayout'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Featured } from '@/components/Featured'
import { About } from '@/components/About'
import { Footer } from '@/components/Footer'

const Home: NextPage<ProductsInterface> = ({ products }) => {
  return (
    <MainLayout title="Store Application">
        <>
          <Header/> 
          <main>
            <Hero/>
            <Featured products={ products} />
            <About/>
          </main>
          <Footer/>
        </>  
    </MainLayout>
  )
}

export async function getServerSideProps() {	
  const res = await fetch(`${process.env.API_URL}/products?limit=4`);
  const data = await res.json();
  return {
    props: {
      products: data
    }
  };
};

export default Home
