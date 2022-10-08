import { useState } from 'react'
import Header from './components/Header'
import { useFetch } from './components/useFetch'
import { Item } from './components/Item'
import { State } from './components/State'

export function App() {
  const [valueSearch, setValueSearch] = useState('')
  const [singleState, setSingleState] = useState('')
  const { data, error } = useFetch('src/assets/states.json')

  const InputSearch = (e) => {
    setValueSearch(e.target.value)
  }
  const showState = (e) => {
    // eslint-disable-next-line no-return-assign, no-param-reassign
    const getDataId = data.find((dat) => dat.admission_number === Number(e.target.id))
    setSingleState(getDataId)
  }
  const switchView = () => {
    setSingleState('')
  }

  return (
    <div className={'App'}>

      {singleState
        ? (
          <State
            type={'button'}
            className={'btn-home'}
            onClick={switchView}
            nameState={singleState.state}
            srcSeal={singleState.state_seal_url}
            srcSkyline={singleState.skyline_background_url}
            srcMap={singleState.map_image_url}
            capital={singleState.capital_city}
            population={singleState.population}
            admission={singleState.admission_date}
          />
        )
        : (
          <>
            <Header
              onChange={InputSearch}
              value={valueSearch}
            />
            <div className={'wrapper'}>
              {data && data.map((el) => (
                <Item
                  key={el.state}
                  onClick={showState}
                  src={el.landscape_background_url}
                  alt={'landscape'}
                  id={el.admission_number}
                  state={el.state}
                />
              ))}
            </div>
          </>
        )}
    </div>
  )
}

export default App
