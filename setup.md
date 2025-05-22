# 📦 Setup проекта "Калькулятор вкладов"

Создай структуру проекта Next.js с поддержкой TypeScript и Tailwind CSS.

## Страницы

Создай следующие страницы в `pages/`:
- `index.tsx` — лендинг со ссылками на калькуляторы
- `deposit.tsx` — страница "Калькулятор вкладов"
- `borrower-test.tsx` — тест заемщика
- `asset-yield.tsx` — калькулятор доходности по активам

## Компоненты

Создай базовые компоненты в `components/`:
- `CalculatorForm.tsx` — форма ввода данных
- `ResultBlock.tsx` — блок с итоговой суммой и доходом
- `PaymentsTable.tsx` — таблица помесячных начислений

## Логика

Создай файл `calculateDeposit.ts` в `utils/` для расчёта вклада (будет промт отдельно)

## Стили

Tailwind CSS подключён. Использовать utility-классы (`rounded-xl`, `bg-white`, `p-4`, `shadow-lg` и т.д.)

## Промты

Создай папку `prompts/` и оставь в ней пустые `.md` файлы:
- `deposit-ui.md`
- `deposit-logic.md`
- `deposit-table.md`
- `seo.md`
- `styles.md`

## SEO

Для страницы `deposit.tsx` — прописать `<Head>` с title, description и открытым Graph изображением.
