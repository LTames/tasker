import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "replaceString",
  standalone: true,
})
export class ReplaceStringPipe implements PipeTransform {
  transform(value: string, searchValue: string, replaceValue: string): string {
    return value.replaceAll(searchValue, replaceValue);
  }
}
