import { Toolbar, AppBar, Button , Box } from "@mui/material";
import Link from "next/link";

const Appbar = () => {
  const appItems = ["Product", "Posts", "Contact", "Log in"];
  const direction = ['', 'blogs', '', '']
  return (
    <Box sx={{height:'70px'}}>
      <AppBar
        sx={{
          background: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Link href="/" as={`/`}>
                <Box
          sx={{ height: 70, width: 70 }}
          component="img"
          src="https://static.www.nfl.com/image/private/f_auto/league/d8m7hzpsbrl6pnqht8op"
          alt="amg"
        >
        </Box>
        </Link>

        <Toolbar>
          <Box display="flex" sx={{ justifyContent: "flex-end" }}>
            {appItems.map((text, index) => {
              return (
                <Link href="/blogs" as={`/${direction[index]}`}>
                <Box key={index} sx={{ m: 2, color: "black" ,display:{ xs : 'none' , md: 'flex'}}} >
                  {text}
                </Box>
                </Link>
              );
            })}
            <Button
              sx={{ borderColor: "white", border: "2px solid #FFFFFF" }}
              variant="outlined"
            >
              Get Access
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Appbar;