import React, { useState } from 'react';
import Head from 'next/head';

const DepositCalculator: React.FC = () => {
  const [depositAmount, setDepositAmount] = useState('1000000');
  const [term, setTerm] = useState('1');
  const [termUnit, setTermUnit] = useState('год');
  const [interestRate, setInterestRate] = useState('5.00');
  const [openingDate, setOpeningDate] = useState('2025-05-21');
  const [capitalization, setCapitalization] = useState(false);
  const [capitalizationFrequency, setCapitalizationFrequency] = useState('месяц');
  const [earlyClosure, setEarlyClosure] = useState(false);
  const [earlyClosureRate, setEarlyClosureRate] = useState('5.00');
  const [earlyClosureDate, setEarlyClosureDate] = useState('2025-05-21');

  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center p-4">
      <Head>
        <title>Депозитный калькулятор</title>
        <meta name="description" content="Рассчитайте доход по вашему вкладу" />
        {/* Add Open Graph image here if available */}
      </Head>
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">ИСПОЛЬЗУЙ НАШ ДЕПОЗИТНЫЙ КАЛЬКУЛЯТОР</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="depositAmount">
              Сумма вклада, ₽
            </label>
            <input
              id="depositAmount"
              type="number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="term">
              Срок вклада
            </label>
            <div className="flex">
              <input
                id="term"
                type="number"
                className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
              {/* Custom Select for Term Unit will go here */}
              <div className="relative">
                 {/* Placeholder for custom select */}
                 <div className="shadow appearance-none border rounded-r py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer">
                    {termUnit}
                 </div>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="interestRate">
              Процентная ставка, % годовых
            </label>
            <input
              id="interestRate"
              type="number"
              step="0.01"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
           <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="openingDate">
                 Дата открытия
              </label>
              <input
                 id="openingDate"
                 type="date"
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 value={openingDate}
                 onChange={(e) => setOpeningDate(e.target.value)}
              />
           </div>
           <div className="flex items-center mb-4">
             <input
               id="capitalization"
               type="checkbox"
               className="form-checkbox h-4 w-4 text-blue-600"
               checked={capitalization}
               onChange={(e) => setCapitalization(e.target.checked)}
             />
             <label className="ml-2 text-gray-700 text-sm" htmlFor="capitalization">
               Начисление процентов с учетом капитализации
             </label>
           </div>
           {capitalization && (
             <div className="mb-4">
               <label className="block text-gray-700 text-sm font-bold mb-2">
                 Периодичность капитализации
               </label>
               {/* Custom Select for Capitalization Frequency will go here */}
                <div className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer">
                   {capitalizationFrequency}
                </div>
             </div>
           )}

           <div className="flex items-center mb-4">
             <input
               id="earlyClosure"
               type="checkbox"
               className="form-checkbox h-4 w-4 text-blue-600"
               checked={earlyClosure}
               onChange={(e) => setEarlyClosure(e.target.checked)}
             />
             <label className="ml-2 text-gray-700 text-sm" htmlFor="earlyClosure">
               Досрочное закрытие вклада
             </label>
           </div>
           {earlyClosure && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
               <div>
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="earlyClosureRate">
                   Ставка при досрочном закрытии, %
                 </label>
                 <input
                   id="earlyClosureRate"
                   type="number"
                   step="0.01"
                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   value={earlyClosureRate}
                   onChange={(e) => setEarlyClosureRate(e.target.value)}
                 />
               </div>
               <div>
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="earlyClosureDate">
                   Дата досрочного закрытия
                 </label>
                 <input
                   id="earlyClosureDate"
                   type="date"
                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   value={earlyClosureDate}
                   onChange={(e) => setEarlyClosureDate(e.target.value)}
                 />
               </div>
             </div>
           )}

        </div>

        {/* Result Block will go here */}
        <div className="bg-blue-700 text-white p-6 rounded-xl mb-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                 <div className="text-sm opacity-80">Сумма в конце срока</div>
                 <div className="text-xl font-bold">{depositAmount} ₽</div>{/* Placeholder */}
              </div>
              <div>
                 <div className="text-sm opacity-80">Доход</div>
                 <div className="text-xl font-bold">50 000 ₽</div>{/* Placeholder */}
              </div>
              {capitalization && (
                 <div>
                    <div className="text-sm opacity-80">Эффективная ставка</div>
                    <div className="text-xl font-bold">5.12 %</div>{/* Placeholder */}
                 </div>
              )}
           </div>
        </div>

        {/* Graph Button will go here */}
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            График начислений
          </button>
        </div>

      </div>
    </div>
  );
};

export default DepositCalculator;
