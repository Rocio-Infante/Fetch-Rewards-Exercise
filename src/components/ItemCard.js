import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ItemCard = ({ data }) => {
  const classes = useStyles(); 

  return (
    <>
    {data.map(( item, i ) => (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          ListId: {item.listId}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Name: {item.name}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Id: {item.id}
        </Typography>
      </CardContent>
    </Card>
    ))}
    </>
  );
};

export default ItemCard;