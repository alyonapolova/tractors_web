import { Container } from '@mui/material';
import PropTypes from 'prop-types';

export const Page = (props) => {
  return <Container sx={{ mt: 5 }}>{props.children}</Container>;
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
