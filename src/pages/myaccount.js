import React, { useState, useEffect, useContext } from 'react'
import { navigate } from 'gatsby'
import SEO from '../components/SEO'
import OrderItemList from '../components/OrderItemList'
import Layout from '../components/Layout'
import AuthContext from '../components/Context/AuthContext'
import axios from "axios";
import Config from "../Api/Config"

import { getOrders } from '../../lib/moltin'
import { getUserProfile } from "../Api";
import { Card, Image } from 'semantic-ui-react'

const MyAccount = ({ location }) => {
  const [loading, setLoading] = useState(true)
  const [orders, setOrders] = useState([])
  const [included, setIncluded] = useState([])
  const [meta, setMeta] = useState({})
  const [user, setUser] = useState(null)
  const { token } = useContext(AuthContext)

  useEffect(() => {
    if (!token) {
      navigate('/login/')
    } else {
      getUserProfile()
        .then((res) => {
          console.log("USER DATA !", res.data)
          setUser(res.data)
          setLoading(false)
        })
        .catch((error) => {
          console.log("ERROR FETCHING USER DATA !", error.data.message)
        })
      // axios.get(`${Config.API_END_POINT}/user/me`) //Instance is not used here intentionally
      // .then((res) => {
      //   console.log("USER DATA !", res.data)
      //   setUser(res.data)
      //   setLoading(false)
      // })
      // .catch((error) => {
      //   // console.log("ERROR FETCHING USER DATA !", error.data.message)
      // })
    }
    // getOrders(token)
    //   .then(({data, meta, included}) => {
    //     const orders = data.map(order => ({
    //       ...order,
    //     }))
    //     setLoading(false)
    //     setMeta(meta)
    //     setOrders(orders)
    //     setIncluded(included)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  }, [token])

  return (
    <Layout location={location}>
      <SEO title="My Account" />
      {!!user && (
        <h3>
          Welcome {user.email}!
        </h3>
      )}
      <OrderItemList
        meta={meta}
        orders={orders}
        loading={loading}
        included={included}
      />
    </Layout>
  )
}
export default MyAccount
