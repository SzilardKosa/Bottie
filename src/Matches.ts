import { Match } from './Bottie'

const REACTION2GREETINGS: string[] = [
  'https://tenor.com/view/hey-tom-hanks-forrest-gump-gif-5114770',
]
const REACTION2GOODBYE: string[] = [
  'https://tenor.com/view/cat-leaving-leave-oops-bye-gif-17519616',
]
const REACTION2LOVE: string[] = ['🥺', '(づ￣ ³￣)づ']
const REACTION2THREAT: string[] = ['☹️', '😨', '(༎ຶꈊ༎ຶ╬ )']
const REACTION2HORNY: string[] = ['😳', '😏', '( ͡° ͜ʖ ͡°)', '(づ￣ ³￣)づ']
const REACTION2SUPRISE: string[] = ['😳', '😏', 'ಠ‿ಠ', '┴┬┴┤( ͡° ͜ʖ├┬┴┬', '(・ε・)']
const REACTION2NO: string[] = ['yes', 'YES', 'YEEEESSSS (╯°□°)╯︵ ┻━┻']
const REACTION2YES: string[] = ['no', 'NO', 'NOOOOOOOO (╯°□°)╯︵ ┻━┻']
export const REACTION2UNKNOWN: string[] = [
  ...REACTION2LOVE,
  ...REACTION2THREAT,
  ...REACTION2HORNY,
  ...REACTION2SUPRISE,
  ...REACTION2NO,
  ...REACTION2YES,
]

//TODO: flags
const matches: Match[] = [
  // the message must be exactly the same as the input
  { input: /^😏$/, output: ['😏😏'], vip: { Konstantin97: ['😳😳'] } },
  { input: /^😏😏$/, output: ['😏😏😏'], vip: { Konstantin97: ['😳😳😳'] } },
  { input: /^😏😏😏$/, output: ['😏😏😏😏'], vip: { Konstantin97: ['😳😳😳😳'] } },
  { input: /^😏😏😏😏$/, output: ['😏😏😏😏😏'], vip: { Konstantin97: ['😳😳😳😳😳'] } },
  { input: /^😏😏😏😏😏$/, output: ['😏x⅝'], vip: { Konstantin97: ['😳x⅝'] } },
  { input: /^😏x⅝$/, output: ['🥵', '😳'], vip: { Konstantin97: ['😳😏'] } },
  { input: /^⅝x😏$/, output: ['🥵', '😳'], vip: { Konstantin97: ['😳😏'] } },
  { input: /^bottie$/, output: ['👀', '😳', '🥺', '☺️'] },
  { input: /^no*$/, output: REACTION2NO },
  { input: /^ye*s*$/, output: REACTION2YES },
  // the message must include at least one of the inputs
  { input: /love you|cute/, output: REACTION2LOVE, vip: { Konstantin97: REACTION2HORNY } },
  { input: /hi |hello |hey |^hi$|^hello$|^hey$/, output: REACTION2GREETINGS },
  { input: /bye|see you/, output: REACTION2GOODBYE },
  { input: /🙂|🔪/, output: REACTION2THREAT },
  { input: /🍆|🍑|😉|😏/, output: REACTION2HORNY },
  { input: /😳|🥺/, output: REACTION2SUPRISE },
]

export default matches
