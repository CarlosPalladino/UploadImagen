/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Imagen } from '../../models/imagen';

export interface ImagesImageImagenIdGet$Json$Params {
  ImagenId: string;
}

export function imagesImageImagenIdGet$Json(http: HttpClient, rootUrl: string, params: ImagesImageImagenIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Imagen>> {
  const rb = new RequestBuilder(rootUrl, imagesImageImagenIdGet$Json.PATH, 'get');
  if (params) {
    rb.path('ImagenId', params.ImagenId, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'text/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Imagen>;
    })
  );
}

imagesImageImagenIdGet$Json.PATH = '/Images/Image/{ImagenId}';
