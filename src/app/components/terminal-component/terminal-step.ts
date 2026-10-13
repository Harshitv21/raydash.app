export type TerminalStep =
  | {
      type: 'command';        // what the "user" types, shown char by char
      text: string;
      typeSpeedMs?: number;   // optional, delay between characters
      pauseAfterMs?: number;  // wait this long before moving to the next step
    }
  | {
      type: 'output';                  // what the "server" replies, appears instantly
      text: string;
      tone?: 'ok' | 'error' | 'muted'; // picks a color, no tone = plain
      pauseAfterMs?: number;
    };