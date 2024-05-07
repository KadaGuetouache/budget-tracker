import React from 'react'
import { SpinnerIcon } from '@/constants/icons'

const loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <SpinnerIcon className="w-20 h-20 animate-spin" />
    </div>
  )
}

export default loading
