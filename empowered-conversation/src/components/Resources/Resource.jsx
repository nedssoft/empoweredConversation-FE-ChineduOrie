import React from 'react'
import propTypes from 'prop-types'

import { Container, Author, Text } from './Styles'

export default function Resource({ resource }) {

  return (
    <Container>
      <h3>{resource.title}</h3>
      <Text>{resource.textbody}</Text>
      <Author>{resource.author}</Author>
    </Container>
  )
}

Resource.propTypes = {
  resource: propTypes.objectOf(propTypes.string).isRequired
}