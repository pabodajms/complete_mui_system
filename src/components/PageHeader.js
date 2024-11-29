// import { Paper, Card, Typography, styled } from "@mui/material";
// import React from "react";

// // Styled components
// const Root = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#fdfdff",
// }));

// const PageHeaderContainer = styled("div")(({ theme }) => ({
//   padding: theme.spacing(4),
//   display: "flex",
//   marginBottom: theme.spacing(3),
// }));

// const PageIcon = styled(Card)(({ theme }) => ({
//   display: "inline-block",
//   padding: theme.spacing(2),
// }));

// export default function PageHeader({ title, subTitle, icon }) {
//   return (
//     <Root elevation={0} square>
//       <PageHeaderContainer>
//         <PageIcon>{icon}</PageIcon>
//         <div>
//           {/* For the title of the page */}
//           <Typography variant="h6" component="div">
//             {title}
//           </Typography>
//           {/* For the subtitle of the page */}
//           <Typography variant="subtitle2" component="div">
//             {subTitle}
//           </Typography>
//         </div>
//       </PageHeaderContainer>
//     </Root>
//   );
// }

import { Paper, Card, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdff",
  },
  PageHeader: {
    padding: theme.spacing(4),
    display: "flex",
    marginBottom: theme.spacing(3),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
  },
  pageTitle: {
    paddingLeft: theme.spacing(3),
    "& .MuiTypography-subtitle2": {
      opacity: "0.6",
    },
  },
}));

export default function PageHeader(Props) {
  const classes = useStyles();
  const { title, subTitle, icon } = Props;
  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.PageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div className={classes.pageTitle}>
          {/* For the title of the page */}
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          {/* For the subtitle of the page */}
          <Typography variant="subtitle2" component="div">
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  );
}
