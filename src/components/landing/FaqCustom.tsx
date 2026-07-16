import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { TrainingFaqItem } from "@/lib/trainings-content";

export function FaqCustom({ items }: { items: TrainingFaqItem[] }) {
  return (
    <section id="sss" className="py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <span className="eyebrow">SSS</span>
          <h2 className="display-2 mt-4 text-ink-900 text-balance">Sıkça sorulan sorular</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-700">
            Aradığınız yanıtı bulamazsanız başvuru formundan iletişime geçebilirsiniz.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {items.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-ink-900 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-ink-700">
                {Array.isArray(f.a) ? (
                  <ul className="grid gap-2">
                    {f.a.map((line) => (
                      <li key={line} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  f.a
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
