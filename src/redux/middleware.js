import { COMMENT_CREATE } from './types'
import { errorOn } from './action'

const badWords = ['идиот', 'дурак']

export function spamFilter({dispatch}) {
    return function (next) {
        return function (action) {
            if (action.type === COMMENT_CREATE) {
                const hadBadWords = badWords.some(res => action.data.text.includes(res))
                if (hadBadWords) {
                  return  dispatch(errorOn('Уважайте других пользователей'))
                }
            }
            return next(action);
        }
    }
}


