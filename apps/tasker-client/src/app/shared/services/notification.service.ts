import { Injectable, inject } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { TuiAlertOptions, TuiAlertService } from "@taiga-ui/core";
import { Subject, mergeMap } from "rxjs";

type Notification = Partial<TuiAlertOptions<string> & { content: string }>;

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  private readonly alertService = inject(TuiAlertService);

  private readonly notifications$ = new Subject<Notification>();

  constructor() {
    this.notifications$
      .pipe(
        takeUntilDestroyed(),
        mergeMap(({ content, ...notification }) =>
          this.alertService.open(content ?? "", notification),
        ),
      )
      .subscribe();
  }

  public openNotification(notification: Notification) {
    this.notifications$.next(notification);
  }
}
