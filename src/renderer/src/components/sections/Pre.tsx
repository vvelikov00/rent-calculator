import { Input } from '../Input'
import { IntegerInput } from '../IntegerInput'
import { ReactNode, useState } from 'react'

export const Pre = (): ReactNode => {
  const [calculated, setCalculated] = useState<string>()

  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      <div
        style={{
          width: 'max-content'
        }}
      >
        <form
          onSubmit={(event) => {
            event.preventDefault()
            const duration = (event.target as any).duration.value
            const sum = (event.target as any).sum.value
            const interest = (event.target as any).interest.value / 100
            if (duration && sum && interest) {
              const q = interest + 1
              const Sn = ((sum * (q ** duration - 1)) / (q - 1)) * q
              setCalculated(Sn.toFixed(2))
            }
          }}
        >
          <IntegerInput
            id="duration"
            label="Продължителност на рентните плащания"
            leftItem="n="
            rightItem="г."
            type="number"
            required
          />
          <Input
            id="sum"
            label="Сума на рентните плащания"
            leftItem="R="
            rightItem="лв."
            type="number"
            required
          />
          <Input
            id="interest"
            label="Годишна лихва"
            leftItem="i="
            rightItem="%"
            type="number"
            max={100}
            step={0.01}
            min={0}
            required
          />
          <button
            type="submit"
            style={{
              width: '100%'
            }}
          >
            Пресметни
          </button>
        </form>
      </div>
      {!!calculated && (
        <div
          style={{
            width: 'max-content',
            marginLeft: '40px'
          }}
        >
          <Input
            id="sn"
            label="Нарастнала сума"
            leftItem="Sn="
            rightItem="лв."
            type="number"
            value={calculated}
            disabled
          />
        </div>
      )}
    </div>
  )
}
