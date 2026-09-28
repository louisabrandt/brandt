import type { Lang } from './i18n/lang'

/**
 * The Brandt courses. Structural fields (key, slug, accent, primary) are
 * language-neutral; the readable text lives under `en` and `de`. Read a
 * course's text for the current language with courseText(course, lang).
 */

export type CourseKey =
  | 'trust'
  | 'selfworth'
  | 'boundaries'
  | 'conflict'
  | 'attachment'
  | 'desire'

export interface CourseText {
  title: string
  tag: string
  description: string
  intro: string
  learn: string[]
  format: string
  forWhom: string
  audience: string
}

export interface Course {
  key: CourseKey
  slug: string
  /** Dominant warm background tone of the course illustration (for tinting). */
  accent: string
  primary?: boolean
  en: CourseText
  de: CourseText
}

/** Path to a course's hand-drawn thread illustration. */
export const courseIllustration = (slug: string): string =>
  `/illustrations/${slug}.webp`

/** The course's text in the given language. */
export const courseText = (course: Course, lang: Lang): CourseText => course[lang]

export const COURSES: Course[] = [
  {
    key: 'trust',
    primary: true,
    slug: 'rebuilding-trust',
    accent: '#643948',
    en: {
      title: 'Rebuilding Trust',
      tag: 'After betrayal or slow erosion',
      description:
        'How trust actually breaks, and the concrete, staged work that rebuilds it: taking responsibility, attuning, and re-earning safety.',
      intro:
        'Trust rarely breaks in a single moment. Sometimes it wears away through small ruptures left unrepaired, sometimes it shatters at once, and either way it has to be rebuilt on purpose. This course maps how trust actually works, and walks the path back: taking honest responsibility, learning to attune, and slowly re-earning safety, for the one who was hurt and the one who caused the hurt.',
      learn: [
        'How trust is built, broken, and rebuilt, and the mechanics beneath the feeling',
        'Taking responsibility without collapsing into shame or defensiveness',
        'Attuning to the hurt instead of rushing past it',
        'Rebuilding reliability through repeated, visible follow-through',
        'Deciding, with clarity, whether and how to stay',
      ],
      format: 'Online · guided sessions with practice between',
      forWhom: 'After a betrayal, broken promise, or a slow loss of safety.',
      audience: 'For couples & individuals',
    },
    de: {
      title: 'Vertrauen wieder aufbauen',
      tag: 'Nach Verrat oder langsamer Erosion',
      description:
        'Wie Vertrauen wirklich bricht, und die konkrete, schrittweise Arbeit, die es wieder aufbaut: Verantwortung übernehmen, sich einstimmen und Sicherheit neu verdienen.',
      intro:
        'Vertrauen bricht selten in einem einzigen Moment. Manchmal erodiert es durch kleine, unreparierte Risse, manchmal zerbricht es auf einmal, und in beiden Fällen muss es bewusst wieder aufgebaut werden. Dieser Kurs zeigt, wie Vertrauen wirklich funktioniert, und geht den Weg zurück: ehrliche Verantwortung übernehmen, sich einstimmen lernen und langsam Sicherheit neu verdienen, für die verletzte und für die verletzende Seite.',
      learn: [
        'Wie Vertrauen entsteht, bricht und neu wächst, und die Mechanik unter dem Gefühl',
        'Verantwortung übernehmen, ohne in Scham oder Abwehr zu kippen',
        'Sich auf den Schmerz einstimmen, statt über ihn hinwegzueilen',
        'Verlässlichkeit durch wiederholtes, sichtbares Einhalten neu aufbauen',
        'Mit Klarheit entscheiden, ob und wie ihr bleibt',
      ],
      format: 'Online · begleitete Sitzungen mit Übung dazwischen',
      forWhom: 'Nach einem Verrat, einem gebrochenen Versprechen oder einem langsamen Verlust von Sicherheit.',
      audience: 'Für Paare & Einzelne',
    },
  },
  {
    key: 'selfworth',
    primary: true,
    slug: 'the-ground-you-stand-on',
    accent: '#d48f7e',
    en: {
      title: 'The Ground You Stand On',
      tag: 'Self-worth & self-care',
      description:
        'Meeting yourself with steadiness: self-worth, self-care, and your own purpose, so you can love from a settled place.',
      intro:
        "So much of how we love is shaped by how we hold ourselves. When your worth rises and falls with the other person's mood, approval or presence, closeness starts to feel like anxiety rather than steadiness. This course is about building an inner ground that doesn't wash away. You care for yourself, learn to like who you are, and find your own direction, so you can show up from a settled place and stay yourself inside intimacy.",
      learn: [
        'Where your sense of worth was shaped, and how it plays out in love',
        'Taking care of yourself, and learning to genuinely love who you are',
        "Finding your own purpose and direction, not only the couple's",
        'Staying yourself in closeness, instead of shrinking or performing',
        'Asking for what you need without apology or over-explaining',
        "Building a steadiness that doesn't depend on the relationship's weather",
      ],
      format: 'Online · reflective work at your own pace',
      forWhom:
        'Anyone who loses themselves in relationships, or whose confidence rises and falls with their partner.',
      audience: 'For individuals & couples',
    },
    de: {
      title: 'Der Boden, auf dem du stehst',
      tag: 'Selbstwert & Selbstfürsorge',
      description:
        'Dir selbst mit Stabilität begegnen: Selbstwert, Selbstfürsorge und ein eigener Sinn, damit du aus einem gefestigten Selbst heraus lieben kannst.',
      intro:
        'Wie wir lieben, hängt stark davon ab, wie wir uns selbst halten. Wenn dein Wert mit der Stimmung, der Zustimmung oder der Anwesenheit des anderen steigt und fällt, wird Nähe eher zu Angst als zu Halt. In diesem Kurs baust du einen inneren Boden, der nicht wegbricht: Du sorgst für dich, lernst dich zu mögen und findest deine eigene Richtung, damit du gefestigt in die Beziehung gehst und in der Nähe du selbst bleibst.',
      learn: [
        'Wo dein Selbstwert geprägt wurde, und wie er sich in der Liebe zeigt',
        'Für dich sorgen und lernen, wirklich zu mögen, wer du bist',
        'Deinen eigenen Sinn und deine Richtung finden, nicht nur die des Paares',
        'In Nähe du selbst bleiben, statt zu schrumpfen oder zu funktionieren',
        'Um das bitten, was du brauchst, ohne Entschuldigung oder lange Erklärung',
        'Eine Stabilität bauen, die nicht vom Wetter der Beziehung abhängt',
      ],
      format: 'Online · reflektierende Arbeit in deinem Tempo',
      forWhom:
        'Für alle, die sich in Beziehungen verlieren oder deren Selbstvertrauen mit dem Partner steigt und fällt.',
      audience: 'Für Einzelne & Paare',
    },
  },
  {
    key: 'selfworth',
    slug: 'finding-your-purpose',
    accent: '#e39e25',
    en: {
      title: 'Finding Your Purpose',
      tag: 'Purpose & direction',
      description:
        'Discovering who you are and what you want the relationship to be for, moving from drifting to choosing.',
      intro:
        "It's easy to lose your sense of direction inside a long relationship. You organise around the other person, or around keeping the peace, until you're not quite sure what you want any more. This course is about reconnecting with your own purpose: what you value, what you're building, and what you want this relationship to serve, so it becomes something you actively choose rather than something that simply happens to you.",
      learn: [
        'Reconnecting with what you actually value and want',
        "Telling the difference between the relationship's needs and your own",
        'Moving from drifting to consciously choosing',
        'Bringing your direction into the relationship without losing it',
        'Building a shared sense of purpose, together',
      ],
      format: 'Online · reflective work at your own pace',
      forWhom: "Anyone who feels they've lost their direction inside the relationship.",
      audience: 'For individuals & couples',
    },
    de: {
      title: 'Deinen Sinn finden',
      tag: 'Sinn & Richtung',
      description:
        'Entdecken, wer du bist und wofür die Beziehung da sein soll, vom Sich-treiben-Lassen zum bewussten Wählen.',
      intro:
        'In einer langen Beziehung verliert man leicht die Richtung. Man richtet sich nach dem anderen, oder danach, den Frieden zu wahren, bis man nicht mehr genau weiß, was man eigentlich will. In diesem Kurs verbindest du dich wieder mit deinem eigenen Sinn: was dir wichtig ist, was du aufbaust und wofür diese Beziehung stehen soll, damit sie etwas wird, das du bewusst wählst, statt etwas, das dir einfach zustößt.',
      learn: [
        'Dich wieder mit dem verbinden, was dir wirklich wichtig ist',
        'Den Unterschied zwischen den Bedürfnissen der Beziehung und deinen eigenen erkennen',
        'Vom Treiben zum bewussten Wählen kommen',
        'Deine Richtung in die Beziehung bringen, ohne sie zu verlieren',
        'Gemeinsam einen geteilten Sinn aufbauen',
      ],
      format: 'Online · reflektierende Arbeit in deinem Tempo',
      forWhom: 'Für alle, die das Gefühl haben, ihre Richtung in der Beziehung verloren zu haben.',
      audience: 'Für Einzelne & Paare',
    },
  },
  {
    key: 'boundaries',
    primary: true,
    slug: 'boundaries-without-walls',
    accent: '#67673d',
    en: {
      title: 'Boundaries Without Walls',
      tag: 'Limits & over-giving',
      description:
        'Knowing where you end and the other begins: saying no without guilt, and staying connected while protected.',
      intro:
        'Boundaries get mistaken for walls: cold, final, distancing. In truth, a good boundary is what makes real closeness possible. It tells the other person where you are, so they can actually meet you. This course is about knowing your limits, saying them clearly and kindly, and staying connected while protected, so the cycle of over-giving and quiet resentment can finally ease.',
      learn: [
        'The difference between a boundary and a wall',
        'Spotting the cycle of over-functioning, resentment and withdrawal',
        'Saying no without guilt, and yes without self-abandonment',
        'Holding a limit when the other person pushes back',
        'Staying connected and protected at the same time',
      ],
      format: 'Online · guided practice and real scripts',
      forWhom:
        'People who give too much, struggle to say no, or feel invisible and exhausted.',
      audience: 'For individuals & couples',
    },
    de: {
      title: 'Grenzen ohne Mauern',
      tag: 'Grenzen & Zuviel-Geben',
      description:
        'Wissen, wo du endest und der andere beginnt: Nein sagen ohne Schuld, und verbunden bleiben, während du geschützt bist.',
      intro:
        'Grenzen werden mit Mauern verwechselt: kalt, endgültig, distanzierend. In Wahrheit macht eine gute Grenze echte Nähe erst möglich. Sie zeigt dem anderen, wo du bist, damit er dich wirklich treffen kann. In diesem Kurs geht es darum, deine Grenzen zu kennen, sie klar und freundlich zu sagen und verbunden zu bleiben, während du geschützt bist, damit der Kreislauf aus Zuviel-Geben und leisem Groll endlich nachlassen kann.',
      learn: [
        'Der Unterschied zwischen einer Grenze und einer Mauer',
        'Den Kreislauf aus Überfunktionieren, Groll und Rückzug erkennen',
        'Nein sagen ohne Schuld, und Ja ohne Selbstaufgabe',
        'Eine Grenze halten, wenn der andere dagegen drückt',
        'Verbunden und geschützt sein zur gleichen Zeit',
      ],
      format: 'Online · begleitete Übung und echte Formulierungen',
      forWhom:
        'Für Menschen, die zu viel geben, schwer Nein sagen oder sich unsichtbar und erschöpft fühlen.',
      audience: 'Für Einzelne & Paare',
    },
  },
  {
    key: 'conflict',
    primary: true,
    slug: 'beneath-the-argument',
    accent: '#be5b2e',
    en: {
      title: 'Beneath the Argument',
      tag: 'Communication & conflict',
      description:
        'Turning the fights that repeat into conversations that connect, by finding the real issue under the surface one.',
      intro:
        "Most couples don't fight about what they're fighting about. The dishes, the lateness, the tone: that's the surface. Underneath runs something older and more tender, an unspoken need, a fear of not mattering, a quiet struggle over power. This course helps you find the real issue beneath the recurring one, and turn the arguments that keep repeating into conversations that bring you closer.",
      learn: [
        'The three conflict patterns couples fall into, and yours',
        'Finding the real need under the surface complaint',
        'Interrupting escalation and stonewalling before they take over',
        'Repairing mid-conflict, not days later',
        'Turning a recurring fight into a conversation that connects',
      ],
      format: 'Online · live practice with your patterns',
      forWhom:
        'Couples stuck in the same argument, or swinging between escalation and silence.',
      audience: 'For couples & individuals',
    },
    de: {
      title: 'Unter dem Streit',
      tag: 'Kommunikation & Konflikt',
      description:
        'Die Streits, die sich wiederholen, in Gespräche verwandeln, die verbinden, indem ihr das wahre Thema unter dem oberflächlichen findet.',
      intro:
        'Die meisten Paare streiten nicht über das, worüber sie streiten. Der Abwasch, das Zuspätkommen, der Ton: das ist die Oberfläche. Darunter läuft etwas Älteres und Zarteres, ein unausgesprochenes Bedürfnis, die Angst, nicht zu zählen, ein leiser Kampf um Macht. Dieser Kurs hilft euch, das wahre Thema unter dem wiederkehrenden zu finden, und die Streits, die sich wiederholen, in Gespräche zu verwandeln, die euch näherbringen.',
      learn: [
        'Die drei Konfliktmuster, in die Paare geraten, und eures',
        'Das echte Bedürfnis unter der oberflächlichen Klage finden',
        'Eskalation und Mauern unterbrechen, bevor sie übernehmen',
        'Mitten im Konflikt reparieren, nicht erst Tage später',
        'Einen wiederkehrenden Streit in ein Gespräch verwandeln, das verbindet',
      ],
      format: 'Online · Live-Übung mit euren Mustern',
      forWhom:
        'Für Paare, die im selben Streit feststecken oder zwischen Eskalation und Schweigen pendeln.',
      audience: 'Für Paare & Einzelne',
    },
  },
  {
    key: 'conflict',
    slug: 'say-what-you-need',
    accent: '#df9513',
    en: {
      title: 'Say What You Need',
      tag: 'Needs & love languages',
      description:
        'Learning to name what you need, and to hear it, so love actually lands across your different languages.',
      intro:
        "Most of us were never taught to say clearly what we need, so we hint, withhold, or hope the other person will simply know. And we each give and receive love differently, which means care can be offered and still not land. This course is about naming your needs without apology, hearing your partner's beneath their words, and closing the gap between the love that's given and the love that's felt.",
      learn: [
        'Naming what you need, clearly and without apology',
        'Why hinting and hoping quietly erodes closeness',
        'How you each give and receive love, and where you miss each other',
        "Hearing the need beneath your partner's words",
        'Asking in a way the other person can actually respond to',
      ],
      format: 'Online · guided practice and real scripts',
      forWhom:
        "Anyone who struggles to ask for what they need, or feels unseen despite their partner's efforts.",
      audience: 'For couples & individuals',
    },
    de: {
      title: 'Sag, was du brauchst',
      tag: 'Bedürfnisse & Liebessprachen',
      description:
        'Lernen, zu benennen, was du brauchst, und es zu hören, damit Liebe wirklich ankommt, über eure unterschiedlichen Sprachen hinweg.',
      intro:
        'Den meisten von uns wurde nie beigebracht, klar zu sagen, was wir brauchen, also deuten wir an, halten zurück oder hoffen, der andere würde es einfach wissen. Und wir geben und empfangen Liebe unterschiedlich, was bedeutet, dass Fürsorge angeboten werden kann und trotzdem nicht ankommt. In diesem Kurs geht es darum, deine Bedürfnisse ohne Entschuldigung zu benennen, die deines Partners unter seinen Worten zu hören und die Lücke zu schließen zwischen der Liebe, die gegeben wird, und der, die ankommt.',
      learn: [
        'Benennen, was du brauchst, klar und ohne Entschuldigung',
        'Warum Andeuten und Hoffen die Nähe leise aushöhlt',
        'Wie ihr Liebe jeweils gebt und empfangt, und wo ihr euch verfehlt',
        'Das Bedürfnis unter den Worten deines Partners hören',
        'So bitten, dass der andere wirklich antworten kann',
      ],
      format: 'Online · begleitete Übung und echte Formulierungen',
      forWhom:
        'Für alle, die schwer um das bitten können, was sie brauchen, oder sich trotz aller Mühe des Partners ungesehen fühlen.',
      audience: 'Für Paare & Einzelne',
    },
  },
  {
    key: 'conflict',
    slug: 'power-and-powerlessness',
    accent: '#401a34',
    en: {
      title: 'Power & Powerlessness',
      tag: 'Power & control',
      description:
        'The quiet dynamics of control and giving in, and how to build a relationship of equals.',
      intro:
        'Every relationship carries power: who decides, who defers, who pursues, who withdraws. Often it runs invisibly. One person over-functions and quietly controls; the other gives in and quietly resents. This course brings those dynamics into the light, so you can see where you reach for control or hand it away, and build a relationship that feels like two equals rather than one leading and one following.',
      learn: [
        'Seeing the invisible power dynamics you both live inside',
        'Where you reach for control, and where you give it away',
        'The link between powerlessness, resentment and withdrawal',
        'Sharing decisions and influence more evenly',
        'Moving from one-up and one-down to a partnership of equals',
      ],
      format: 'Online · guided reflection and paired practice',
      forWhom:
        'Couples where one leads and the other follows, or where control and resentment quietly build.',
      audience: 'For couples & individuals',
    },
    de: {
      title: 'Macht & Ohnmacht',
      tag: 'Macht & Kontrolle',
      description:
        'Die leisen Dynamiken von Kontrolle und Nachgeben, und wie ihr eine Beziehung auf Augenhöhe baut.',
      intro:
        'Jede Beziehung trägt Macht in sich: wer entscheidet, wer nachgibt, wer verfolgt, wer sich zurückzieht. Oft läuft es unsichtbar. Eine:r überfunktioniert und kontrolliert leise, der andere gibt nach und grollt leise. Dieser Kurs holt diese Dynamiken ans Licht, damit du siehst, wo du nach Kontrolle greifst oder sie abgibst, und eine Beziehung baust, die sich wie zwei Gleichwertige anfühlt, statt wie eine:r, der führt, und eine:r, der folgt.',
      learn: [
        'Die unsichtbaren Machtdynamiken sehen, in denen ihr beide lebt',
        'Wo du nach Kontrolle greifst, und wo du sie abgibst',
        'Der Zusammenhang von Ohnmacht, Groll und Rückzug',
        'Entscheidungen und Einfluss gleichmäßiger teilen',
        'Von oben-unten zu einer Partnerschaft auf Augenhöhe kommen',
      ],
      format: 'Online · begleitete Reflexion und Übung zu zweit',
      forWhom:
        'Für Paare, in denen eine:r führt und der andere folgt, oder in denen sich Kontrolle und Groll leise aufbauen.',
      audience: 'Für Paare & Einzelne',
    },
  },
  {
    key: 'conflict',
    slug: 'into-their-world',
    accent: '#78744a',
    en: {
      title: 'Into Their World',
      tag: 'Empathy & attunement',
      description:
        'The practice of truly understanding the other: reading beneath their words, and assuming good intent.',
      intro:
        "Empathy isn't agreeing, and it isn't fixing. It's the willingness to step, for a moment, into the other person's world and see why what they do makes sense to them. It's one of the most powerful things you can bring to a relationship, and one of the easiest to lose under stress. This course is a practice: reading beneath the words, checking your assumptions, and meeting your partner where they actually are.",
      learn: [
        "What empathy is, and what it isn't (agreeing, fixing, absorbing)",
        "Reading beneath your partner's words to the feeling underneath",
        'Catching the assumptions and stories you quietly fill in',
        'Assuming good intent without abandoning yourself',
        'Staying empathic in conflict, when it matters most',
      ],
      format: 'Online · guided practice, solo or as a pair',
      forWhom:
        'Anyone who wants to understand their partner more deeply, especially when it is hard.',
      audience: 'For couples & individuals',
    },
    de: {
      title: 'In seine Welt',
      tag: 'Empathie & Einstimmung',
      description:
        'Die Praxis, den anderen wirklich zu verstehen: unter seinen Worten lesen und gute Absicht annehmen.',
      intro:
        'Empathie ist nicht Zustimmen, und sie ist nicht Reparieren. Sie ist die Bereitschaft, für einen Moment in die Welt des anderen zu treten und zu sehen, warum das, was er tut, für ihn Sinn ergibt. Sie ist eines der Mächtigsten, das du in eine Beziehung bringen kannst, und eines der ersten, das unter Stress verloren geht. Dieser Kurs ist eine Praxis: unter den Worten lesen, deine Annahmen prüfen und deinem Partner dort begegnen, wo er wirklich ist.',
      learn: [
        'Was Empathie ist, und was nicht (Zustimmen, Reparieren, Aufsaugen)',
        'Unter den Worten deines Partners das Gefühl darunter lesen',
        'Die Annahmen und Geschichten bemerken, die du leise ergänzt',
        'Gute Absicht annehmen, ohne dich selbst aufzugeben',
        'In Konflikten empathisch bleiben, wenn es am meisten zählt',
      ],
      format: 'Online · begleitete Übung, allein oder zu zweit',
      forWhom:
        'Für alle, die ihren Partner tiefer verstehen wollen, gerade wenn es schwerfällt.',
      audience: 'Für Paare & Einzelne',
    },
  },
  {
    key: 'attachment',
    primary: true,
    slug: 'your-patterns-decoded',
    accent: '#c55222',
    en: {
      title: 'Your Patterns, Decoded',
      tag: 'Attachment',
      description:
        'Your attachment style and the scripts you run under stress (pursuing, withdrawing, bracing), and how to rewrite them.',
      intro:
        "Under stress, we each run a script we didn't choose: reaching harder, pulling away, bracing for disappointment. These are attachment patterns, learned long before this relationship, and they shape how you connect far more than intention does. This course helps you see your pattern clearly, understand where it came from, and begin, deliberately, to rewrite it.",
      learn: [
        'The attachment styles, without the labels-as-verdict',
        'Your go-to move under threat: pursue, withdraw, or brace',
        'Why you and your partner trigger each other so precisely',
        'Meeting the need beneath the pattern, in yourself and them',
        'Practising a new response until it becomes available',
      ],
      format: 'Online · reflection and paired practice',
      forWhom:
        'Anyone who keeps repeating the same relational dynamic and wants to understand why.',
      audience: 'For individuals & couples',
    },
    de: {
      title: 'Deine Muster, entschlüsselt',
      tag: 'Bindung',
      description:
        'Dein Bindungsstil und die Skripte, die du unter Stress fährst (verfolgen, zurückziehen, dich wappnen), und wie du sie neu schreibst.',
      intro:
        'Unter Stress fährt jede:r von uns ein Skript, das wir nicht gewählt haben: stärker greifen, sich zurückziehen, sich gegen Enttäuschung wappnen. Das sind Bindungsmuster, gelernt lange vor dieser Beziehung, und sie prägen, wie du dich verbindest, weit mehr als die Absicht. Dieser Kurs hilft dir, dein Muster klar zu sehen, zu verstehen, woher es kommt, und bewusst zu beginnen, es neu zu schreiben.',
      learn: [
        'Die Bindungsstile, ohne die Etiketten als Urteil',
        'Dein Reflex unter Bedrohung: verfolgen, zurückziehen oder wappnen',
        'Warum du und dein Partner euch so präzise triggert',
        'Dem Bedürfnis unter dem Muster begegnen, bei dir und beim anderen',
        'Eine neue Reaktion üben, bis sie verfügbar wird',
      ],
      format: 'Online · Reflexion und Übung zu zweit',
      forWhom:
        'Für alle, die dieselbe Beziehungsdynamik immer wiederholen und verstehen wollen, warum.',
      audience: 'Für Einzelne & Paare',
    },
  },
  {
    key: 'attachment',
    slug: 'where-it-began',
    accent: '#fdf1dc',
    en: {
      title: 'Where It Began',
      tag: 'Childhood & origins',
      description:
        'Understanding the childhood and family patterns you carry, and gently loosening their grip.',
      intro:
        'The way you love was rehearsed long before this relationship: in your family, in how your parents related, in the moments you learned what closeness cost and what it was safe to need. This course helps you trace those origins with compassion rather than blame. You name old wounds, see how they still shape you, and begin to respond from the present instead of the past.',
      learn: [
        'How your family and parents shaped your template for love',
        'Naming old wounds without blame or endless excavation',
        "Recognising when you're reacting to the past, not the present",
        'Understanding the needs that went unmet, and meeting them now',
        'Loosening the grip of patterns you never chose',
      ],
      format: 'Online · reflective, at your own pace',
      forWhom:
        'Anyone whose childhood or family still echoes in their relationships today.',
      audience: 'For individuals & couples',
    },
    de: {
      title: 'Wo es begann',
      tag: 'Kindheit & Herkunft',
      description:
        'Die Kindheits- und Familienmuster verstehen, die du trägst, und ihren Griff behutsam lösen.',
      intro:
        'Wie du liebst, wurde lange vor dieser Beziehung eingeübt: in deiner Familie, darin, wie deine Eltern in Beziehung standen, in den Momenten, in denen du gelernt hast, was Nähe kostet und was zu brauchen sicher war. Dieser Kurs hilft dir, diese Ursprünge mit Mitgefühl statt mit Schuld nachzuzeichnen. Du benennst alte Wunden, siehst, wie sie dich noch prägen, und beginnst, aus der Gegenwart heraus zu reagieren statt aus der Vergangenheit.',
      learn: [
        'Wie deine Familie und deine Eltern deine Vorlage für Liebe geprägt haben',
        'Alte Wunden benennen, ohne Schuld oder endloses Graben',
        'Erkennen, wenn du auf die Vergangenheit reagierst, nicht auf die Gegenwart',
        'Die Bedürfnisse verstehen, die unerfüllt blieben, und sie jetzt erfüllen',
        'Den Griff von Mustern lösen, die du nie gewählt hast',
      ],
      format: 'Online · reflektierend, in deinem Tempo',
      forWhom:
        'Für alle, in deren Beziehungen Kindheit oder Familie bis heute nachhallen.',
      audience: 'Für Einzelne & Paare',
    },
  },
  {
    key: 'desire',
    primary: true,
    slug: 'desire-reconnected',
    accent: '#cd7b67',
    en: {
      title: 'Desire, Reconnected',
      tag: 'Intimacy & desire',
      description:
        'Bringing closeness and desire back into the same room, reconnecting emotional safety with physical intimacy.',
      intro:
        'Desire is one of the first things to go quiet under stress, distance, or years of routine, and one of the hardest to talk about. Drawing on sex therapy and the link between emotional safety and physical intimacy, this course helps you understand what dampened desire, bridge differences without blame, and reconnect closeness and wanting, at a pace that works for both of you.',
      learn: [
        "Why desire fades, and why that's not a verdict on the relationship",
        'Understanding differences in desire without pressure or blame',
        'Rebuilding presence and pleasure with structured, low-pressure steps',
        'Reconnecting emotional safety with physical closeness',
        'Keeping desire alive through the seasons of a relationship',
      ],
      format: 'Online · discreet, step-by-step',
      forWhom:
        'Couples or individuals where desire has gone quiet, differs, or feels stuck, at any stage.',
      audience: 'For couples & individuals',
    },
    de: {
      title: 'Begehren, neu verbunden',
      tag: 'Intimität & Begehren',
      description:
        'Nähe und Begehren zurück in denselben Raum bringen, emotionale Sicherheit und körperliche Intimität wieder verbinden.',
      intro:
        'Begehren ist eines der ersten Dinge, die unter Stress, Distanz oder Jahren der Routine leise werden, und eines der schwersten, darüber zu sprechen. Gestützt auf Sexualtherapie und den Zusammenhang von emotionaler Sicherheit und körperlicher Intimität hilft dir dieser Kurs zu verstehen, was das Begehren gedämpft hat, Unterschiede ohne Schuld zu überbrücken und Nähe und Verlangen wieder zu verbinden, in einem Tempo, das für euch beide passt.',
      learn: [
        'Warum Begehren nachlässt, und warum das kein Urteil über die Beziehung ist',
        'Unterschiede im Begehren verstehen, ohne Druck oder Schuld',
        'Präsenz und Lust mit strukturierten, druckarmen Schritten wieder aufbauen',
        'Emotionale Sicherheit und körperliche Nähe wieder verbinden',
        'Begehren durch die Jahreszeiten einer Beziehung lebendig halten',
      ],
      format: 'Online · diskret, Schritt für Schritt',
      forWhom:
        'Für Paare oder Einzelne, bei denen Begehren leise geworden ist, sich unterscheidet oder feststeckt, in jeder Phase.',
      audience: 'Für Paare & Einzelne',
    },
  },
  {
    key: 'desire',
    slug: 'lets-talk-about-sex',
    accent: '#2e1925',
    en: {
      title: "Let's Talk About Sex",
      tag: 'Sex, pleasure & communication',
      description:
        'An honest, shame-free space for sex: desire, pleasure, kinks, and learning to talk about all of it.',
      intro:
        "Sex is where many couples go quiet, not because it doesn't matter, but because it's the hardest thing to talk about. This course opens an honest, shame-free space to explore your sex life: understanding desire and pleasure, naming what you want and what you're curious about (kinks included), and building the language to talk about sex before, during and after, so it stays a shared, living part of the relationship rather than something avoided.",
      learn: [
        'Building the language to talk about sex, without shame',
        'Understanding your own desire, pleasure and turn-ons',
        'Exploring curiosity and kinks, safely and with consent',
        'Bridging differences in what you each want',
        'Keeping sex a shared, spoken part of the relationship',
      ],
      format: 'Online · discreet, step-by-step',
      forWhom:
        'Couples or individuals who want a richer, more open sexual connection.',
      audience: 'For couples & individuals',
    },
    de: {
      title: 'Reden wir über Sex',
      tag: 'Sex, Lust & Kommunikation',
      description:
        'Ein ehrlicher, schamfreier Raum für Sex: Begehren, Lust, Vorlieben und lernen, über all das zu sprechen.',
      intro:
        'Sex ist der Ort, an dem viele Paare verstummen, nicht weil er unwichtig wäre, sondern weil er das Schwerste ist, darüber zu sprechen. Dieser Kurs öffnet einen ehrlichen, schamfreien Raum, um euer Sexleben zu erkunden: Begehren und Lust verstehen, benennen, was ihr wollt und worauf ihr neugierig seid (Vorlieben inklusive), und die Sprache aufbauen, um vor, während und nach dem Sex darüber zu sprechen, damit er ein geteilter, lebendiger Teil der Beziehung bleibt, statt vermieden zu werden.',
      learn: [
        'Die Sprache aufbauen, um über Sex zu sprechen, ohne Scham',
        'Dein eigenes Begehren, deine Lust und deine Erregung verstehen',
        'Neugier und Vorlieben erkunden, sicher und einvernehmlich',
        'Unterschiede überbrücken in dem, was ihr jeweils wollt',
        'Sex ein geteilter, besprochener Teil der Beziehung bleiben lassen',
      ],
      format: 'Online · diskret, Schritt für Schritt',
      forWhom:
        'Für Paare oder Einzelne, die eine reichere, offenere sexuelle Verbindung wollen.',
      audience: 'Für Paare & Einzelne',
    },
  },
]

/** Lookup helpers. */
export const courseBySlug = (slug: string): Course | undefined =>
  COURSES.find((c) => c.slug === slug)

/** The lead course the Fit Finder recommends for a theme. */
export const primaryCourseByKey = (key: CourseKey): Course =>
  (COURSES.find((c) => c.key === key && c.primary) ??
    COURSES.find((c) => c.key === key)) as Course
