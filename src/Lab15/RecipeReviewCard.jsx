import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="data:image/jpeg;base64,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"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography sx={{ marginBottom: 2 }}>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
