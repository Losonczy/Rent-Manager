import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ChartStyle from "../Styles/ChartStyle";
import ZingChart from "zingchart-react";
import { ChartContext } from "../context/ChartContext";
import { UserContext } from "../context/UserContext";
import { NotificationContext } from "../context/NotificationContext";
import { Link } from "react-router-dom";

export default function Demo() {
  const { state } = useContext(ChartContext);
  const classes = ChartStyle();
  const { notification } = useContext(NotificationContext);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={8}>
        <Paper className={classes.paper}>
          <div>
            <ZingChart data={state.config} />
          </div>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <Paper className={classes.paper}>
          <Typography className={classes.h5} variant="h5" color="secondary">
            Notifications:
          </Typography>
          <Link to="/app/products">
            <Typography variant="h6">{notification.length}</Typography>
          </Link>
        </Paper>
        <Paper className={classes.paper}>
          <Typography className={classes.h5} variant="h5" color="error">
            Out of Operation products:
          </Typography>
          <Typography variant="h6">5</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
