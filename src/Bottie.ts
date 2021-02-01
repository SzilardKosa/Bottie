export default class Bottie {
  private exactMatches: Map<string, ExactMatch[]>
  // private keywordMatchList: KeywordMatch[]
  // private keywords: string[]

  constructor() {
    this.exactMatches = new Map<string, ExactMatch[]>()
    // this.keywordMatchList = []
    // this.keywords = []
  }

  setMatches(exactMatchList: ExactMatch[], keywordMatchList: KeywordMatch[]): void {
    exactMatchList.forEach((exactMatch) => {
      const matches = this.exactMatches.get(exactMatch.input)
      if (matches) {
        this.exactMatches.set(exactMatch.input, [...matches, exactMatch])
      } else {
        this.exactMatches.set(exactMatch.input, [exactMatch])
      }
    })

    // keywordMatchList.forEach((keywordMatch) => {
    //   keywordMatch.keywords.forEach((keyword) => {
    //     if (!this.keywords.includes(keyword)) {
    //       this.keywords.push(keyword)
    //     }
    //   })
    // })
    // this.keywordMatchList = keywordMatchList
  }

  reply(author: string, message: string): string {
    // check exactInputs and author
    if (this.exactMatches.has(message)) {
      const matches = this.exactMatches.get(message)
      const match = this.getMatchByAuthor(author, matches!)
      if (match) {
        return this.chooseReply(author, match)
      }
    }

    // check keywords

    return '(づ￣ ³￣)づ'
  }

  getMatchByAuthor(author: string, matches: Match[]): Match | null {
    for (const match of matches) {
      if (typeof match.author === 'undefined' || match.author === author) {
        return match
      }
    }
    return null
  }

  chooseReply(author: string, match: Match): string {
    const randomReply = match.output[Math.floor(Math.random() * match.output.length)]
    return randomReply
  }
}

interface Match {
  author?: string
  output: string[]
}

interface ExactMatch extends Match {
  input: string
}

interface KeywordMatch extends Match {
  keywords: string[]
}
