import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// ------------------------------ Styling ------------------------------- //

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



// ------------------------------ Cards for Items ------------------------------- //

const ItemCard = ({ data }) => {
  const classes = useStyles(); 

// Filter data by removing items that don't have a name
  const filteredData = ( arr ) => {
    let required = arr.filter(( obj ) => {
      return obj.name;
    });
    return required;
  };

  // Passing in data from state to the filterData function
  let filteredItems = filteredData(data);

  // Sorting filteredItems by listId and name
  filteredItems.sort((a, b) => {
    return a.listId - b.listId ||a.name.localeCompare(b.name, 'en', { numeric: true })
  });

  return (
    <>
    {filteredItems.map(( item, i ) => (
    <Card className={classes.root} key={`item_${i}`}>
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