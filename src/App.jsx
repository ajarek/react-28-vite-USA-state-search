import { useState } from 'react'
import Header from './components/Header'
import { useFetch } from './components/useFetch'

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
    setSingleState((singleState) => getDataId)
    console.log(singleState)
  }

  return (
    <div className={'App'}>

      {singleState
        ? (
          <div
            className={'wrapper-state'}
          >
            <div className={'header-state'}>
              <h1>{singleState.state}</h1>
              <div className={'seal'}><img src={singleState.state_seal_url} alt={'seal'} /></div>
            </div>
            <div className={'img'}>
              <img src={singleState.skyline_background_url} alt={'skyline'} />
              <img src={singleState.map_image_url} alt={'map'} />
            </div>
            <div className={'info'}>
              <p>
                Capital city:
                {' '}
                {singleState.capital_city}
              </p>
              <p>
                Population:
                {' '}
                {singleState.population}
              </p>
              <p>
                Admission date:
                {' '}
                {singleState.admission_date}
              </p>
            </div>
          </div>
        )
        : (
          <>
            <Header
              onChange={InputSearch}
              value={valueSearch}
            />

            <div className={'wrapper'}>
              {data && data.map((el) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                <div
                  className={'item'}
                  key={el.admission_number}
                  onClick={showState}
                >
                  <img src={el.landscape_background_url} alt={'landscape'} id={el.admission_number} />
                  <p className={'name-state'}>{el.state}</p>

                </div>
              ))}

            </div>
          </>
        )}

    </div>
  )
}

export default App
