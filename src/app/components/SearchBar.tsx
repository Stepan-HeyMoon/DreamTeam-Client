import { Grid, TextField, Button } from '@mui/material';

const SearchBar = () => {
    return (          
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} sm={6} md={4} sx={{ margin: '20px 0', textAlign: 'center' }}>
                <TextField label="Поиск" variant="outlined" fullWidth sx={{ marginBottom: { xs: '10px', sm: '0' } }} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} sx={{ margin: '20px 0', textAlign: 'center' }}>
                <TextField label="Google Disk API" variant="outlined" fullWidth sx={{ marginBottom: { xs: '10px', sm: '0' } }} />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Button variant="contained" color="primary">
                    Готово
                </Button>
            </Grid>
        </Grid>
    );
};

export default SearchBar;




