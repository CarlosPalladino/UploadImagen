/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Imagen } from '../../models/imagen';
import { UploadImagenDto } from '../../models/upload-imagen-dto';

export interface ImagesImageImagenIdPut$Json$Params {
  ImagenId: string;
      body?: UploadImagenDto
}

export function imagesImageImagenIdPut$Json(http: HttpClient, rootUrl: string, params: ImagesImageImagenIdPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Imagen>> {
  const rb = new RequestBuilder(rootUrl, imagesImageImagenIdPut$Json.PATH, 'put');
  if (params) {
    rb.path('ImagenId', params.ImagenId, {});
    rb.body(params.body, 'application/*+json');
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

imagesImageImagenIdPut$Json.PATH = '/Images/Image/{ImagenId}';
