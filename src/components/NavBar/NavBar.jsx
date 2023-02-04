import Cookies from "js-cookie"
import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Icon, Label, Menu, Radio } from "semantic-ui-react"
import ThemeContext from "../../context/ThemeContext"
import "./NavBar.css"
const NavBar = ({ carts, setIsDarkTheme }) => {
  const isDarkTheme = useContext(ThemeContext)
  const navigate = useNavigate()
  return (
    <Menu attached="top" fluid inverted={isDarkTheme}>
      <Menu.Menu position="right">
        <Menu.Item
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/shop")
          }}
        >
          <Icon style={{ cursor: "pointer" }} name="home" inverted={isDarkTheme}></Icon>
        </Menu.Item>
        <Menu.Item
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/cart")
          }}
        >
          <Icon name="shopping cart" inverted={isDarkTheme}></Icon>
          <Label>{carts ? carts.length : 0}</Label>
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            Cookies.set("isAuthenticated", false, { expires: 7 })
            navigate("/login")
          }}
        >
          <Icon name="sign-out" inverted={isDarkTheme}></Icon>
        </Menu.Item>
        <Menu.Item>
          <Icon name={"sun"} inverted={isDarkTheme}></Icon>
          <Radio
            toggle
            checked={isDarkTheme}
            onClick={() => {
              setIsDarkTheme(!isDarkTheme)
            }}
          ></Radio>
          <Icon name={"moon"} inverted={isDarkTheme}></Icon>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}
export default NavBar
