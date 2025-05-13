import { Grid } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import { useLocation, useParams } from "react-router-dom";
import SideBar from "./sideBar/SideBar";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const { id } = useParams();

  function alignItems() {
    if (pathname === `/indication/${id}`) {
      return "center";
    }
    if (pathname === `/payment/${id}`) {
      return "center";
    }
    return "";
  }

  return (
    <Grid display="flex" sx={{ height: "100vh", overflow: "hidden" }}>
      <Grid item sx={{ flexShrink: 0 }}>
        <SideBar />
      </Grid>

      <Grid
        container
        display="flex"
        direction="row"
        alignItems={alignItems()}
        sx={{
          flex: 1,
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Grid
          sx={{
            flexGrow: 1,
            p: 3,
            padding: "0",
            display: "flex",
            flexDirection: "column",
            overflow: "auto",
          }}
        >
          <Toolbar />
          {children}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PageLayout;
