import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography, FormControl, Input, InputLabel, Grid, TextField } from "@material-ui/core/";
import AutoComplete from "../../autocomplete/autocomplete";

const styles = theme => ({
  listaTitle: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    zIndex: 0
  }
});

function PDFTextField(props) {
  const { classes } = props;

  return (
    <Fragment>
      <Typography
        color="secondary"
        className={classes.listaTitle}
        variant="subtitle1"
      >
        {props.title}
      </Typography>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="date">{props.placeholder}</InputLabel>
        <Input
          value={props.data.value}
          onChange={e => {
            props.handleInputChange(e);
          }}
          id={props.id}
          name="value"
          autoComplete="date"
          autoFocus
        />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <Typography>Font</Typography>
      </FormControl>
      <FormControl style={{ flexDirection: "row" }} fullWidth>
        <AutoComplete
          id={props.id}
          suggestions={props.categories}
          value={props.data.fontCategory}
          placeholder="Category"
          handleAutoCompleteChange={() => props.handleAutoCompleteChange(props.id, "fontCategory")}
        />
        <AutoComplete
          id={props.id}
          name="fontFamily"
          suggestions={props.fonts}
          value={props.data.fontFamily}
          filter={props.data.fontCategory && props.data.fontCategory.value}
          placeholder="Family"
          handleAutoCompleteChange={() => props.handleAutoCompleteChange(props.id, "fontFamily")}
        />
      </FormControl>
      <FormControl style={{ flexDirection: "row" }}>
        <Grid item xs={4}>
          <TextField
            id={props.id}
            name="pos"
            label="Y Pos %"
            type="number"
            className={classes.textField}
            onChange={e => props.handlePosChange(e, "x")}
            value={props.data.pos.x}
            margin="normal"
            style={{ marginRight: 10 }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id={props.id}
            name="pos"
            label="X Pos %"
            type="number"
            onChange={e => props.handlePosChange(e, "y")}
            value={props.data.pos.y}
            className={classes.textField}
            margin="normal"
            style={{ marginRight: 10 }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id={props.id}
            name="size"
            label="Font Size"
            type="number"
            onChange={e => props.handleInputChange(e)}
            value={props.data.size}
            className={classes.textField}
            margin="normal"
            style={{ marginRight: 10 }}
            variant="outlined"
          />
        </Grid>
      </FormControl>
    </Fragment>
  );
}

export default withStyles(styles)(PDFTextField);
