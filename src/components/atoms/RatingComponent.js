import React from 'react';
import Rating from '@material-ui/lab/Rating';

import Box from '@material-ui/core/Box';

export function RatingComponent({rating,value}) {

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent" marginTop="30px">
        <Rating
          name="simple-controlled"
          value={value === undefined ? 5 : value}
          readOnly
        />
      </Box>
    </div>
  );
}

export default RatingComponent;
