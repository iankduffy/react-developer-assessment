import { Listing } from "./listing";
import { TopSection } from "./top-section";

export function Home (): JSX.Element {
  return (
    <div>
      <TopSection />
      <Listing/>
    </div>
  )
}