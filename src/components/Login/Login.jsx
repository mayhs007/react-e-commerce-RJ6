import React, { useEffect, useState } from "react"
import { Button, Form, Grid, Header, Segment, Message } from "semantic-ui-react"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const API_URL =
    process.env.REACT_APP_API_PROTOCOL +
    process.env.REACT_APP_API_HOST +
    process.env.REACT_APP_API_ENDPOINT
  const [email, setEmail] = useState("eve.holt@reqres.in")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  // const [isAuthenticated, setIsAuthenticated] = useState(Cookies.get("token"))
  const navigate = useNavigate()
  const onSubmit = event => {
    event.preventDefault()
    makeAPICall(email, password)
  }
  useEffect(() => {
    if (Cookies.get("isAuthenticated") === true) {
      navigate("/shop")
    }
  })
  const makeAPICall = async (email, password) => {
    const requestBody = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
    const response = await fetch(API_URL + "/login", requestBody)
    const data = await response.json()
    if (data && data.token) {
      Cookies.set("token", data.token, { expires: 7 })
      setError("")
      navigate("/shop")
    } else if (data.error) {
      setError(data.error)
    }
  }

  return (
    <Grid verticalAlign="middle">
      <Grid.Row centered>
        <Grid.Column width="4" verticalAlign="middle">
          <Header as={"h2"} color={"blue"}>
            Log-in
          </Header>
          <Form size="large">
            <Segment>
              <Form.Input
                fluid
                icon={"mobile alternate"}
                iconPosition="left"
                placeholder="Phone number"
                onChange={event => {
                  setEmail(event.target.value)
                }}
                value={email}
              ></Form.Input>
              <Form.Input
                icon={"key"}
                placeholder="password"
                fluid
                iconPosition="left"
                onChange={event => {
                  setPassword(event.target.value)
                }}
                value={password}
              ></Form.Input>
              <Button color={"blue"} onClick={onSubmit}>
                Login
              </Button>
              {error ? <Message negative>{error}</Message> : <></>}
            </Segment>
          </Form>
          <Message info>
            New to us? <a href="#">SignUp</a>
          </Message>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
export default Login
