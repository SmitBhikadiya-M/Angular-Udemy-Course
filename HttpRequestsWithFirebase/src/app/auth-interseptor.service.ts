import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class AuthInterseptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const modifiedRequest = req.clone( { headers: req.headers.append('Auth', 'xyx') } )
        return next.handle(modifiedRequest);
    }
}