import React from 'react';
import { useRouter } from 'next/router';

const Id = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      it's user page. <br />
      your id is: {id}
    </div>
  );
};

export default Id;
