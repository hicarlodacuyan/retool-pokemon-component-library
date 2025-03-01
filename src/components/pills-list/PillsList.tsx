import React from 'react'
import { type FC } from 'react'
import { Retool } from '@tryretool/custom-component-support'
import styles from './PillsList.module.scss'

interface Skill {
  backgroundColor: string
  label: string
}

export const PillsList: FC = () => {
  const [skills] = Retool.useStateArray({
    name: 'skills'
  }) as unknown as Skill[] 
  
  return (
    <ul className={styles.pills}>
      {Array.isArray(skills) && skills.map((skill: Skill, index: number) => (
        <li key={index}>
          <span className={styles.pill} style={{ backgroundColor: skill.backgroundColor }}>{skill.label}</span>
        </li>
      ))}
    </ul>
  )
}
