import { Input } from '../Input'
import { IntegerInput } from '../IntegerInput'
import { ReactNode, useState } from 'react'

export const PTerm = (): ReactNode => {
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
            const p = (event.target as any).p.value
            const R = (event.target as any).R.value
            const i = (event.target as any).i.value / 100
            const n = (event.target as any).n.value
            if (p && R && i && n) {
              const Sn = (R * ((1 + i) ** n - 1)) / (p * ((1 + i) ** (i / p) - 1))
              setCalculated(Sn.toFixed(2))
            }
          }}
        >
          <IntegerInput
            id="p"
            label="Срок на рентата"
            leftItem="p="
            rightItem="м."
            type="number"
            required
          />
          <Input
            id="R"
            label="Сума на рентните плащания"
            leftItem="R="
            rightItem="лв."
            type="number"
            required
          />
          <Input
            id="i"
            label="Годишна лихва"
            leftItem="i="
            rightItem="%"
            type="number"
            max={100}
            step={0.01}
            min={0}
            required
          />
          <IntegerInput
            id="n"
            label="Продължителност на рентните плащания"
            leftItem="n="
            rightItem="г."
            type="number"
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
      {calculated && (
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
