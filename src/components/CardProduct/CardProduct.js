import * as React from "react";
import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useTranslation } from "react-i18next";
import { conTheme } from "../../Context/Context";
export default function MultiActionAreaCard({ title, describe, img }) {
  const { t } = useTranslation();
  let { isTheme } = useContext(conTheme);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="90" image={img} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="#071848">
            {describe}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {t("More Info")}
        </Button>
      </CardActions>
    </Card>
  );
}
