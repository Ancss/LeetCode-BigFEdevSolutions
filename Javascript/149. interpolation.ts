// Have you ever added i18n support to your projects?

// Take i18next as an example, generally the keys and translations are kept separately, like this JSON below.

// {
//   "evaluation": "BFE.dev is {{evaluation}}"
// }
// At places where this key is used, we can then interpolate the string by passing a data object.

// t('evaluation', {evaluation: 'fantastic'});
// // "BFE.dev is fantastic"
// Now, please create a similar t() function which accepts the translation directly.

// 1. it supports {{ and }} as delimiters
// Let's make it clearer and simpler, when a new pair {{ is met, characters until the following }} are treated as the property name.

// For all the other cases, they should not be treated as delimiters.

// t('BFE.dev is {{{evaluation}', {evaluation: 'fantastic'});
// // "BFE.dev is {{{evaluation}"

// t('BFE.dev is {{{evaluation}}}', {'{evaluation': 'fantastic'});
// // "BFE.dev is fantastic}"

// t('BFE.dev is {{evalu ation}}', {'evalu ation': 'fantastic'});
// // "BFE.dev is fantastic"
// 2. if no data is passed or no property exists, just leave it empty
// t('BFE.dev is {{evaluation}}');
// // "BFE.dev is "


function t(translation: string, data: any = {}): string {
  return translation.replace(new RegExp(`(\\{\\{[^}]*?\\}\\})`, 'gi'), (_: string, $0: any, $1: any): string => {
    console.log('$0:', $0, '$1:', $1)
    const value = data[$0.slice(2, -2)]
    console.log(value)
    return value || ''
  })

}
// let s1 = '{{website}} {{verb}} {{evaluation}} {{period}} '
// console.log('t',t(s1,).length)
let s2 = 'BFE.dev is {{{evaluation}}'

console.log('t', t(s2, { a: 'cool' }))