import { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import { makeStyles } from '@mui/styles'

import CustomerCard from '../components/CustomerCard'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,    
    },
    card: {
        margin: theme.spacing(2),
        background: 'red',
    }
}))

const Customers = () => {
    const classes = useStyles()
    const [customers, setCustomers] = useState([])

    console.log(customers)
    
    useEffect(() => {
        axios('https://reqres.in/api/users')
            .then(response => {
                const { data } = response.data
                setCustomers(data)
            })
    }, [])

    return (
        <>
            <h1>Customers</h1>
            <Grid container>
                {
                    customers.map(item => (
                        <Grid xs={12} md={4}>
                            <CustomerCard 
                                name={item.first_name}
                                lastname={item.last_name}
                                email={item.email}
                                avatar={item.avatar}
                                className={classes.card}
                            />
                        </Grid>
                    ))
                }
            </Grid>     
        </>
    )
}
  
export default Customers