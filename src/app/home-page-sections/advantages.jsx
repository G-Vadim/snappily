import { Article } from "@/app/components/Article";

export const Advantages = ({ items }) => (
  <section className="flex flex-col gap-6">
    {
      items.map((item, i) => (
        <Article key={i} {...item}/>
      ))
    }
  </section>
);