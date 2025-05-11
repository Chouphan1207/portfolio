'use client'

import Lottie, { Options } from 'react-lottie'

interface LottieClientProps {
  options: Options
  height?: number | string
  width?: number | string
}

const LottieClient = ({ options, height, width }: LottieClientProps) => {
  return <Lottie options={options} height={height} width={width} />
}

export default LottieClient
