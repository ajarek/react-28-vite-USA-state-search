import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`,
          )
        }
        return res.json()
      })
      .then((res) => {
        setData(res)
        setError(null)
      })
      .catch((err) => {
        setError(err.message)
        setData(null)
      })
  }, [url])
  return { data, error }
}

export default useFetch
