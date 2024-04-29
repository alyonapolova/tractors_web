import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const LoginDialog = ({ open, onClose, onSubmit }) => {
  const [values, setValues] = useState({ email: '', password: '' });

  const handleChange = (field) => (e) => {
    setValues({ ...values, [field]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(values.email, values.password);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <DialogContent>
          <DialogContentText>Enter your email and password</DialogContentText>
          <TextField
            value={values.email}
            onChange={handleChange('email')}
            autoFocus
            label="Email"
            margin="dense"
            fullWidth
            required
            id="email"
            type="email"
          />
          <TextField
            value={values.password}
            onChange={handleChange('password')}
            label="Password"
            margin="dense"
            fullWidth
            required
            id="password"
            type="password"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Close
          </Button>
          <Button onClick={handleSubmit}>Login</Button>
        </DialogActions>
      </DialogTitle>
    </Dialog>
  );
};

LoginDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
