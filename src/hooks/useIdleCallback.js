import {useEffect, useState} from 'react'

export default function useIdleCallback() {
  const [isIdle, setIsIdle] = useState(false)

  useEffect(() => {
    window.requestIdleCallback(() => {
        console.log('idel!');
        setIsIdle(true)
    })
    return () => setIsIdle(false)
  }, [])

  return isIdle

}

