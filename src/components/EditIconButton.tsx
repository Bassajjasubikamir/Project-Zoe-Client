import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import useTheme from '@material-ui/core/styles/useTheme';
import { SvgIcon } from '@material-ui/core';
import { errorColor } from '../theme/custom-colors';

interface IProps {
  onClick: () => any;
  style?: any;
  id?:any;
}

interface LProps {
  style?: any;
  id?:any;
}

export const HiddenIcon = () => <SvgIcon style={{ fontSize: '1rem', margin: 4 }} />;

export const EditIconButton = ({ onClick, style }: IProps) => (
    <IconButton
      aria-label="delete"
      size="small"
      title="Edit"
      color="primary"
      style={{ ...style }}
      onClick={onClick}
    >
      <EditIcon style={{ fontSize: '1rem', margin: 4 }} />
    </IconButton>
);

export const EditiIcon = ({ style }: LProps) => (
    <IconButton
      aria-label="delete"
      size="small"
      title="Edit"
      color="primary"
      style={{ ...style }}
    >
      <EditIcon style={{ fontSize: '1rem', margin: 4 }} />
    </IconButton>
);

export const DeleteIconButton = ({ onClick, style }: IProps) => (
    <IconButton
      aria-label="delete"
      size="small"
      title="Edit"
      style={{ color: errorColor, ...style }}
      onClick={onClick}
    >
      <DeleteIcon style={{ fontSize: '1rem', margin: 4 }} />
    </IconButton>
);

export const AddIconButton = ({ onClick, style }: IProps) => (
    <IconButton
      aria-label="add-new"
      size="small"
      title="Add New"
      color="primary"
      style={{ ...style }}
      onClick={onClick}
    >
      <AddIcon />
    </IconButton>
);
export const AddFabButton = ({ onClick }: IProps) => {
  const theme = useTheme();
  return (
    <Fab
      aria-label="add-new"
      style={{
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      }}
      color="primary"
      onClick={onClick}
    >
      <AddIcon />
    </Fab>
  );
};

export const MoreIconButton = ({ onClick }: IProps) => (
    <IconButton
      aria-label="add-new"
      size="small"
      title="More"
      style={{ marginTop: 5 }}
      onClick={onClick}
    >
      <MoreHorizIcon />
    </IconButton>
);

export default EditIconButton;
