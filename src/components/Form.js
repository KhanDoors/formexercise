import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const Form = () => {
  const classes = useStyles();
  // const theme = useTheme();

  const [chart, setChart] = useState({
    title: "",
    description: "",
  });
  const [variables, setVariables] = useState({
    label: "",
    color: "",
    number: 0,
  });

  const { title, description } = chart;
  const { label, color, number } = variables;

  const onChange = (e) =>
    setChart({ ...chart, [e.target.name]: e.target.value });

  const onEnter = (e) =>
    setVariables({ ...variables, [e.target.name]: e.target.value });

  console.log(title);
  console.log(description);
  console.log(label);
  console.log(color);
  console.log(number);

  return (
    <Fragment>
      <Card>
        <CardActionArea style={{ margin: ".5em" }}>
          <Grid container justify="center">
            <Typography
              style={{ fontWeight: "bold", color: "#355B8C" }}
              variant="h4"
            >
              Add to Chart
            </Typography>
          </Grid>

          <form className={classes.root}>
            <TextField
              itemType="text"
              placeholder="Title"
              name="title"
              value={title}
              onChange={onChange}
            />

            <TextField
              itemType="text"
              placeholder="Description"
              multiline
              name="description"
              value={description}
              onChange={onChange}
            />
            <TextField
              itemType="text"
              placeholder="Label"
              name="label"
              value={label}
              onChange={onEnter}
            />
            <TextField
              itemType="color"
              placeholder="Color"
              name="color"
              value={color}
              onChange={onEnter}
            />
            <TextField
              itemType="number"
              placeholder="Number"
              name="number"
              value={number}
              onChange={onEnter}
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </CardActionArea>
      </Card>
    </Fragment>
  );
};

export default Form;
