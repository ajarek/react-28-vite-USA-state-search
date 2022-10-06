import { useState } from 'react'
import Header from './components/Header'
import { useFetch } from './components/useFetch'

function App() {
  const [valueSearch, setValueSearch] = useState('')

  const { data, error } = useFetch('src/assets/states.json')

  const InputSearch = (e) => {
    setValueSearch(e.target.value)
  }
  return (
    <div className={'App'}>
      <Header
        onChange={InputSearch}
        value={valueSearch}
      />
      <div>
        {data && data.map((el) => (
          <p
            key={el.admission_number}
          >
            {el.state}

          </p>
        ))}

      </div>
    </div>
  )
}

export default App
