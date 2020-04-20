import React,  { useEffect, userState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  Budget,
  TotalUsers,
  TasksProgress,
  TotalProfit,
  LatestSales,
  UsersByDevice,
  LatestProducts,
  LatestOrders
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const [dashboardDa, setdashboardData] = React.useState(0);
  useEffect(() => {
    setTimeout(function(){
      const token = localStorage.getItem('token');
      console.log("======effect===", token)
      
      var requestOptions = {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1ODczMjIxOTIsIm5iZiI6MTU4NzMyMjE5MiwianRpIjoiZjg2YjIxYTgtN2Y2ZC00ZjJhLThhYzktZDQ3M2U3MjMxMzFjIiwiZXhwIjoxNTg3MzIzMDkyLCJpZGVudGl0eSI6ImZyZWRkeSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.0Lqsl1N53neZ8KVZkYFyWIr-1vkDISoCrsJwOUt0kiM'
        },
        redirect: 'follow'
      };

      fetch("https://freddy.codesubmit.io/dashboard", requestOptions)
      .then(result => setdashboardData(JSON.parse(result)))
      .catch(error => console.log('error', error))

    }, 100);

    ; // result: '/secondpage'
 }, []);

  return (
    <div>{JSON.stringify(dashboardDa)}</div>
    // <div className={classes.root}>
    //   <Grid
    //     container
    //     spacing={4}
    //   >
    //     <Grid
    //       item
    //       lg={3}
    //       sm={6}
    //       xl={3}
    //       xs={12}
    //     >
    //       <Budget />
    //     </Grid>
    //     <Grid
    //       item
    //       lg={3}
    //       sm={6}
    //       xl={3}
    //       xs={12}
    //     >
    //       <TotalUsers />
    //     </Grid>
    //     <Grid
    //       item
    //       lg={3}
    //       sm={6}
    //       xl={3}
    //       xs={12}
    //     >
    //       <TasksProgress />
    //     </Grid>
    //     <Grid
    //       item
    //       lg={3}
    //       sm={6}
    //       xl={3}
    //       xs={12}
    //     >
    //       <TotalProfit />
    //     </Grid>
    //     <Grid
    //       item
    //       lg={8}
    //       md={12}
    //       xl={9}
    //       xs={12}
    //     >
    //       <LatestSales />
    //     </Grid>
    //     <Grid
    //       item
    //       lg={4}
    //       md={6}
    //       xl={3}
    //       xs={12}
    //     >
    //       <UsersByDevice />
    //     </Grid>
    //     <Grid
    //       item
    //       lg={4}
    //       md={6}
    //       xl={3}
    //       xs={12}
    //     >
    //       <LatestProducts />
    //     </Grid>
    //     <Grid
    //       item
    //       lg={8}
    //       md={12}
    //       xl={9}
    //       xs={12}
    //     >
    //       <LatestOrders />
    //     </Grid>
    //   </Grid>
    // </div>
  );
};

export default Dashboard;
