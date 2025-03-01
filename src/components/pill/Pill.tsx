import React from 'react'
import { type FC } from 'react'
import { Retool } from '@tryretool/custom-component-support'

import styles from './Pill.module.scss'

export const Pill: FC = () => {
  const [label] = Retool.useStateString({ name: 'label' })
  const [backgroundColor] = Retool.useStateString({ name: 'backgroundColor' })

  return (
    <span className={styles.pill} style={{ backgroundColor: backgroundColor }}>{label}</span>
  )
}
