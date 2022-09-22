

export function alternateCapitalize(text: string, startWithCapitalize: boolean) : string {
   let result = "";
   let capitalizeLetter = startWithCapitalize;
   for (let i = 0; i < text.length; i++) {

      result += capitalizeLetter ? text[i].toUpperCase(): text[i].toLowerCase();

      capitalizeLetter = !capitalizeLetter;
   }

   return result
}