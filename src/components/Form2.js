import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Checkbox } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Form2 = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
  });

  return (
    <div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
      >
        <TextField
          label="Email"
          variant="outlined"
          inputRef={register({ required: true })}
          name="email"
          autoComplete="email"
        />
        {errors.email && "email error"}
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          inputRef={register({ required: true })}
          name="password"
        />
        {errors.password && "password error"}

        <Checkbox
          inputRef={register}
          defaultValue={false}
          color="primary"
          name="checkbox"
          label="checked"
        />

        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form2;
