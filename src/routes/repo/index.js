import React from 'react';
import Bundle from '../../utils/bundle';
import RepoPage from 'bundle-loader?lazy!./containers';

const RepoBundle = () => {
  return <Bundle load={RepoPage}>
    {(Comp) => (Comp
            ? <Comp/>
            : ""
    )}
  </Bundle>;
};

export default RepoBundle;