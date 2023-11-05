import { inject } from "@angular/core"
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { AuthService } from "src/app/services/auth-service.service"

/**
 * Navigate to login page if user is not authenticated
 * @returns boolean
 */
export const AuthGuard = (route: ActivatedRouteSnapshot) => {
    const auth = inject(AuthService);
    const router = inject(Router);

    const redirectTo = route.data['redirecTo'];
    console.log(redirectTo);

    if(!auth.isUserAuthenticated) {
        router.navigateByUrl('/login?redirectAfterLogin=' + redirectTo);
        return false
    }
    return true
}