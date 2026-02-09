import React from 'react'
import { createRoot } from 'react-dom/client'
import Counter from '../components/Counter'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('react-root')

  if (container) {
    const root = createRoot(container)
    root.render(<Counter initialCount={0} />)
    console.log('React component mounted successfully!')
  }
})
