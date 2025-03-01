import React from 'react'
import { type FC } from 'react'
import { Retool } from '@tryretool/custom-component-support'
import { Pill } from '../pill/Pill'

import styles from './Card.module.scss'

export const Card: FC = () => {
  const [id] = Retool.useStateString({ name: 'id' })
  const [name] = Retool.useStateString({ name: 'name'})
  const [image] = Retool.useStateString({ name: 'image' })
  const [types] = Retool.useStateArray({
    name: 'types',
    initialValue: []
  })
  const [stats] = Retool.useStateArray({
    name: 'stats',
    initialValue: []
  })

  return (
    <div>
      <div>
        <p>{id}</p>
        <h1>{name}</h1>
      </div>
      
      <div>
        
      </div>
    </div>
  )
}
