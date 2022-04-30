import React from 'react'
import Orders from 'components/analytics/orders/Orders'
import { useLocation } from 'react-router-dom'

function OrdersPage() {

	const location = useLocation()
	console.log(location.state)

  return (
    <div>
			<Orders />
		</div>
  )
}

export default OrdersPage