import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-8'>
      <h1 className='text-bold text-2xl'>Add Post:</h1>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost