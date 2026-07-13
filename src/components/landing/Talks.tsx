import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TALKS, PRESENTATIONS, PUBLICATIONS, type TabItem } from "@/lib/landing-data";

function ItemList({ items }: { items: TabItem[] }) {
  return (
    <ul className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
      {items.map((it) => (
        <li key={it.title}>
          <a
            href={it.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-secondary/60"
          >
            <div>
              <div className="text-sm font-semibold text-ink-900">{it.title}</div>
              <div className="mt-0.5 text-xs text-ink-500">{it.meta}</div>
            </div>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-300 transition-colors group-hover:text-brand" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Talks() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">Otorite</span>
          <h2 className="display-2 mt-4 text-ink-900 text-balance">
            Konuşmalar, sunumlar ve yayınlar
          </h2>
        </div>

        <Tabs defaultValue="konusmalar" className="mt-10">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="konusmalar">Konuşmalar</TabsTrigger>
            <TabsTrigger value="sunumlar">Sunumlar</TabsTrigger>
            <TabsTrigger value="yayinlar">Yayınlar</TabsTrigger>
          </TabsList>
          <TabsContent value="konusmalar">
            <ItemList items={TALKS} />
          </TabsContent>
          <TabsContent value="sunumlar">
            <ItemList items={PRESENTATIONS} />
          </TabsContent>
          <TabsContent value="yayinlar">
            <ItemList items={PUBLICATIONS} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
