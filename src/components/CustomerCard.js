import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import classNames from 'classnames'

import {
    Card,
    CardHeader,
    CardActions,
    Avatar,
    IconButton,
} from '@mui/material'

import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'


const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345,
    },
}))

const CustomerCard = ({
    name,
    lastname,
    email,
    avatar,
    className,
}) => {
    const classes = useStyles()

  return (
    <Card className={classNames(className, classes.root)}>
        <CardHeader
            avatar={
                <Avatar aria-label="recipe" src={avatar}>
                    R
                </Avatar>
            }
            title={`${name} ${lastname}`}
            subheader={email}
        />
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
        </CardActions>
    </Card>
  )
}

export default CustomerCard