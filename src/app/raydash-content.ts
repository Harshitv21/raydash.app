import { TerminalStep } from './components/terminal-component/terminal-step';
import { RaydashData } from './models';

/* all the text and demo scripts for the site */
/* the step arrays below are private; only RAYDASH_DATA leaves */
const binarySafeSteps: TerminalStep[] = [
  { type: 'command', text: 'SET greeting 5\\r\\n' },
  { type: 'output', text: '# 5 = the byte length of the value on the next line', tone: 'muted' },
  { type: 'command', text: 'hi\\nyo\\r\\n' },
  { type: 'output', text: '# the \\n inside the value is data, not the end of the command', tone: 'muted' },
  { type: 'output', text: '← +OK\\r\\n', tone: 'ok' },
  { type: 'command', text: 'GET greeting\\r\\n' },
  { type: 'output', text: '← $5\\r\\n' },
  { type: 'output', text: '← hi\\nyo\\r\\n' },
  { type: 'output', text: '# the same 5 bytes come back, newline intact', tone: 'muted' },
];

const authSteps: TerminalStep[] = [
  { type: 'command', text: 'GET foo' },
  { type: 'output', text: '-ERR NOAUTH Authentication required', tone: 'error' },
  { type: 'command', text: 'AUTH wrong' },
  { type: 'output', text: '-ERR invalid auth token', tone: 'error' },
  { type: 'command', text: 'AUTH <token>' },
  { type: 'output', text: '+OK', tone: 'ok' },
  { type: 'command', text: 'GET foo' },
  { type: 'output', text: '$-1', tone: 'muted' },
  { type: 'output', text: '# authenticated now, $-1 just means "no such key"', tone: 'muted' },
];

const shutdownSteps: TerminalStep[] = [
  { type: 'command', text: 'docker compose down' },
  { type: 'output', text: '[SERVER:MAIN] Received terminated, shutting down gracefully', tone: 'muted' },
  { type: 'output', text: '[SERVER] Listener closed, no longer accepting new connections!', tone: 'muted' },
  { type: 'output', text: '[SERVER] All connections are drained, shutdown is now complete!', tone: 'muted' },
  { type: 'output', text: '[SERVER:MAIN] Bue!', tone: 'muted' },
];

/* anything you don't export stays private to the file */
export const RAYDASH_DATA: RaydashData = {
  /* order matches the order of the sections on the page */
  navbarItems: [
    { hrefId: 'features', title: 'Features' },
    { hrefId: 'description', title: 'Why Raydash?' },
    { hrefId: 'architecture', title: 'Architecture' },
    { hrefId: 'protocol', title: 'Protocol' },
    { hrefId: 'clients', title: 'Clients' },
    { hrefId: 'links', title: 'Links' },
  ],

  features: [
    {
      title: 'Binary safe protocol',
      terminal: { title: 'raw TCP · bytes on the wire', prompt: '→', steps: binarySafeSteps },
    },
    {
      title: 'Optional AUTH',
      terminal: { title: 'raydash-cli', steps: authSteps },
    },
    {
      title: 'Graceful shutdown',
      terminal: { title: 'docker compose down', prompt: '$', steps: shutdownSteps },
    },
    {
      title: 'Ready to use client support',
      link: {
        description:
          "Published on Maven Central (app.raydash:raydash-client-java). Spring Boot auto-configuration plus a cache manager for Spring's @Cacheable.",
        linkText: 'Jump to Clients',
        href: '#clients',
      },
    },
    {
      title: 'Optional Postgres persistence',
      wide: true,
      diagram: {
        cardTitle: 'Optional persistence? How does that work?',
        assetSrc: '/assets/persistence.png',
        alt: 'Persistence diagram. A Java client borrows a pooled socket connection to the Raydash server, which parses the command and uses the in-memory map in store.go. A snapshot loop in db.go saves the store to a Postgres snapshot table every 30 seconds and on graceful shutdown. On startup, Load() reads the keys back from that table.',
        githubLink:
          'https://github.com/Harshitv21/raydash/blob/32a7518b497cf471d233f59a6c1eedfb1d8cb077/diagrams/persistence.png',
      },
    },
  ],

  diagrams: [
    {
      heading: 'Architecture',
      cardTitle: 'How does this whole project work?',
      assetSrc: '/assets/architecture.png',
      alt: 'Architecture diagram. main.go loads environment variables from a .env file or docker-compose, then reads RAYDASH_AUTH_TOKEN, RAYDASH_MAX_KEYS and the database DSN. A valid DSN turns on persistence through db.go and loads the store from the raydash_snapshot table; no DSN keeps the cache in memory; an invalid DSN exits with a fatal error. The store and server then start: a background goroutine removes expired keys, and the server parses commands like GET and SET and passes them to the store.',
      githubLink:
        'https://github.com/Harshitv21/raydash/blob/1720dacfb28abd90587c0ee133eb5b0b24b0af8b/diagrams/architecture.png',
    },
    {
      heading: 'Protocol',
      cardTitle: 'What does the binary safe protocol actually look like?',
      assetSrc: '/assets/protocol.png',
      alt: 'Protocol diagram with two examples of the binary safe protocol. Simple: SET key 7 followed by the 7 raw bytes "raydash", returned as a length and the value. Complex: a 214 byte JSON value full of carriage returns and newlines, stored and returned byte for byte because the server reads exactly the declared number of bytes.',
      githubLink:
        'https://github.com/Harshitv21/raydash/blob/master/diagrams/protocol.png?raw=true',
    },
  ],

  clients: [
    {
      clientName: 'Springboot',
      links: [
        {
          linkTitle: 'Maven Repository',
          link: 'https://mvnrepository.com/artifact/app.raydash/raydash-client-java',
        },
        {
          linkTitle: 'Github Repository',
          link: 'https://github.com/Harshitv21/raydash-client-java',
        },
      ],
    },
  ],
};
