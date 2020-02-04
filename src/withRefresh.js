import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

function withRefresh(WrappedComponent, path) {
  return withRouter(
    function(props) {
      const doRefreshToHome = useSelector(state => state.doRefreshToHome);
      useEffect(() => {
        if (doRefreshToHome) {
          props.history.replace(path);
        }
      }, []);
      if (doRefreshToHome) return <div />;
      return (
        <WrappedComponent {...props} />
      )
    }
  );
}

export default withRefresh;