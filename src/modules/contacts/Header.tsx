import React from 'react';
import { Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import XSearchInput from '../../components/inputs/XSearchInput';
import theme from '../../theme';

interface IProps {
  title?: string;
  onAddNew?: () => any;
  onFilterToggle?: () => any;
  onChange?: (v: string) => any;
}

const Header = ({
  onAddNew, onFilterToggle, onChange, title,
}: IProps) => (
    <Grid container spacing={0}>
      {title && (
        <Grid item xs={12}>
          <Box mb={2}>
            <Typography variant="h6">{title}</Typography>
          </Box>
        </Grid>
      )}
      <Grid item xs={12}>
        <Box mb={2} display="flex" style={{ height: 40 }}>
          <Box width="100%" style={{ height: '100%' }}>
            <XSearchInput onFilterToggle={onFilterToggle} onChange={onChange} />
          </Box>
          <Hidden xsDown>
            <Box flexShrink={0} ml={1}>
              {onAddNew && (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon />}
                  onClick={onAddNew}
                  style={{ padding: theme.spacing(1) }}
                >
                  New&nbsp;&nbsp;
                </Button>
              )}
            </Box>
          </Hidden>
        </Box>
      </Grid>
    </Grid>
);

export default Header;
