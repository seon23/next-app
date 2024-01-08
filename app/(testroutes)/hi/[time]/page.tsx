import { cap } from "@/app/_lib/utils";

export default function HiTime({ params }: { params: { time: string } }) {
  return (
    <div>
      <h1>Good {cap(params.time)}!</h1>
      {/* <h1>Good {params.time}!</h1> */}
    </div>
  );
}
