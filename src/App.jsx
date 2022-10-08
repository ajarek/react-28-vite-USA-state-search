import {
  useState, useMemo, useRef, useEffect,
} from 'react'
import Header from './components/Header'
import { useFetch } from './components/useFetch'
import { Item } from './components/Item'
import { State } from './components/State'
import { Loading } from './components/Loading'
import { ErrorMessage } from './components/ErrorMessage'

export function App() {
  const searchInput = useRef(null)
  const [valueSearch, setValueSearch] = useState('')
  const [singleState, setSingleState] = useState('')
  const { data, error, pending } = useFetch('src/assets/states.json')

  useEffect(() => {
    searchInput.current.focus()
  }, [])

  const filteredData = useMemo(() => data?.filter((item) => item.state.toLowerCase()
    .includes(valueSearch.toLowerCase())), [data, valueSearch])

  const InputSearch = (e) => {
    setValueSearch(e.target.value)
  }
  const showState = (e) => {
    const getDataId = data.find((dat) => dat.admission_number === Number(e.target.id))
    setSingleState(getDataId)
  }
  const switchView = () => {
    setSingleState('')
  }

  return (
    <div className={'App'}>
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
      {pending
        ? <Loading />
        : null}
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
              focus={searchInput}
            />
            <div className={'wrapper'}>
              {filteredData && filteredData.map((el) => (
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
