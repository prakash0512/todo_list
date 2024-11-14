import { TextField } from '@mui/material';

const SearchFilter = ({ setFilter }) => (
  <TextField label="Search Tasks" fullWidth onChange={(e) => setFilter(e.target.value)} />
);

export default SearchFilter;
