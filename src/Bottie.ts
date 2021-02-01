import { REACTION2UNKNOWN } from './Matches'

export default class Bottie {
  private matches: Match[]

  constructor() {
    this.matches = []
  }

  setMatches(matchList: Match[]): void {
    this.matches = matchList
  }

  reply(author: string, message: string): string {
    // find matching regexp
    for (const match of this.matches) {
      if (match.input.test(message)) {
        return this.chooseReply(author, match)
      }
    }
    return this.randomReply(REACTION2UNKNOWN)
  }

  randomReply = (output: string[]): string => output[Math.floor(Math.random() * output.length)]

  chooseReply(author: string, match: Match): string {
    let output = match.output
    if (typeof match.vip !== 'undefined' && author in match.vip) {
      output = match.vip[author]
    }
    return this.randomReply(output)
  }
}

export interface Match {
  input: RegExp
  output: string[]
  vip?: { [author: string]: string[] }
}
