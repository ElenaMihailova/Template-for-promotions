import { Typography } from '@mui/material';

export const ActionText = () => {
  return (
    <Typography
      variant="h6"
      gutterBottom
      sx={{
        fontSize: {
          xs: '19px',
          md: '21px',
        },
        fontWeight: '700',
        fontFamily: "'Exo 2', sans-serif",
        color: 'text.primary',
        wordWrap: 'break-word',
        textAlign: 'center',
        margin: '0px',
        maxWidth: '700px',
      }}
    >
      Text text text
    </Typography>
  );
};
