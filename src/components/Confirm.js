import React from 'react';
import { Button, Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const Confirm = ({ values, nextStep, prevStep }) => {
    const continue_ = e => {
        e.preventDefault();
        nextStep();
    };

    const back = e => {
        e.preventDefault();
        prevStep();
    };

    return (
        <div style={{ 
            width: '100%', 
            height: '100vh', 
            position: 'relative',
            background: 'linear-gradient(135deg, #ab47bc 0%, #ba68c8 25%, #f06292 50%, #ef5350 75%, #ff5722 100%)'
        }}>
            <Box sx={{ maxWidth: 500, margin: '0 auto', padding: 3, position: 'relative', zIndex: 1 }}>
                <Typography variant="h4" gutterBottom style={{ color: 'white', textAlign: 'center', fontFamily: 'Bitcount Prop Single Ink, monospace', fontWeight: '600', fontSize: '2.5rem', marginBottom: '2rem' }}>
                    Confirm User Data
                </Typography>
                <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: 2, padding: 2 }}>
                    <List>
                        <ListItem>
                            <ListItemText primary="First Name" secondary={values.firstName} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Last Name" secondary={values.lastName} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Email" secondary={values.email} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Occupation" secondary={values.occupation} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="City" secondary={values.city} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Bio" secondary={values.bio} />
                        </ListItem>
                    </List>
                </Box>
                <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={back}
                        sx={{ height: 48, fontFamily: 'Open Sans, sans-serif', fontWeight: '600' }}
                    >
                        Back
                    </Button>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={continue_}
                        sx={{ height: 48, fontFamily: 'Open Sans, sans-serif', fontWeight: '600' }}
                    >
                        Confirm & Continue
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default Confirm;
