import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Калькуляторы | Главная</title>
        <meta name="description" content="Калькуляторы для расчета вкладов и активов" />
      </Head>
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Калькуляторы</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/deposit" className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Калькулятор вкладов</h2>
            <p className="text-gray-600">Рассчитайте доходность по вкладу</p>
          </Link>
          
          <Link href="/borrower-test" className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Тест заемщика</h2>
            <p className="text-gray-600">Проверьте свою кредитоспособность</p>
          </Link>
          
          <Link href="/asset-yield" className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-2">Калькулятор доходности активов</h2>
            <p className="text-gray-600">Рассчитайте доходность по активам</p>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default Home 