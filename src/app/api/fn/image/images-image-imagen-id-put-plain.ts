/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Imagen } from '../../models/imagen';
import { UploadImagenDto } from '../../models/upload-imagen-dto';

export interface ImagesImageImagenIdPut$Plain$Params {
  ImagenId: string;
      body?: UploadImagenDto
}

export function imagesImageImagenIdPut$Plain(http: HttpClient, rootUrl: string, params: ImagesImageImagenIdPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Imagen>> {
  const rb = new RequestBuilder(rootUrl, imagesImageImagenIdPut$Plain.PATH, 'put');
  if (params) {
    rb.path('ImagenId', params.ImagenId, {});
    rb.body(params.body, 'application/*+json');
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

imagesImageImagenIdPut$Plain.PATH = '/Images/Image/{ImagenId}';
