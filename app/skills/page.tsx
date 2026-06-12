import { skills } from './skills';

export default function SkillsPage() {
  const cardClassName =
    "rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm backdrop-blur";
  const titleClassName =
    "mb-4 flex items-center gap-3 text-xl font-semibold text-red-900";
  const iconClassName = "h-4 w-4 text-gray-500";
  const subheadingClassName =
    "pt-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-500";
  const itemClassName = "flex items-center gap-2 text-gray-700";

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
      <h2 className="mb-10 text-3xl font-bold tracking-tight text-gray-900">
        Tools & Tech
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((section) => {
          const SectionIcon = section.icon;

          return (
            <div key={section.title} className={cardClassName}>
              <h3 className={titleClassName}>
                <SectionIcon className="h-5 w-5 text-red-900" />
                {section.title}
              </h3>

              <ul className="space-y-2">
                {section.items.map((item) =>
                  "kind" in item ? (
                    <li key={item.label} className={subheadingClassName}>
                      {item.label}
                    </li>
                  ) : (
                    <li key={item.label} className={itemClassName}>
                      <item.icon className={iconClassName} />
                      {item.label}
                    </li>
                  )
                )}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};