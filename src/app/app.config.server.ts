import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig as browserConfig } from './app.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    ...browserConfig.providers
  ]
};