import type { FormEvent } from 'react'

interface CalculatorFormProps {
  onSubmit: (data: Record<string, unknown>) => void
}

export const CalculatorForm = ({ onSubmit }: CalculatorFormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Implement form submission
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Form fields will be added later */}
    </form>
  )
} 