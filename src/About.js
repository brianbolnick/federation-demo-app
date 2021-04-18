import React, { lazy } from 'react';

const Button = lazy(() => import('federation_demo_design/Button'));

const AboutPage = () => (
  <div>
    <h1>About Page</h1>

    <React.Suspense fallback="Loading Button...">
      <Button>Click me on about!</Button>
    </React.Suspense>
  </div>
);

export default AboutPage;
