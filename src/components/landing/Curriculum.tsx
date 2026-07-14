import { Radio } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MODULES, COURSE, APPLY_ANCHOR } from "@/lib/landing-data";

export function Curriculum() {
  return (
    <section id="mufredat" className="bg-secondary/40 py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Müfredat</span>
            <h2 className="display-2 mt-4 text-ink-900 text-balance">
              {COURSE.modules} Modül, {COURSE.hours} Saat İçerik
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-ink-700">
            <Radio className="h-4 w-4 text-brand" />
            Format: {COURSE.format}
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card px-5 md:px-8">
          <Accordion type="multiple" defaultValue={MODULES.map((_, i) => `item-${i}`)}>
            {MODULES.map((m, i) => (
              <AccordionItem key={m.number} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="py-6 hover:no-underline">
                  <span className="flex items-center gap-4 text-left">
                    <span className="text-sm font-extrabold text-brand">{m.number}</span>
                    <span className="text-base font-bold text-ink-900 md:text-lg">{m.title}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-9">
                    <div className="mb-4 inline-flex items-center gap-1.5 text-xs font-semibold text-ink-500">
                      <Clock className="h-3.5 w-3.5" />
                      {m.duration}
                    </div>
                    <ul className="grid gap-2.5">
                      {m.outcomes.map((o) => (
                        <li key={o} className="flex gap-3 text-sm text-ink-700">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-8 flex justify-center">
          <Button asChild variant="brand" size="xl">
            <a href={APPLY_ANCHOR}>Programa Başvur</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
