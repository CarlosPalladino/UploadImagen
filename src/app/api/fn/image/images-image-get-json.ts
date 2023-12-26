/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Imagen } from '../../models/imagen';

export interface ImagesImageGet$Json$Params {
}

export function imagesImageGet$Json(http: HttpClient, rootUrl: string, params?: ImagesImageGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Imagen>>> {
  const rb = new RequestBuilder(rootUrl, imagesImageGet$Json.PATH, 'get');
  if (params) {
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<Imagen>>;
    })
  );
}

imagesImageGet$Json.PATH = '/Images/Image';
