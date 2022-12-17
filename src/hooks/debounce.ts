import { useEffect, useState } from 'react'

export default function useDebounce(
  value: string,
  delay: number = 300
): string {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const hadler = setTimeout(() => {
      setDebounced(value)
    }, delay)
    return () => clearTimeout(hadler)
  }, [value, delay])
  return debounced
}
