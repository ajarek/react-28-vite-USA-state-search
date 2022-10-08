import React from 'react'

export function State({
  onClick, nameState, srcSeal, srcSkyline, srcMap, capital, population, admission,
}) {
  return (
    <div
      className={'wrapper-state'}
    >
      <button
        type={'button'}
        className={'btn-home'}
        onClick={onClick}
      >
        🔙
      </button>
      <div className={'header-state'}>
        <h1>{nameState}</h1>
        <div className={'seal'}><img src={srcSeal} alt={'seal'} /></div>
      </div>
      <div className={'img'}>
        <img src={srcSkyline} alt={'skyline'} />
        <img src={srcMap} alt={'map'} />
      </div>
      <div className={'info'}>
        <p>
          Capital city:
          {' '}
          {capital}
        </p>
        <p>
          Population:
          {' '}
          {population}
        </p>
        <p>
          Admission date:
          {' '}
          {admission}
        </p>
      </div>
    </div>

  )
}

export default State
