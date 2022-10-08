import React from 'react'

function Header({ onChange, value, focus }) {
  return (
    <div
      className={'header'}
    >
      <div className={'logo'}>
        <img src={'src/assets/logo-header.png'} alt={''} />
      </div>
      <div className={'title'}>US state search engine</div>
      <div className={'search'}>
        <input
          type={'search'}
          name={''}
          id={''}
          placeholder={'...name of the state'}
          onChange={onChange}
          value={value}
          ref={focus}
        />
      </div>
    </div>
  )
}

export default Header
