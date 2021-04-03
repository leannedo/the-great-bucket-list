// Libraries
import React from 'react';

// Styling
import './index.scss';

type Props = {
  children?: React.ReactNode;
};

//  ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
const Layout = ({ children }: Props) => <div>{children}</div>;

export default Layout;
