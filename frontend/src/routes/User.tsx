import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();

  return (
    <div>
      it's user page. <br />
      your id is: { id }
    </div>
  );
}

export default User;