import React from 'react';
import { Box, colors, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

interface IProps {
  text: any;
}

const InfoMessage = (props: IProps) => (
    <Box display="flex" p={1} justifyContent="center">
      <Paper style={{ backgroundColor: colors.blueGrey[50] }} elevation={0}>
        <Box p={3}>
          <Typography>{props.text}&nbsp;!</Typography>
        </Box>
      </Paper>
    </Box>
);

export default InfoMessage;
