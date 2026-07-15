Two small edits on /trainings:

1. Calendar height — cap visible event rows
   - Current calendar reserves ~9 empty lanes (`MIN_LANES * BODY_LANE_MULTIPLIER`), making the component very tall even with one event.
   - Reduce the reserved lane count so the calendar shows at most 3–4 event rows before scrolling.
   - Keep the existing 16:9 wrapper and mobile month navigation untouched.

2. Card meta text cleanup
   - Agentic AI Masterclass: remove "Flagship · " from its `meta` string in `src/lib/home-data.ts`.
   - AI Red Teaming Masterclass: remove " · 2 gün" from its `meta` string in `src/lib/home-data.ts`.

Files to change:
- `src/components/trainings/TrainingCalendar.tsx`
- `src/lib/home-data.ts`