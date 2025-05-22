import React, { useState } from 'react';
import Head from 'next/head';

const DepositCalculator: React.FC = () => {
  const [depositAmount, setDepositAmount] = useState('1000000');
  const [term, setTerm] = useState('1');
  const [termUnit, setTermUnit] = useState('год'); // месяц, год, лет
  const [interestRate, setInterestRate] = useState('5.00');
  const [openingDate, setOpeningDate] = useState('2025-05-21');
  const [capitalization, setCapitalization] = useState(false);
  const [capitalizationFrequency, setCapitalizationFrequency] = useState('ежемесячно'); // ежемесячно, ежеквартально, ежегодно
  const [earlyClosure, setEarlyClosure] = useState(false);
  const [earlyClosureRate, setEarlyClosureRate] = useState('5.00');
  const [earlyClosureDate, setEarlyClosureDate] = useState('2025-05-21');

  // Placeholder for custom select logic and rendering
  const renderTermUnitSelect = () => {
    // TODO: Implement custom select for term unit
    return (
      <div className="relative inline-block">
        <div className="appearance-none border border-l-0 rounded-r py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer bg-blue-100 bg-opacity-50 rounded-r-xl flex items-center h-full">
          {termUnit} <span className="ml-1">▼</span>
        </div>
        {/* Dropdown content goes here */}
      </div>
    );
  };

  const renderCapitalizationFrequencySelect = () => {
    // TODO: Implement custom select for capitalization frequency
     return (
         <div className="relative inline-block w-full">
            <div className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline cursor-pointer bg-blue-100 bg-opacity-50 rounded-xl flex justify-between items-center w-full">
               {capitalizationFrequency} <span className="ml-1">▼</span>
            </div>
            {/* Dropdown content goes here */}
         </div>
     );
  };

  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center p-4 font-sans">
      <Head>
        <title>Депозитный калькулятор</title>
        <meta name="description" content="Рассчитайте доход по вашему вкладу" />
        {/* Add Open Graph image here if available */}
      </Head>
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl w-full">
        {/* Top section with title and description - adjust classes as needed */}
        <div className="mb-8 text-center lg:text-left">
           <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">Бесплатный и понятный</span>
           <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">ИСПОЛЬЗУЙ НАШ<br/>ДЕПОЗИТНЫЙ КАЛЬКУЛЯТОР</h1>
           <p className="text-gray-700 text-lg">Вы сможете рассчитать доход по вкладу, оценить, как он меняется в зависимости от разных сроков и условий выплаты процентов.</p>
        </div>

        {/* Calculator Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
           {/* Left Column */}
           <div>
              {/* Сумма вклада */}
              <div className="mb-6">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="depositAmount">
                    Сумма вклада, ₽
                 </label>
                 <input
                    id="depositAmount"
                    type="number"
                    className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-blue-100 bg-opacity-50"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                 />
              </div>

              {/* Срок вклада */}
              <div className="mb-6">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="term">
                    Срок вклада
                 </label>
                 <div className="flex">
                    <input
                       id="term"
                       type="number"
                       className="shadow appearance-none border rounded-l-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-blue-100 bg-opacity-50"
                       value={term}
                       onChange={(e) => setTerm(e.target.value)}
                    />
                    {renderTermUnitSelect()}
                 </div>
              </div>

              {/* Процентная ставка */}
              <div className="mb-6">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="interestRate">
                    Процентная ставка, % годовых
                 </label>
                 <input
                    id="interestRate"
                    type="number"
                    step="0.01"
                    className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-blue-100 bg-opacity-50"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                 />
              </div>

              {/* Дата открытия */}
              <div className="mb-6">
                 <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="openingDate">
                    Дата открытия
                 </label>
                 {/* Consider using a custom date picker component for icon */}
                 <input
                    id="openingDate"
                    type="date"
                    className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-blue-100 bg-opacity-50"
                    value={openingDate}
                    onChange={(e) => setOpeningDate(e.target.value)}
                 />
              </div>
           </div>

           {/* Right Column (Checkboxes and Conditional Fields) */}
           <div className="pt-8 lg:pt-0">
              {/* Капитализация */}
              <div className="flex items-center mb-4">
                 <input
                    id="capitalization"
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                    checked={capitalization}
                    onChange={(e) => setCapitalization(e.target.checked)}
                 />
                 <label className="ml-3 text-gray-700 text-sm" htmlFor="capitalization">
                    Начисление процентов с учетом капитализации
                 </label>
              </div>

              {capitalization && (
                 <div className="mb-6 ml-8">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                       Периодичность капитализации
                    </label>
                    {renderCapitalizationFrequencySelect()}
                 </div>
              )}

              {/* Досрочное закрытие */}
              <div className="flex items-center mb-4">
                 <input
                    id="earlyClosure"
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                    checked={earlyClosure}
                    onChange={(e) => setEarlyClosure(e.target.checked)}
                 />
                 <label className="ml-3 text-gray-700 text-sm" htmlFor="earlyClosure">
                    Досрочное закрытие вклада
                 </label>
              </div>

              {earlyClosure && (
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 ml-8">
                    <div>
                       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="earlyClosureRate">
                          Ставка при досрочном закрытии, %
                       </label>
                       <input
                          id="earlyClosureRate"
                          type="number"
                          step="0.01"
                          className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-blue-100 bg-opacity-50"
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
                          className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-blue-100 bg-opacity-50"
                          value={earlyClosureDate}
                          onChange={(e) => setEarlyClosureDate(e.target.value)}
                       />
                    </div>
                 </div>
              )}

           </div>
        </div>

        {/* Result Block */}
        <div className="bg-blue-800 text-white p-6 rounded-xl mb-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div>
                 <div className="text-sm opacity-80">Сумма в конце срока</div>
                 <div className="text-2xl font-bold">{depositAmount} ₽</div>{/* Placeholder */}
              </div>
              <div>
                 <div className="text-sm opacity-80">Доход</div>
                 <div className="text-2xl font-bold">50 000 ₽</div>{/* Placeholder */}
              </div>
              {capitalization && (
                 <div>
                    <div className="text-sm opacity-80">Эффективная ставка</div>
                    <div className="text-2xl font-bold">5.12 %</div>{/* Placeholder */}
                 </div>
              )}
           </div>
        </div>

        {/* Graph Button */}
        <div className="text-center">
          <button className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline text-lg">
            График начислений
          </button>
        </div>

      </div>
    </div>
  );
};

export default DepositCalculator;
