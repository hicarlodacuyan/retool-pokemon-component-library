import React from 'react'
import { type FC } from 'react'
import { Retool } from '@tryretool/custom-component-support'
import styles from './ProgressList.module.scss'

interface Stat {
  label: string
  value: number
  color: string
}

export const ProgressList: FC = () => {
  const [stats] = Retool.useStateArray({
    name: 'stats'
  }) as unknown as Stat[]

  return (
    <ul>
      {Array.isArray(stats) &&
        stats.map((stat: Stat, index: number) => {
          const percentage = Math.max(0, Math.min(100, Number(stat.value)))

          return (
            <li key={index}>
              <div className={styles.progressContainer}>
                <span className={styles.label}>{stat.label}</span>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${percentage}%`, backgroundColor: stat.color }}
                  ></div>
                </div>
              </div>
            </li>
          )
        })}
    </ul>
  )
}
