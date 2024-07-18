import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const HireMe = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Hire Me");
    const body = encodeURIComponent(`From: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:ss.ktw.bwn@gmail.com?subject=${subject}&body=${body}`;
  };

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
        bgcolor: 'black', // Background color set to black
        color: '#8bc34a', // Text color set to #8bc34a
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
          width: '300px',
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
          sx={{ mb: 2, input: { color: '#8bc34a' }, label: { color: '#8bc34a' } }}
        />
        <TextField
          label="Your Message"
          variant="outlined"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          sx={{ mb: 2, input: { color: '#8bc34a' }, label: { color: '#8bc34a' } }}
        />
        <Button type="submit" variant="contained" sx={{ bgcolor: '#8bc34a', color: 'black' }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default HireMe;
