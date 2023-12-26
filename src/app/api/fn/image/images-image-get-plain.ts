/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Imagen } from '../../models/imagen';

export interface ImagesImageGet$Plain$Params {
}

export function imagesImageGet$Plain(http: HttpClient, rootUrl: string, params?: ImagesImageGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Imagen>>> {
  const rb = new RequestBuilder(rootUrl, imagesImageGet$Plain.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Imagen>>;
    })
  );
}

imagesImageGet$Plain.PATH = '/Images/Image';
