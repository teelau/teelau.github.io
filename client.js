// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance} from 'react-360-web';
import {Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const Panel_one = new Surface(
    300,
    600,
    Surface.SurfaceShape.Flat
  );
  Panel_one.setAngle(-0.2, 0);


  // Render your app content to the default cylinder surface
  // r360.renderToSurface(
  //   r360.createRoot('Panel'),
  //   Panel_one,
  // );

  r360.renderToSurface(
    r360.createRoot('Tommy360', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
