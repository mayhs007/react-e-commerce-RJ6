import React, { useState } from "react"
import { Button, Form, Grid, Header, Image, Segment, Message } from "semantic-ui-react"
import Cookies from "js-cookie"
import { Link, Navigate, useNavigate } from "react-router-dom"

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("7010534782")
  const [otp, setOtp] = useState("123")
  const [isAuthenticated, setIsAuthenticated] = useState(Cookies.get("isAuthenticated"))
  const navigate = useNavigate()
  const onSubmit = event => {
    event.preventDefault()
    if (otp === "123" && phoneNumber === "7010534782") {
      Cookies.set("isAuthenticated", true, { expires: 7 })
      Cookies.set("phoneNumber", phoneNumber, { expires: 7 })
      Cookies.set("otp", otp, { expires: 7 })
      setIsAuthenticated(isAuthenticated, true)
      navigate("/shop")
    }
  }
  if (Cookies.get("isAuthenticated")) {
    navigate("/shop")
    return <></>
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
                  setPhoneNumber(event.target.value)
                }}
                value={phoneNumber}
              ></Form.Input>
              <Form.Input
                icon={"key"}
                placeholder="OTP"
                fluid
                iconPosition="left"
                onChange={event => {
                  setOtp(event.target.value)
                }}
                value={otp}
              ></Form.Input>
              <Button color={"blue"} onClick={onSubmit}>
                Login
              </Button>
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
