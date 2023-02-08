import axios from "axios"
import React, { useEffect, useState } from "react"
import { Grid, Header } from "semantic-ui-react"

export const Footer = () => {
  const [advice, setAdvice] = useState()
  const makeApiCall = async () => {
    //     const response = await fetch(
    //
    //     )
    //     var data = await response.json()
    //     setAdvice(data.slip.advice)
    axios
      .get(
        process.env.REACT_APP_API_PROTOCOL + process.env.REACT_APP_API_HOST + "/advice"
      )
      .then(response => setAdvice(response.data.slip.advice))
  }
  useEffect(() => {
    makeApiCall()
  })
  return (
    <Grid.Row>
      <Grid.Column width={16} textAlign="center">
        <Header>{advice}</Header>
      </Grid.Column>
    </Grid.Row>
  )
}
