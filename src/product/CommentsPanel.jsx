import { Box, Button, TextField, Typography } from '@mui/material';
import { useComments } from './useComments';
import PropTypes from 'prop-types';

export const CommentsPanel = ({ productId }) => {
  const { comments } = useComments(productId);
  console.log(comments);
  return (
    <>
      <Typography variant="h4" component="h2">
        Comments
      </Typography>
      <TextField fullWidth label="Write a comment" multiline rows={2} />
      <Box sx={{ py: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <Button>Comment</Button>
      </Box>
      {JSON.stringify(comments)}
    </>
  );
};

CommentsPanel.propTypes = {
  productId: PropTypes.string.isRequired,
};
