/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Imagen } from '../models/imagen';
import { imagesImageGet$Json } from '../fn/image/images-image-get-json';
import { ImagesImageGet$Json$Params } from '../fn/image/images-image-get-json';
import { imagesImageGet$Plain } from '../fn/image/images-image-get-plain';
import { ImagesImageGet$Plain$Params } from '../fn/image/images-image-get-plain';
import { imagesImageImagenIdDelete } from '../fn/image/images-image-imagen-id-delete';
import { ImagesImageImagenIdDelete$Params } from '../fn/image/images-image-imagen-id-delete';
import { imagesImageImagenIdGet$Json } from '../fn/image/images-image-imagen-id-get-json';
import { ImagesImageImagenIdGet$Json$Params } from '../fn/image/images-image-imagen-id-get-json';
import { imagesImageImagenIdGet$Plain } from '../fn/image/images-image-imagen-id-get-plain';
import { ImagesImageImagenIdGet$Plain$Params } from '../fn/image/images-image-imagen-id-get-plain';
import { imagesImageImagenIdPut$Json } from '../fn/image/images-image-imagen-id-put-json';
import { ImagesImageImagenIdPut$Json$Params } from '../fn/image/images-image-imagen-id-put-json';
import { imagesImageImagenIdPut$Plain } from '../fn/image/images-image-imagen-id-put-plain';
import { ImagesImageImagenIdPut$Plain$Params } from '../fn/image/images-image-imagen-id-put-plain';

@Injectable({ providedIn: 'root' })
export class ImageService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `imagesImageGet()` */
  static readonly ImagesImageGetPath = '/Images/Image';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imagesImageGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  imagesImageGet$Plain$Response(params?: ImagesImageGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Imagen>>> {
    return imagesImageGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imagesImageGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  imagesImageGet$Plain(params?: ImagesImageGet$Plain$Params, context?: HttpContext): Observable<Array<Imagen>> {
    return this.imagesImageGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Imagen>>): Array<Imagen> => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imagesImageGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  imagesImageGet$Json$Response(params?: ImagesImageGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Imagen>>> {
    return imagesImageGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imagesImageGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  imagesImageGet$Json(params?: ImagesImageGet$Json$Params, context?: HttpContext): Observable<Array<Imagen>> {
    return this.imagesImageGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Imagen>>): Array<Imagen> => r.body)
    );
  }

  /** Path part for operation `imagesImageImagenIdGet()` */
  static readonly ImagesImageImagenIdGetPath = '/Images/Image/{ImagenId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imagesImageImagenIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  imagesImageImagenIdGet$Plain$Response(params: ImagesImageImagenIdGet$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Imagen>> {
    return imagesImageImagenIdGet$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imagesImageImagenIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  imagesImageImagenIdGet$Plain(params: ImagesImageImagenIdGet$Plain$Params, context?: HttpContext): Observable<Imagen> {
    return this.imagesImageImagenIdGet$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Imagen>): Imagen => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imagesImageImagenIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  imagesImageImagenIdGet$Json$Response(params: ImagesImageImagenIdGet$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Imagen>> {
    return imagesImageImagenIdGet$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imagesImageImagenIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  imagesImageImagenIdGet$Json(params: ImagesImageImagenIdGet$Json$Params, context?: HttpContext): Observable<Imagen> {
    return this.imagesImageImagenIdGet$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Imagen>): Imagen => r.body)
    );
  }

  /** Path part for operation `imagesImageImagenIdPut()` */
  static readonly ImagesImageImagenIdPutPath = '/Images/Image/{ImagenId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imagesImageImagenIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  imagesImageImagenIdPut$Plain$Response(params: ImagesImageImagenIdPut$Plain$Params, context?: HttpContext): Observable<StrictHttpResponse<Imagen>> {
    return imagesImageImagenIdPut$Plain(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imagesImageImagenIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  imagesImageImagenIdPut$Plain(params: ImagesImageImagenIdPut$Plain$Params, context?: HttpContext): Observable<Imagen> {
    return this.imagesImageImagenIdPut$Plain$Response(params, context).pipe(
      map((r: StrictHttpResponse<Imagen>): Imagen => r.body)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imagesImageImagenIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  imagesImageImagenIdPut$Json$Response(params: ImagesImageImagenIdPut$Json$Params, context?: HttpContext): Observable<StrictHttpResponse<Imagen>> {
    return imagesImageImagenIdPut$Json(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imagesImageImagenIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  imagesImageImagenIdPut$Json(params: ImagesImageImagenIdPut$Json$Params, context?: HttpContext): Observable<Imagen> {
    return this.imagesImageImagenIdPut$Json$Response(params, context).pipe(
      map((r: StrictHttpResponse<Imagen>): Imagen => r.body)
    );
  }

  /** Path part for operation `imagesImageImagenIdDelete()` */
  static readonly ImagesImageImagenIdDeletePath = '/Images/Image/{ImagenId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imagesImageImagenIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  imagesImageImagenIdDelete$Response(params: ImagesImageImagenIdDelete$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return imagesImageImagenIdDelete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imagesImageImagenIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  imagesImageImagenIdDelete(params: ImagesImageImagenIdDelete$Params, context?: HttpContext): Observable<void> {
    return this.imagesImageImagenIdDelete$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
