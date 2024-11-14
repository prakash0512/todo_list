import { Box, Container } from "@mui/material";
import Home from "./pages/Home";

const App = () => {
	return (
		<Box
			sx={{
				minHeight: "100vh",
				backgroundColor: "#0093E9",
				backgroundImage:
					"linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
			}}
		>
			<Container maxWidth={false}>
				<Home />
			</Container>
		</Box>
	);
};

export default App;
