import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { ProductosContext } from '../../../context/productos';
import { Layout } from '../../../components/layouts';
import { AddButton } from '../../../components/ui';
import { Svg } from '../../../components/ui';

export default function ProductPage() {
  const router = useRouter();
  const id = router.query.id;

  // dynamic import. ProductContext exposes each product individually by id
  const { [id]: product = {} } = useContext(ProductosContext);

  const {
    category,
    title,
    description,
    imageUrl,
    landscapeImgUrl,
    price,
    date,
  } = product;

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Layout>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Svg width={48} height={48} src="/logo.svg" />}
          title={title}
          subheader={new Date(date).toLocaleDateString()}
        />
        <CardMedia
          component="img"
          height="400"
          image={imageUrl}
          alt="product image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <AddButton itemData={product} goToCart />
        </CardActions>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Layout>
  );
}
