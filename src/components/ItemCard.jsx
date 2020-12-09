import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// ------------------------------ Styling ------------------------------- //

const useStyles = makeStyles({
  root: {
    maxWidth: 240,
    flexGrow: 1,
    margin: 10,
    padding: 0,
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: 55,
  },
  title: {
    fontSize: 14,
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
    return a.listId - b.listId || a.name.localeCompare(b.name, 'en', { numeric: true })
  });

  return (
    <div className={classes.cardContainer}>
    {filteredItems.map(( item, i ) => (
      <Card cy-data="card" className={classes.root} key={`item_${i}`}>
        <CardContent>
          <Typography cy-data="listId" className={classes.title} color="textSecondary" gutterBottom>
            ListId: {item.listId}
          </Typography>
          <Typography cy-data="title" className={classes.title} color="textSecondary" gutterBottom>
            Name: {item.name}
          </Typography>
          <Typography cy-data="id" className={classes.title} color="textSecondary" gutterBottom>
            Id: {item.id}
          </Typography>
        </CardContent>
      </Card>
    ))}
    </div>
  );
};

export default ItemCard;