import React from 'react'

export function Item({
  keyId, onClick, src, alt, id, state,
}) {
  return (
    <div
      className={'item'}
      key={keyId}
      onClick={onClick}
      aria-hidden={'true'}
    >
      <img src={src} alt={alt} id={id} />
      <p className={'name-state'}>{state}</p>

    </div>
  )
}

export default Item
