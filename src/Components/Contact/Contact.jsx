import React, { useState } from 'react';
import { Box, Button, TextField, Typography, useTheme, useMediaQuery } from '@mui/material';

const HireMe = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const encodedSubject = encodeURIComponent(subject);
    const body = encodeURIComponent(`From: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:ss.ktw.bwn@gmail.com?subject=${encodedSubject}&body=${body}`;
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const formWidth = isSmallScreen ? '80%' : isMediumScreen ? '60%' : '40%';

  return (
    <Box
      id="contact"
      sx={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'black',
        color: '#8bc34a',
        p: 2,
      }}
    >
      <Typography variant="h4" mb={2} sx={{ color: '#8bc34a' }}>
        Contact Me
      </Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: formWidth,
          color: '#8bc34a',
          m: 2, // Consistent margin
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Your Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          InputProps={{ style: { color: '#8bc34a' } }}
          InputLabelProps={{ style: { color: '#8bc34a' } }}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Subject"
          variant="outlined"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          InputProps={{ style: { color: '#8bc34a' } }}
          InputLabelProps={{ style: { color: '#8bc34a' } }}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Your Message"
          variant="outlined"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          InputProps={{ style: { color: '#8bc34a' } }}
          InputLabelProps={{ style: { color: '#8bc34a' } }}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" sx={{ bgcolor: '#8bc34a', color: 'black' }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default HireMe;
