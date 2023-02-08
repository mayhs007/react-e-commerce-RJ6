import React, { useEffect, useReducer, useState } from "react"
import { useSearchParams } from "react-router-dom"
import {
  Loader,
  Image,
  Item,
  Grid,
  Segment,
  Pagination,
  Button,
  Dropdown,
} from "semantic-ui-react"
const initalState = {
  page: 1,
  totalPages: 1,
  limit: 5,
  isLoading: false,
  users: [],
}
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PAGE": {
      return { ...state, page: action.value }
    }
    case "SET_TOTAL": {
      return { ...state, totalPages: action.value }
    }
    case "SET_LIMIT": {
      return { ...state, limit: action.value }
    }
    case "SET_IS_LOADING": {
      return { ...state, isLoading: action.value }
    }
    case "SET_USERS": {
      return { ...state, users: action.value }
    }
    default:
      return state
  }
}
const Users = () => {
  const [state, dispatch] = useReducer(reducer, initalState)
  const [searchParams, setSearchParams] = useSearchParams()

  const API_URL =
    process.env.REACT_APP_API_PROTOCOL +
    process.env.REACT_APP_API_HOST +
    process.env.REACT_APP_API_ENDPOINT

  const getUsers = async () => {
    dispatch({ type: "SET_IS_LOADING", value: true })
    const response = await fetch(
      API_URL + "/users?page=" + state.page + "&per_page=" + state.limit
    )
    const data = await response.json()
    dispatch({ type: "SET_IS_LOADING", value: false })
    dispatch({ type: "SET_USERS", value: data.data })
    dispatch({ type: "SET_TOTAL", value: data.total_pages })
  }
  useEffect(() => {
    const params = Object.fromEntries(searchParams)
    // [[page,1], [limit , 5 ]]
    setSearchParams({ page: params.page, limit: params.limit })
    dispatch({ type: "SET_PAGE", value: params.page })
    dispatch({ type: "SET_LIMIT", value: params.limit })
  }, [searchParams])
  useEffect(() => {
    getUsers()
    setSearchParams({ page: state.page, limit: state.limit })
  }, [state.page, state.limit])

  const renderCards = () => {
    if (state.isLoading) {
      return (
        <Loader active inline>
          Loading....
        </Loader>
      )
    } else if (state.users.length > 0) {
      return state.users.map(user => (
        <Item key={user.id}>
          <Image src={user.avatar} size="tiny" avatar rounded></Image>
          <Item.Content>
            <Item.Header>
              {user.first_name} {user.last_name}
            </Item.Header>
            <Item.Meta>{user.email}</Item.Meta>
          </Item.Content>
        </Item>
      ))
    }
  }
  let options = [
    { key: "1", text: "1", value: 1 },
    { key: "2", text: "2", value: 2 },
    { key: "3", text: "3", value: 3 },
    { key: "4", text: "4", value: 4 },
    { key: "5", text: "5", value: 5 },
    { key: "6", text: "6", value: 6 },
  ]
  return (
    <React.Fragment>
      <Grid.Row centered>
        <Grid.Column width="14">
          <Button.Group color="teal" floated="right">
            <Button>Limit {state.limit}</Button>
            <Dropdown
              className="button icon"
              options={options}
              trigger={<></>}
              value={state.value}
              onChange={(e, { value }) => {
                dispatch({ type: "SET_PAGE", value: 1 })
                dispatch({ type: "SET_LIMIT", value: value })
              }}
            />
          </Button.Group>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column width={"14"}>
          <Segment>
            <Item.Group divided>{renderCards()}</Item.Group>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column width={"14"}>
          <Pagination
            activePage={state.page}
            totalPages={state.totalPages}
            onPageChange={(e, { activePage }) => {
              dispatch({ type: "SET_PAGE", value: activePage })
            }}
          ></Pagination>
        </Grid.Column>
      </Grid.Row>
    </React.Fragment>
  )
}
export default Users
