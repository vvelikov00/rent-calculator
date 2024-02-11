import { Input } from '../Input'
import { IntegerInput } from '../IntegerInput'
import { ReactNode, useState } from 'react'

export const Rent = (): ReactNode => {
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
            const Rr = (event.target as any).Rr.value
            const r = (event.target as any).r.value
            const n = (event.target as any).n.value
            const i = (event.target as any).i.value / 100
            if (Rr && r && n && i) {
              const Sn = (Rr * ((1 + i) ** n - 1)) / ((1 + i) ** r - 1)
              setCalculated(Sn.toFixed(2))
            }
          }}
        >
          <Input
            label="Член на рентата изплащана след r години"
            id="Rr"
            leftItem="Rr="
            rightItem="лв."
            type="number"
            required
          />
          <IntegerInput
            id="r"
            label="Период на рентата"
            leftItem="r="
            rightItem="г."
            type="number"
            required
          />
          <IntegerInput
            id="n"
            label="Срок на рентата"
            leftItem="n="
            rightItem="г."
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
