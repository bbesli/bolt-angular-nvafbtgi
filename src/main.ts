import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app.component';
import { appConfig } from './app/app.config';

// Import Bootstrap JS (optional, only needed for certain components)
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

bootstrapApplication(App, appConfig);