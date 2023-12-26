/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Imagen } from '../../models/imagen';

export interface ImagesImageImagenIdGet$Plain$Params {
  ImagenId: string;
}

export function imagesImageImagenIdGet$Plain(http: HttpClient, rootUrl: string, params: ImagesImageImagenIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Imagen>> {
  const rb = new RequestBuilder(rootUrl, imagesImageImagenIdGet$Plain.PATH, 'get');
  if (params) {
    rb.path('ImagenId', params.ImagenId, {});
  }

  return http.request(
    rb.build({ responseType: 'text', accept: 'text/plain', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Imagen>;
    })
  );
}

imagesImageImagenIdGet$Plain.PATH = '/Images/Image/{ImagenId}';
