import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { appConfig } from './app/app.config.server';

// Default export to satisfy build
export default function () {
  return bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
  );
}
