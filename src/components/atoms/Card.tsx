import React from 'react'

type Props = {
  title: string
}

export const Card: React.FC<Props> = ({ title }) => {
  return <div>{title}</div>
}
