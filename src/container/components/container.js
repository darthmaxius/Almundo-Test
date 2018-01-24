import React from 'react'

const Container = (props) => {
  return (
    <main className='container-fluid'>
      {props.children}
    </main>
  )
}

export default Container
