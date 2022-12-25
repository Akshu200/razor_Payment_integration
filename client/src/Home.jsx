import React from 'react'
import {Box, Stack} from '@chakra-ui/react'
import Card from './Card'
import axios from 'axios'

const Home = () => {

    const checkoutHandler =async(amount)=>{


            const {data:{key}} = await axios.get('http://www.localhost:8000/api/getkey')

            const {data:{order}} = await axios.post('http://localhost:8000/api/checkout', {
                amount
            })
            const options = {
                key, // your can  also write-> key:key  ,   Enter the Key ID generated from the Dashboard
                amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: "INR",
                name: "akshay",
                description: "Razorpay Test Transaction",
                image: "https://example.com/your_logo",
                order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                callback_url: "http://localhost:8000/api/paymentverification",
                prefill: {
                    name: "Gaurav Kumar",   //sample name
                    email: "gaurav.kumar@example.com",  //sample email id
                    contact: "9999999999"   // sample contact
                },
                notes: {
                    "address": "Razorpay Corporate Office"
                },
                theme: {
                    "color": "#297BFF"
                }
            };
            const razor = new window.Razorpay(options);
            
            razor.open();

            
    }

  return (
    <Box>
    
    <Stack h={'100vh'} alignItems='center' justifyContent='center' direction={['column','row']}>
    <Card amount={5000} img={"https://cdn.shopify.com/s/files/1/1684/4603/products/MacBookPro13_Mid2012_NonRetina_Silver.png"} checkoutHandler={checkoutHandler}/>
    <Card amount={3000} img={"http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"} checkoutHandler={checkoutHandler} />
    </Stack>
    </Box>
  )
}

export default Home
