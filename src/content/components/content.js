import React from 'react'
import './content.css'

const Content = (props) => {
  return (
    <main className='container-fluid Content'>
      {props.children}
    </main>
  )
}

export default Content
