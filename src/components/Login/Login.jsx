import React, { useState } from "react"
import { Button, Form, Grid, Header, Image, Segment, Message } from "semantic-ui-react"
import Cookies from "js-cookie"
import { Link } from "react-router-dom"

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState("")
  const onSubmit = () => {
    if (otp === "123" && phoneNumber === "7010534782") {
      Cookies.set("isAuthenticated", true, { expires: 7 })
      Cookies.set("phoneNumber", phoneNumber, { expires: 7 })
      Cookies.set("otp", otp, { expires: 7 })
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
              <Button color={"blue"} onClick={onSubmit} as={Link} to="/list">
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
