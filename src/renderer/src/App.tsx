import { useMemo, useState } from 'react'
import { Post } from './components/sections/Post'
import { Pre } from './components/sections/Pre'
import { Period } from './components/sections/Period'
import { PTerm } from './components/sections/PTerm'
import { Rent } from './components/sections/Rent'
import { Section, Sidebar } from './components/sidebar/Sidebar'

function App(): JSX.Element {
  const [openedSection, setOpenedSection] = useState<Section>('')

  const getSection = useMemo(() => {
    switch (openedSection) {
      case 'post':
        return <Post />
      case 'pre':
        return <Pre />
      case 'period':
        return <Period />
      case 'p':
        return <PTerm />
      case 'more-than-1-year':
        return <Rent />
      default:
        return ''
    }
  }, [openedSection])

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100vw',
          height: '100vh',
          padding: 0,
          margin: 0
        }}
      >
        <div
          style={{
            padding: 0,
            margin: 0,
            paddingTop: '20px',
            width: 'fit-content'
          }}
        >
          <Sidebar openedSection={openedSection} setOpenedSection={setOpenedSection} />
        </div>
        {!!openedSection && (
          <div
            style={{
              padding: 0,
              margin: 0,
              height: '100%',
              width: '100%',
              backgroundColor: '#f0f0f0'
            }}
          >
            {getSection}
          </div>
        )}
      </div>
    </>
  )
}

export default App
