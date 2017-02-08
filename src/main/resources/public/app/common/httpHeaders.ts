import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Access-Control-Allow-Origin', '*'); //TODO DEFINITELY REMOVE THIS BEFORE PRODUCTION
//contentHeaders.append('Accept', 'application/json');
//contentHeaders.append('Content-Type', 'application/json');
//Access-Control-Allow-Origin