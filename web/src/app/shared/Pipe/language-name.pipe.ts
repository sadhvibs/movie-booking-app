import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageName'
})
export class LanguageNamePipe implements PipeTransform {

  private languageMap: { [key: string]: string } = {
    en: 'English',
    hi: 'Hindi',
    fr: 'French',
    es: 'Spanish',
    ja: 'Japanese',
    ko: 'Korean',
    zh: 'Chinese',
    de: 'German',
    it: 'Italian'
  }

  transform(code: string): string {
    return this.languageMap[code] || code;
  }

}
