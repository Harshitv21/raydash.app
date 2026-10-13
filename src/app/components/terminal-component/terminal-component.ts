import {
  Component, DestroyRef, ElementRef, afterNextRender,
  computed, inject, input, signal,
} from '@angular/core';
import { TerminalStep } from './terminal-step';

interface PrintedLine {
  type: 'command' | 'output';
  text: string;
  tone?: 'ok' | 'error' | 'muted';
}

@Component({
  selector: 'terminal-component',
  templateUrl: './terminal-component.html',
  host: { class: 'block' }
})
export class TerminalComponent {
  steps = input.required<TerminalStep[]>();
  title = input('raydash');
  prompt = input('>');
  loop = input(false);

  printed = signal<PrintedLine[]>([]);
  typing = signal<string | null>(null);
  finished = signal(false);

  minHeightRem = computed(() => (this.steps().length + 1) * 1.5);

  private host = inject<ElementRef<HTMLElement>>(ElementRef);
  private destroyRef = inject(DestroyRef);
  private runId = 0;
  private started = false;

  constructor() {
    afterNextRender(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !this.started) {
            this.started = true;
            this.play();
          }
        },
        { threshold: 0.4 },
      );
      observer.observe(this.host.nativeElement);

      this.destroyRef.onDestroy(() => {
        observer.disconnect();
        this.runId++;
      });
    });
  }

  async play() {
    const id = ++this.runId;
    this.printed.set([]);
    this.typing.set(null);
    this.finished.set(false);

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.printed.set(
        this.steps().map((s) => ({
          type: s.type,
          text: s.text,
          tone: s.type === 'output' ? s.tone : undefined,
        })),
      );
      this.finished.set(true);
      return;
    }

    for (const step of this.steps()) {
      if (id !== this.runId) return;

      if (step.type === 'command') {
        const speed = step.typeSpeedMs ?? 45;
        for (let i = 1; i <= step.text.length; i++) {
          this.typing.set(step.text.slice(0, i));
          await this.sleep(speed);
          if (id !== this.runId) return;
        }
        this.printed.update((lines) => [...lines, { type: 'command', text: step.text }]);
        this.typing.set(null);
      } else {
        this.printed.update((lines) => [
          ...lines,
          { type: 'output', text: step.text, tone: step.tone },
        ]);
      }

      await this.sleep(step.pauseAfterMs ?? (step.type === 'command' ? 400 : 250));
    }

    if (id !== this.runId) return;
    this.finished.set(true);

    if (this.loop()) {
      await this.sleep(2500);
      if (id === this.runId) this.play();
    }
  }

  private sleep(ms: number) {
    return new Promise<void>((resolve) => setTimeout(resolve, ms));
  }
}