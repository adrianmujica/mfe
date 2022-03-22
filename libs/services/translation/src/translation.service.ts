import {BehaviorSubject, Observable} from 'rxjs';

export class TranslationService {
    private lang: BehaviorSubject<string> = new BehaviorSubject<string>('');

    constructor() {
        this.lang.next(navigator.language ?? 'en-En');
    }

    getLang(): string {
        return this.lang.value;
    }

    setLang(lang: string) {
        this.lang.next(lang);
    }

    onLangChanged(): Observable<string> {
        return this.lang.asObservable();
    }
}