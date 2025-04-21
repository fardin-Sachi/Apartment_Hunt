import React from 'react'

export default function Button({title,classes}) {
  return (
    <div>
        <button className={classes}>
            {title}
        </button>
    </div>
  )
}
