import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { APPLY_ANCHOR, type Module, type ModuleOutcome } from "@/lib/landing-data";

interface CurriculumFlexProps {
  mode: "modules" | "flat";
  modules?: Module[];
  flatItems?: ModuleOutcome[];
  footnote?: string;
}

function renderOutcome(o: ModuleOutcome) {
  const isNested = typeof o !== "string";
  const label = isNested ? o.text : o;
  return (
    <li key={label} className="text-sm text-ink-700">
      <div className="flex gap-3">
        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
        <span>{label}</span>
      </div>
      {isNested && (
        <ul className="mt-2 ml-5 grid gap-2 border-l border-border pl-4">
          {o.children.map((c) => (
            <li key={c} className="flex gap-3 text-sm text-ink-500">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-300" />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function CurriculumFlex({ mode, modules, flatItems, footnote }: CurriculumFlexProps) {
  return (
    <section id="mufredat" className="bg-secondary/40 py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Müfredat</span>
          <h2 className="display-2 mt-4 text-ink-900 text-balance">Program İçeriği</h2>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card px-5 md:px-8">
          {mode === "modules" && modules ? (
            <Accordion type="multiple" defaultValue={modules.map((_, i) => `item-${i}`)}>
              {modules.map((m, i) => (
                <AccordionItem key={m.number} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="py-6 hover:no-underline">
                    <span className="flex items-center gap-4 text-left">
                      <span className="text-sm font-extrabold text-brand">{m.number}</span>
                      <span className="text-base font-bold text-ink-900 md:text-lg">
                        {m.title}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-9">
                      {m.outcomes.length > 0 && (
                        <ul className="grid gap-2.5">{m.outcomes.map(renderOutcome)}</ul>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="py-8">
              <ul className="grid gap-3">{(flatItems ?? []).map(renderOutcome)}</ul>
            </div>
          )}
        </div>

        {footnote && (
          <p className="mt-6 text-center text-sm italic text-ink-500">{footnote}</p>
        )}

        <div className="mt-8 flex justify-center">
          <Button asChild variant="brand" size="xl">
            <a href={APPLY_ANCHOR}>Programa Başvur</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
