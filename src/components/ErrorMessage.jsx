import React from 'react'

export function ErrorMessage({ children }) {
  return (
    <div
      className={'wrapper-message'}
    >
      <div
        className={'message'}
      >
        {children}
      </div>
    </div>
  )
}

export default ErrorMessage
