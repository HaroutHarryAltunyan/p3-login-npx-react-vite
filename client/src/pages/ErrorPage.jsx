import { useRouteError } from "react-router-dom";
import { Box, Typography, Paper, Button } from "@mui/material";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 500,
          textAlign: "center",
          borderRadius: 2,
        }}
      >
        <Typography variant="h2" color="error" gutterBottom>
          Oops!
        </Typography>
        <Typography variant="body1">
          Sorry, an unexpected error has occurred.
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontStyle: "italic", mt: 2, color: "text.secondary" }}
        >
          {error.statusText || error.message}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 3 }}
          onClick={() => window.location.href = "/"}
        >
          Go Back to Home
        </Button>
      </Paper>
    </Box>
  );
}