import WordsPullUpMultiStyle, { type Segment } from '../components/WordsPullUpMultiStyle'
import SectionLabel from '../components/SectionLabel'

const STATEMENT: Segment[] = [
  { text: 'Relationships are not problems to be solved,', className: 'font-normal' },
  { text: 'but living paradoxes to be held.', className: 'italic font-serif' },
]

export default function Ethos() {
  return (
    <section
      id="ethos"
      className="bg-[#0a0a0a] px-4 sm:px-6 md:px-10 lg:px-14 py-28 sm:py-32 md:py-40"
    >
      <div className="max-w-4xl mx-auto text-center">
        <SectionLabel className="mb-8 sm:mb-10">The idea</SectionLabel>

        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-primary leading-[1.1]">
          <WordsPullUpMultiStyle segments={STATEMENT} />
        </div>

        <p className="mt-8 sm:mt-10 text-primary/50 text-sm">
          The ground all the work stands on.
        </p>
      </div>
    </section>
  )
}
