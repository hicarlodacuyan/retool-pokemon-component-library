import React from 'react'
import { type FC } from 'react'
import { Retool } from '@tryretool/custom-component-support'

import styles from './Progress.module.scss'

export const Progress: FC = () => {
  const [label] = Retool.useStateString({ name: 'label' })
  const [color] = Retool.useStateString({ name: 'color' })
  const [value] = Retool.useStateString({ name: 'value' })

  const percentage = Math.max(0, Math.min(100, Number(value)));

  return (
    <div className={styles.progressContainer}>
      <span className={styles.label}>{label}</span>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${percentage}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  )
}
