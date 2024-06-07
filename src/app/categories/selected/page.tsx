
import { useAppDispatch, useAppSelector } from "@/session/store";

export default function Home(props: {
  searchParams: { selected: string; page: number }
}) {
  return (
    <div className="flex w-full flex-col text-center">
      <h1 className="text-2xl font-bold tracking-tight text-zinc-800">
        Please render
        {props.searchParams.page}
      </h1>
    </div>
  )
}
