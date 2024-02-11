import { Input } from '../Input'
import { ReactNode, useState } from 'react'

export const Period = (): ReactNode => {
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
            const Sn = (event.target as any).Sn.value
            const R = (event.target as any).R.value
            const i = (event.target as any).i.value / 100
            if (Sn && R && i) {
              const q = i + 1
              const n = Math.log((Sn / R) * (q - 1) + 1) / Math.log(q)
              setCalculated(n.toFixed())
            }
          }}
        >
          <Input
            label="Нарастнала сума"
            id="Sn"
            leftItem="Sn="
            rightItem="лв."
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
        <div style={{ marginLeft: '40px', width: 'max-content' }}>
          <Input
            label="Продължителност на рентните плащания"
            id="n"
            leftItem="n="
            rightItem="г."
            type="number"
            value={calculated}
            disabled
          />
        </div>
      )}
    </div>
  )
}
