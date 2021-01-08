import React from 'react'
import YouTube from 'react-youtube'

type Props = {
  id: string
}

export const MoviePlayer: React.FC<Props> = ({ id }) => {
  const opts = {
    width: '720',
    height: '360'
  }
  return <YouTube videoId={id} opts={opts} />
}
