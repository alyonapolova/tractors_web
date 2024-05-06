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
import { useDispatch, useSelector } from 'react-redux';
import { closeLoginDialog } from '../../actions/closeLoginDialog';
import { selectorIsLogginDialogOpen } from '../../userSlice';

export const LoginDialog = () => {
  const [values, setValues] = useState({ email: '', password: '' });

  const dispatch = useDispatch();

  const open = useSelector(selectorIsLogginDialogOpen);

  const handleChange = (field) => (e) => {
    setValues({ ...values, [field]: e.target.value });
  };

  const handleClose = () => {
    dispatch(closeLoginDialog());
  };

  const handleSubmit = () => {
    // onSubmit(values.email, values.password);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
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
          <Button onClick={handleClose} color="secondary">
            Close
          </Button>
          <Button onClick={handleSubmit}>Login</Button>
        </DialogActions>
      </DialogTitle>
    </Dialog>
  );
};
