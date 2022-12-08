import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, distinctUntilChanged, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token =
    'SafeToken-Lorem_ipsum_dolor_sit_amet,_consectetur_adipisicing_elit._Quibusdam,_eaque_enim_impedit_ullam_voluptatum_qui?_Quisquam_repellat_saepe_accusantium,_ea_distinctio_iusto_hic_animi?_Deserunt_dolore_iusto_tempora_perferendis_ipsum!';
  private loggedin$$ = new BehaviorSubject(false);
  loggedin$ = this.loggedin$$.pipe();
  private user$$ = new BehaviorSubject<null | { name: string }>(null);
  user$ = this.user$$.asObservable();

  login(name: string, pw: string) {
    // Not Secure!!!!
    return of(name === 'Dave' && pw === '1234').pipe(
      tap((data) => this.loggedin$$.next(data)),
      tap((data) =>
        data ? this.user$$.next({ name }) : this.user$$.next(null)
      )
    );
  }

  logout() {
    this.loggedin$$.next(false);
    this.user$$.next(null);
  }
  constructor(private router: Router) {
    this.loggedin$.pipe(distinctUntilChanged()).subscribe((data) => {
      if (!data) {
        this.router.navigate(['about']);
      }
    });
  }
}
