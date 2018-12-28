import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AddPhotoIcon from "@material-ui/icons/AddPhotoAlternate";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import PDFTextField from './components/pdf-text-field';
import {
  Button,
  Paper,
  FormControl,
  TextField,
  Input,
  InputLabel,
  Typography,
  Grid,
  List,
  ListItemText,
  ListItem,
  InputAdornment,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";

const styles = theme => ({
  prevImg: {
    width: "100%"
  },
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  listaTitle: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    zIndex: 0
  }
});

function DataForm(props) {
  const { classes } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper className={classes.paper}>
        <div className={classes.form}>
          <Typography color="primary" style={{ marginBottom: 8 }} variant="title">
            Diploma
          </Typography>
          {props.imageURL && (
            <img className={classes.prevImg} src={props.imageURL} alt="file" />
          )}
          <input
            style={{ display: "none" }}
            onChange={props.handleChargeFile}
            accept="image/*"
            id="icon-button-file"
            type="file"
          />
          <label htmlFor="icon-button-file">
            <Button
              fullWidth
              style={{ marginTop: 8 }}
              variant="contained"
              color="default"
              component="span"
            >
              Upload
              <AddPhotoIcon style={{ marginLeft: 5 }} />
            </Button>
          </label>
          <Typography color="primary" className={classes.listaTitle} variant="title">
            Inputs
          </Typography>
          <PDFTextField
            title="Date"
            placeholder="Ej. A 22 de Febrero de 2019"
            id="date"
            data={props.date}
            categories={props.categories}
            fonts={props.fonts}
            handleInputChange={props.handleInputChange}
            handlePosChange={props.handlePosChange}
            handleAutoCompleteChange={props.handleAutoCompleteChange}
          />
          <PDFTextField
            title="Course"
            placeholder="Ej. Blockchain for Lawyers"
            id="course"
            data={props.course}
            categories={props.categories}
            fonts={props.fonts}
            handleInputChange={props.handleInputChange}
            handlePosChange={props.handlePosChange}
            handleAutoCompleteChange={props.handleAutoCompleteChange}
          />
          <PDFTextField
            title="Name Position"
            placeholder="Ej. Anthony Chávez"
            id="name"
            data={props.name}
            categories={props.categories}
            fonts={props.fonts}
            handleInputChange={props.handleInputChange}
            handlePosChange={props.handlePosChange}
            handleAutoCompleteChange={props.handleAutoCompleteChange}
          />
          <Typography color="primary" className={classes.listaTitle} variant="title">
            Lista de egresados
          </Typography>
          <FormControl margin="normal" required fullWidth>
            <form
              style={{ display: "contents" }}
              onSubmit={props.handleAddName}
            >
              <InputLabel>Nombre del egresado</InputLabel>
              <Input
                id="nameList"
                name="nameToAdd"
                type="text"
                value={props.nameList.nameToAdd}
                onChange={e => {
                  props.handleInputChange(e);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={props.handleAddName}>
                      <AddCircleIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </form>
          </FormControl>
          <List dense>
            {props.nameList.names.map((name, id) => (
              <ListItem key={id}>
                <ListItemText primary={name} />
                <ListItemSecondaryAction>
                  <IconButton
                    onClick={() => {
                      props.handleDeleteName(id);
                    }}
                    aria-label="Delete"
                  >
                    <CloseIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            href={props.PDFBlob}
            target="_blank"
            className={classes.submit}
            download
            component="a"
          >
            Generar PDF
            <DoneIcon style={{ marginLeft: 5 }} />
          </Button>
        </div>
      </Paper>
    </Grid>
  );
}

export default withStyles(styles)(DataForm);
